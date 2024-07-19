import React, { useState } from "react";
import Input from "../components/Input";
import createPostApi from "../apis/createPost";
import validateInput from "../features/authentication/validate-input";
import { toast } from "react-toastify";

const CreatePost = () => {
  const initialPostInput = {
    productName: "",
    gender: "",
    productType: "",
    price: "",
    description: "",
    files: [],
  };

  const initialPostInputError = {
    productName: "",
    gender: "",
    productType: "",
    price: "",
    description: "",
    files: "",
  };

  const [postInput, setPostInput] = useState(initialPostInput);
  const [postInputError, setPostInputError] = useState(initialPostInputError);

  const handleChangeSetUserInput = (e) => {
    if (e.target.name === "files") {
      setPostInput({ ...postInput, files: e.target.files });
    } else {
      setPostInput({ ...postInput, [e.target.name]: e.target.value });
    }
  };

  const handleClickSubmitForm = async (e) => {
    e.preventDefault();
    const error = validateInput({
      ...postInput,
      files: Array.from(postInput.files),
    });

    if (error) {
      setPostInputError(error);
      return;
    }
    setPostInputError(initialPostInputError);

    const newData = new FormData();
    newData.append("productName", postInput.productName);
    newData.append("gender", postInput.gender);
    newData.append("productType", postInput.productType);
    newData.append("price", postInput.price);
    newData.append("description", postInput.description);

    Array.from(postInput.files).forEach((file) => {
      newData.append("productImages", file);
    });

    try {
      await createPostApi.createPost(newData);
      toast.success("Product created successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to create product");
    }
  };

  return (
    <div className="w-screen">
      <div className="w-[1000px] bg-white m-auto my-20 p-20 rounded-lg">
        <form onSubmit={handleClickSubmitForm}>
          <div className="flex gap-2">
            <Input
              htmlFor="productName"
              id="productName"
              type="text"
              name="productName"
              inputName="Product Name"
              value={postInput.productName}
              onChange={handleChangeSetUserInput}
              error={postInputError.productName}
              className="mb-4 bg-gray-200 rounded-lg w-[550px] h-[40px] px-2 text-gray-500 flex flex-col"
            />
            <div className="">
              <select
                id="gender"
                name="gender"
                value={postInput.gender}
                onChange={handleChangeSetUserInput}
                className="bg-gray-200 border rounded-lg w-[280px] h-[40px] text-gray-500 flex translate-y-6 "
              >
                <option value=""> Gender Type</option>
                <option value="MEN">Men</option>
                <option value="WOMEN">Women</option>
                <option value="KIDS">Kids</option>
              </select>
              {postInputError.gender && (
                <p className="text-red-500 text-sm">{postInputError.gender}</p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <div className="  ">
              <select
                id="productType"
                name="productType"
                value={postInput.productType}
                onChange={handleChangeSetUserInput}
                className="bg-gray-200 border rounded-lg w-[415px] h-[40px] text-gray-500 flex translate-y-6 "
              >
                <option value="">Product Type</option>
                <option value="SHIRTS">Shirts</option>
                <option value="PANTS">Pants</option>
                <option value="JACKETS">Jackets</option>
                <option value="ACCESSORIES">Accessories</option>
              </select>
              {postInputError.productType && (
                <p className="text-red-500 text-sm">
                  {postInputError.productType}
                </p>
              )}
            </div>
            <Input
              htmlFor="price"
              id="price"
              type="number"
              name="price"
              inputName="Product Price"
              value={postInput.price}
              onChange={handleChangeSetUserInput}
              error={postInputError.price}
              className="mb-4 bg-gray-200 rounded-lg w-[415px] h-[40px] px-2 text-gray-500 flex flex-col"
            />
          </div>
          <Input
            htmlFor="description"
            id="description"
            type="text"
            name="description"
            inputName="Product Description"
            value={postInput.description}
            onChange={handleChangeSetUserInput}
            error={postInputError.description}
            className="mb-4 bg-gray-200 rounded-lg w-full h-[300px] px-2 text-gray-500 flex flex-col"
          />

          <input
            className="custom-file-input font-thin rounded-xl block my-14"
            id="file_input"
            type="file"
            name="files"
            multiple
            onChange={handleChangeSetUserInput}
          />
          {postInputError.files && (
            <p className="text-red-500 text-sm">{postInputError.files}</p>
          )}

          <div className="flex justify-center">
            <button className="w-[400px] h-[50px] bg-teal-900 text-white font-thin rounded-xl hover:bg-teal-300 focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform active:bg-green-200 active:text-black">
              CREATE PRODUCT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
