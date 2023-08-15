import axios from "axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Product } from "../types/product";

const PRODUCTS_BY_VIDEO_ID_QUERY_KEY = "product";

const fetchProductsByVideoId = async ({ videoId }: { videoId: string }): Promise<Product[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/${videoId}`);
  return response.data.data;
};

export const useProductsByVideoId = ({ videoId }: { videoId: string }): UseQueryResult<Product[]> => {
  return useQuery([PRODUCTS_BY_VIDEO_ID_QUERY_KEY, videoId], () => fetchProductsByVideoId({ videoId }));
};
