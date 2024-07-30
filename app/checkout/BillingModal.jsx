"use-client";
import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";

const BillingModal = ({ isVisible, onClose }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    contact_number: "",
    street: "",
    city: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //   const handle = (e) => {
  //     const newData = { ...data };
  //     newData[e.target.id] = e.target.value;
  //     setData(newData);
  //     console.log(newData);
  //   };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formValues);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // try {
    //   const response = await axios.post("", formData);
    //   if (response.status === 200) {
    //     console.log("Data submitted successfully");

    //     onClose();
    //   } else {
    //     console.error("Error submitting data");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };
  //validation part
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.contact_number) {
      errors.contact_number = "Contact Number is required!";
    } else if (values.contact_number.length !== 8) {
      errors.contact_number = "Contact Number must be 8 digits long";
    }

    if (!values.street) {
      errors.street = "Street Name is required!";
    }

    if (!values.city) {
      errors.city = "City Name is required!";
    }

    return errors;
  };

  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[600px] flex flex-col  ">
        <button
          className="text-white text-xl place-self-end "
          onClick={() => {
            onClose();
          }}
        >
          <ImCross className="text-white"/>
        </button>
        <div className="bg-white p-2 rounded ">
          <div className="leading-loose">
            <form className="max-w-xl m-4 p-10" onSubmit={submitHandler}>
              <p className="text-gray-800 text-bold font-medium">
                Your Credentials
              </p>
              <div className="">
                <label className="block text-sm text-gray-800" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  aria-label="Name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={formValues.name}
                />
                <p className="text-red-800 text-[0.750rem]">
                  {formErrors.name}
                </p>
              </div>
              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  aria-label="Email"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={formValues.email}
                />
                <p className="text-red-800 text-[0.750rem]">
                  {formErrors.email}
                </p>
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="contact_number"
                >
                  Contact Number
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="contact_number"
                  name="contact_number"
                  type="tel"
                  placeholder="Your Contact Number"
                  aria-label="Contact Number"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={formValues.contact_number}
                />
                <p className="text-red-800 text-[0.750rem]">
                  {formErrors.contact_number}
                </p>
              </div>

              <div className="mt-2">
                <h1>Address</h1>
                <label className="block text-sm text-gray-600" htmlFor="street">
                  Street
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="street"
                  name="street"
                  type="text"
                  placeholder="Street"
                  aria-label="Street"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={formValues.street}
                />
                <p className="text-red-800 text-[0.750rem]">
                  {formErrors.street}
                </p>
              </div>
              <div className="mt-2">
                <label className=" text-sm block text-gray-600" htmlFor="city">
                  City
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="city"
                  name="city"
                  type="text"
                  placeholder="City"
                  aria-label="City"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={formValues.city}
                />
                <p className="text-red-800 text-[0.750rem]">
                  {formErrors.city}
                </p>
              </div>

              <div className="mt-4">
                <button
                  className="px-4 py-1 text-white  bg-slate-800 rounded"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingModal;
