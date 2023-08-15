import { Button, Skeleton, Box, VStack, Card, CardFooter } from "@chakra-ui/react";

const CardSkeleton: React.FC = () => {
  return (
    <Card maxW="sm" position="relative" minH="80" borderRadius="8">
      <Box bgSize="cover" bgPos="center" borderRadius="8" bgRepeat="no-repeat" w="100%" h="100%" position="relative">
        <Box
          position="absolute"
          bottom="0"
          borderRadius="8"
          left="0"
          w="100%"
          h="50%"
          background="linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7))"
        />
        <VStack justify="flex-end" alignItems="flex-start" h="100%" className="animate-pulse">
          <CardFooter px="3" pb="2" w="80%">
            <VStack gap="0" align="flex-start" w="100%">
              <Button variant="unstyled" color="white" textAlign="left" h="4" w="100%" disabled>
                <Skeleton h="4" width="100%" />
              </Button>
              <Button variant="unstyled" color="white" textAlign="left" h="6" w="100%" disabled>
                <Skeleton h="2" width="50%" />
              </Button>
            </VStack>
          </CardFooter>
        </VStack>
      </Box>
    </Card>
  );
};

export default CardSkeleton;
