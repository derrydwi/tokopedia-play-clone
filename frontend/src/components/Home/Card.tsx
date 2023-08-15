import { Button, Icon, HStack, Box, Badge, LinkOverlay, VStack, Text, Card as CardContainer, CardBody, CardFooter } from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";
import { Video } from "../../types/video";

const Card: React.FC<Video> = ({ _id, title, image, viewsCount }) => {
  return (
    <CardContainer maxW="sm" position="relative" minH="80" borderRadius="8">
      <Box bgImage={`url(${image})`} bgSize="cover" bgPos="center" borderRadius="8" bgRepeat="no-repeat" w="100%" h="100%" position="relative">
        <Box
          position="absolute"
          bottom="0"
          borderRadius="8"
          left="0"
          w="100%"
          h="50%"
          background="linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7))"
        />
        <LinkOverlay href={`/${_id}`} h="100%">
          <VStack justify="space-between" alignItems="flex-start" h="100%">
            <CardBody px="3" py="2">
              <HStack spacing="1">
                <Badge colorScheme="red">Live</Badge>
                <Badge colorScheme="blackAlpha" color="white">
                  <HStack gap="1">
                    <Icon as={AiOutlineEye} boxSize="4" />
                    <Text>{viewsCount}</Text>
                  </HStack>
                </Badge>
              </HStack>
            </CardBody>
            <CardFooter px="3" py="2" w="100%">
              <VStack gap="0" align="flex-start" w="100%">
                <Button variant="unstyled" color="white" textAlign="left" h="4" w="100%">
                  <Text as="b" noOfLines={1} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                    {title}
                  </Text>
                </Button>
                <Button variant="unstyled" color="white" textAlign="left">
                  <Text fontSize="xs">Live Shopping</Text>
                </Button>
              </VStack>
            </CardFooter>
          </VStack>
        </LinkOverlay>
      </Box>
    </CardContainer>
  );
};

export default Card;
