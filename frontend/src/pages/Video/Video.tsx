import { Avatar, Icon, Spinner, UnorderedList, ListItem, Skeleton, Box, Flex, Button, Input, Text } from "@chakra-ui/react";

import { AiOutlineSend } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useVideoById } from "../../hooks/useVideoById";
import { useProductsByVideoId } from "../../hooks/useProductsByVideoId";
import { useCommentsByVideoId } from "../../hooks/useCommentsByVideoId";
import { useEffect, useRef } from "react";
import { Comment } from "../../types/comment";
import { useMutation } from "@tanstack/react-query";
import { addComment } from "../../hooks/useAddComment";
import { io } from "socket.io-client";
import Product from "../../components/Video/Product";
import ProductSkeleton from "../../components/Video/ProductSkeleton";

interface Params {
  videoId: string;
}

function Video() {
  const { videoId } = useParams<keyof Params>() as Params;
  const commentListRef = useRef<HTMLDivElement | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Comment>();

  const socket = io(import.meta.env.VITE_API_BASE_URL);

  const { data: video, isLoading: videoIsLoading, error: videoError } = useVideoById({ id: videoId });
  const { data: products, isLoading: productsIsLoading, error: productsError } = useProductsByVideoId({ videoId });
  const { data: comments, isLoading: commentsIsLoading, error: commentsError, update, refetch } = useCommentsByVideoId({ videoId });

  const mutation = useMutation(addComment, {
    onSuccess: (response) => {
      update([...(comments ?? []), response]);
      socket.emit("comment", response);
    },
    onError(error) {
      console.log("error", error);
    },
  });

  const onSubmit = (data: Comment) => {
    mutation.mutateAsync({ ...data, videoId });
    reset();
  };

  useEffect(() => {
    if (video?.title) document.title = `${video?.title} | ${document.title}`;
  }, [video?.title]);

  useEffect(() => {
    if (commentListRef.current) {
      commentListRef.current.scrollTop = commentListRef.current.scrollHeight;
    }
  }, [comments]);

  useEffect(() => {
    socket.emit("join", videoId);
    socket.on("newComment", (comment) => {
      update([...(comments ?? []), comment]);
    });

    return () => {
      socket.disconnect();
    };
  }, [comments, refetch, socket, update, videoId]);

  return (
    <Flex flexDir={{ base: "column", md: "row" }} h="calc(100vh - 72px)">
      <Box flex={{ base: "none", md: 1 }} bgColor="gray.100" overflowY="auto" p="4" gap="4">
        <Flex flexDir="column" justifyContent="center" alignItems="center" gap="4">
          {productsError ? (
            <Box textAlign="center" color="red.500">
              No product yet or an error occurred while fetching product.
            </Box>
          ) : productsIsLoading ? (
            [...Array(3)].map((_, i) => <ProductSkeleton key={i} />)
          ) : (
            products?.map((product) => <Product key={product._id} title={product.title} image={product.image} price={product.price} />)
          )}
        </Flex>
      </Box>
      <Box flex={{ base: 2, md: 3 }} bgColor="gray.200">
        {videoError ? (
          <Box textAlign="center" color="red.500">
            No video yet or an error occurred while fetching video.
          </Box>
        ) : videoIsLoading ? (
          <Flex h="100%" flexDir="column" justifyContent="center" alignItems="center" p="4">
            <Skeleton boxShadow="md" borderRadius="md" overflow="hidden" width="100%" paddingTop="56.25%" position="relative" h="473" />
          </Flex>
        ) : (
          <Flex h="100%" flexDir="column" justifyContent="center" alignItems="center" p="4">
            <Box boxShadow="md" borderRadius="md" overflow="hidden" width="100%" paddingTop="56.25%" position="relative">
              <iframe
                title={video?.title}
                width="100%"
                height="100%"
                src={video?.link}
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              ></iframe>
            </Box>
          </Flex>
        )}
      </Box>
      <Box flex="1" bgColor="gray.300" p="4">
        <Flex flexDir="column" justifyContent="space-between" h="100%">
          <Box ref={commentListRef} flex="1" bgColor="white" p="4" borderRadius="md" boxShadow="md" mb="4" overflowY="auto">
            {commentsError ? (
              <Box textAlign="center" color="red.500">
                No comments yet or an error occurred while fetching comments.
              </Box>
            ) : commentsIsLoading ? (
              <Flex h="100%" justifyContent="center" alignItems="center">
                <Spinner size="xl" />
              </Flex>
            ) : (
              <UnorderedList styleType="none" m="0">
                {comments?.map((comment) => (
                  <ListItem key={comment._id} mb="3" display="flex" alignItems="flex-start" gap="2">
                    <Avatar size="sm" name={comment.username} />
                    <Box display="inline">
                      <Text fontSize="sm" fontWeight="bold" color="blue.500" display="inline" wordBreak="break-word">
                        {comment.username}
                      </Text>{" "}
                      <Text fontSize="sm" display="inline" wordBreak="break-word">
                        {comment.content}
                      </Text>
                    </Box>
                  </ListItem>
                ))}
              </UnorderedList>
            )}
          </Box>
          <Flex flexDir="column" p="4" bgColor="white" boxShadow="md" borderRadius="md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input {...register("username", { required: true })} placeholder="Username" mb="2" borderColor={errors.username ? "red.500" : "gray.300"} />
              <Input {...register("content", { required: true })} placeholder="Add a comment" mb="2" borderColor={errors.content ? "red.500" : "gray.300"} />
              <Button type="submit" colorScheme="teal" width="100%" rightIcon={<Icon as={AiOutlineSend} />}>
                Add Comment
              </Button>
            </form>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Video;
