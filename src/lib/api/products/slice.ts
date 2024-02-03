import { RootState } from "@/lib/store";
import api from "../api";
import { paginatedResponse } from "@/types";
import { product } from "./types";

export const productsSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<paginatedResponse<product>, number>({
      query: (page) => `products?skip=${page}&limit=10`,
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.products.push(...newItems.products);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getProduct: builder.query<product, string>({
        query: (product) => `products/${product}`,
        // Refetch when the page arg changes
        forceRefetch({ currentArg, previousArg }) {
          return currentArg !== previousArg;
        },
      }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsSlice;

export const selectProducts = (state: RootState) => state.cart;
