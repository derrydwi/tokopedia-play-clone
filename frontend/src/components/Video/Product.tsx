import { CardFooter, Box, Button, Card, VStack, Text } from "@chakra-ui/react";
import { Product as IProduct } from "../../types/product";
import { formatCurrency } from "../../utils/currency";

const Product: React.FC<Partial<IProduct>> = ({ title, image, price }) => {
  return (
    <Card position="relative" w="100%" borderRadius="8">
      <Box bgImage={`url(${image})`} bgSize="cover" bgPos="center" borderRadius="8" bgRepeat="no-repeat" w="100%" h="100%" position="relative">
        <Box
          position="absolute"
          bottom="0"
          borderRadius="8"
          left="0"
          w="100%"
          h="75%"
          background="linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7))"
        />
        <VStack justify="flex-end" alignItems="flex-start" h="100%">
          <CardFooter px="3" pt="14" pb="2">
            <VStack gap="0" align="flex-start">
              <Button variant="unstyled" color="white" textAlign="left" h="4">
                <Text as="b">{title}</Text>
              </Button>
              <Button variant="unstyled" color="white" textAlign="left">
                <Text fontSize="xs">{formatCurrency(Number(price))}</Text>
              </Button>
            </VStack>
          </CardFooter>
        </VStack>
      </Box>
    </Card>
  );
};

export default Product;
