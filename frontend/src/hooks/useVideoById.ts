import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Video } from "../types/video";

const VIDEOS_BY_ID_QUERY_KEY = "video";

const fetchVideoById = async ({ id }: { id: string }): Promise<Video> => {
  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/videos/${id}`);
  return response.data.data;
};

export const useVideoById = ({ id }: { id: string }): UseQueryResult<Video> => {
  return useQuery([VIDEOS_BY_ID_QUERY_KEY, id], () => fetchVideoById({ id }));
};
