import { BASE_URL } from "@/Constants";
import axios from "axios";

export async function GetAllProducts() {
  try {
    const response = await axios.get(
      BASE_URL + "/api/product/get-all-products"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

