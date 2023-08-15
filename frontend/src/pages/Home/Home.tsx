import { Grid, Box } from "@chakra-ui/react";
import { useVideosQuery } from "../../hooks/useVideos";
import Alert from "../../components/Home/Alert";
import CardSkeleton from "../../components/Home/CardSkeleton";
import Card from "../../components/Home/Card";

function Home() {
  const { data: videos, isLoading, error } = useVideosQuery();

  return (
    <Box p="4">
      {error ? (
        <Alert />
      ) : (
        <Grid templateColumns="repeat(auto-fill, minmax(230px, 1fr))" gap={4}>
          {isLoading ? Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />) : videos?.map((video) => <Card key={video._id} {...video} />)}
        </Grid>
      )}
    </Box>
  );
}

export default Home;
