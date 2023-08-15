import axios from "axios";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Video } from "../types/video";

const VIDEOS_QUERY_KEY = "videos";

const fetchVideos = async (): Promise<Video[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/videos`);
  return response.data.data;
};

export const useVideosQuery = (): UseQueryResult<Video[]> => {
  return useQuery([VIDEOS_QUERY_KEY], fetchVideos);
};
