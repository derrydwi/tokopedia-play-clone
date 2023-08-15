import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Comment } from "../types/comment";
import { queryClient } from "../providers";

const COMMENTS_BY_VIDEO_ID_QUERY_KEY = "comment";

const fetchCommentsByVideoId = async ({ videoId }: { videoId: string }): Promise<Comment[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/comments/${videoId}`);
  return response.data.data;
};

export const useCommentsByVideoId = ({ videoId }: { videoId: string }) => {
  const query = useQuery([COMMENTS_BY_VIDEO_ID_QUERY_KEY, videoId], () => fetchCommentsByVideoId({ videoId }));
  return {
    ...query,
    update: (data: Comment[]) => {
      queryClient.setQueryData([COMMENTS_BY_VIDEO_ID_QUERY_KEY, videoId], data);
    },
  };
};
