import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { asynccreateproducts } from "../store/actions/productsActions";

const CreateProduct = () => {
    const dispatch = useDispatch();

 const {register, reset , handleSubmit} = useForm();

 const submitHandler = (product) => {
    product.id = nanoid();
    dispatch(asynccreateproducts(product));
    reset();
 }

 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create Product
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          {...register("name")}
          className="w-full mb-3 p-2 border rounded"
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          {...register("price")}
          className="w-full mb-3 p-2 border rounded"
        />

        {/* Category */}
        <input
          type="text"
          name="category"
          placeholder="Category"
          {...register("category")}
          className="w-full mb-3 p-2 border rounded"
        />

        {/* Image URL */}
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          {...register("image")}
          className="w-full mb-3 p-2 border rounded"
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          {...register("description")}
          className="w-full mb-3 p-2 border rounded"
        />

        {/* Stock */}
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          {...register("stock")}
          className="w-full mb-3 p-2 border rounded"
        />

        {/* Rating */}
        <input
          type="number"
          step="0.1"
          name="rating"
          placeholder="Rating"
          {...register("rating")}
          className="w-full mb-4 p-2 border rounded"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
        