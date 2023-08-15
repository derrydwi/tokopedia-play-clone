import axios from "axios";
import { Comment } from "../types/comment";

export const addComment = async ({ username, content, videoId }: Comment): Promise<Comment> => {
  const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/comments`, { username, content, videoId });
  return response.data.data;
};
