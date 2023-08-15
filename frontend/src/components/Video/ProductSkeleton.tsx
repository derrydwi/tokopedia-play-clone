import { Skeleton, CardFooter, Box, Button, Card, VStack } from "@chakra-ui/react";

const ProductSkeleton: React.FC = () => {
  return (
    <Card maxW="sm" position="relative" minH="30" w="100%" borderRadius="8" pt="15">
      <Box bgSize="cover" bgPos="center" borderRadius="8" bgRepeat="no-repeat" w="100%" h="100%" position="relative" pt="15">
        <Box
          position="absolute"
          bottom="0"
          borderRadius="8"
          left="0"
          w="100%"
          h="75%"
          background="linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7))"
        />
        <VStack justify="flex-end" alignItems="flex-start" h="100%" className="animate-pulse">
          <CardFooter px="3" pb="2">
            <VStack gap="0" align="flex-start">
              <Button variant="unstyled" color="white" textAlign="left" h="4">
                <Skeleton h="4" width="100%" />
              </Button>
              <Button variant="unstyled" color="white" textAlign="left" h="6">
                <Skeleton h="2" width="50%" />
              </Button>
            </VStack>
          </CardFooter>
        </VStack>
      </Box>
    </Card>
  );
};

export default ProductSkeleton;
