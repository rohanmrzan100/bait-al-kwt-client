import { BASE_URL } from "@/Constants";
import ActionBtn from "@/app/components/ActionBtn";
import Status from "@/app/components/Status";
import { GetAllProducts } from "@/app/helper/Functions";
import { IProductProps } from "@/app/type";
import { formatPrice } from "@/app/utils/FormatPrice";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import {
  MdCached,
  MdClose,
  MdDelete,
  MdDone,
  MdRemoveRedEye,
} from "react-icons/md";
import { toast } from "react-toastify";

const ManageProductsClient = () => {
  const router = useRouter();

  const [products, setProducts] = useState<IProductProps[] | null>(null);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const response = await GetAllProducts();
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchAllProducts();
  }, [flag]);
  let rows: any[] = [];
  let columns: any[] = [];
  if (products) {
    rows = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: formatPrice(product.price),
        category: product.category,
        inStock: product.inStock,
        images: product.image,
      };
    });

    columns = [
      {
        field: "id",
        headerName: "ID",
        width: 220,
      },
      {
        field: "name",
        headerName: "Name",
        width: 220,
      },
      {
        field: "price",
        headerName: "Price(KWD)",
        width: 100,
        renderCell: (params: any) => {
          return (
            <div className="font-bold text-slate-800">{params.row.price}</div>
          );
        },
      },
      {
        field: "category",
        headerName: "Category",
        width: 100,
      },
      {
        field: "inStock",
        headerName: "In Stock",
        width: 120,
        renderCell: (params: any) => {
          return (
            <div className="">
              {params.row.inStock === true ? (
                <Status
                  text="In Stock"
                  icon={MdDone}
                  bg="bg-teal-200"
                  color="text-teal-700"
                />
              ) : (
                <Status
                  text="Out of Stock"
                  icon={MdClose}
                  bg="bg-rose-200"
                  color="text-rose-700"
                />
              )}
            </div>
          );
        },
      },
      {
        field: "action",
        headerName: "Actions",
        width: 200,
        renderCell: (params: any) => {
          return (
            <div className="flex justify-between items-center gap-4 w-full h-full ">
              <ActionBtn
                icon={MdCached}
                onClick={() => {
                  handleToggleStock(params.row.id, params.row.inStock);
                }}
              />
              <ActionBtn
                icon={MdDelete}
                onClick={() => {
                  handleDeleteProduct(params.row.id);
                }}
              />
              <ActionBtn
                icon={MdRemoveRedEye}
                onClick={() => router.push(`/product/${params.row.id}`)}
              />
            </div>
          );
        },
      },
    ];
  }

  const handleToggleStock = (id: string, inStock: boolean) => {
    const token = getCookie("token");
    axios
      .put(
        BASE_URL + "/api/product/toggle-in-stock",
        {
          id: id,
          inStock: inStock,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        toast.success("Product Status changed");
        setFlag(!flag);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong !");
      });
  };
  const handleDeleteProduct = (id: string) => {
    const token = getCookie("token");
    toast("Deleting Product ...");
    axios
      .delete(`${BASE_URL}/api/product/delete-product`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { id: id },
      })
      .then((_) => {
        toast.success("Product Deleted Sucessfully");
        setFlag(!flag);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong !");
      });
  };
  return (
    <div className="max-w-[1150px] m-auto text-xl ">
      <h1 className="py-4 text-3xl font-bold text-slate-700 text-center">
        Manage Product
      </h1>
      <div style={{ height: 450, width: "100% " }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 20]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ManageProductsClient;
