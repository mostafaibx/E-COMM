import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  reducerPath: "products",
  tagTypes: ["Products"],
  endpoints: (build) => ({
    getProducts: build.query({
      query: (page: number) => {
        return {
          url: "products",
          params: {
            limit: 20,
            skip: page * 10,
          },
        };
      },
    }),
    getProductById: build.query({
      query: (id: string) => {
        return {
          url: `products/${id}`,
        };
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApiSlice;
export default productsApiSlice;
