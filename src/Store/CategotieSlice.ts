import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  reducerPath: "categories",
  tagTypes: ["Categories"],
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => {
        return {
          url: "products/categories",
        };
      },
    }),
    getCategoryProducts: build.query({
      query: (category: string | undefined) => {
        return {
          url: `products/category/${category}`,
        };
      },
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryProductsQuery } =
  categoriesApiSlice;
export default categoriesApiSlice;
