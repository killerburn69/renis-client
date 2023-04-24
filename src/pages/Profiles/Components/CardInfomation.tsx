import React from "react";
import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import BabyAvatar from "../../../imgs/babybg.jpeg";
import MapIcon from "../../../imgs/locationsvg.svg";
import { EditIcon } from "@chakra-ui/icons";

const CardInfomation = () => {
  return (
    <Box
      px="8"
      py="6"
      w="fit-content"
      ml="auto"
      textAlign="center"
      bg="white"
      transform="translateY(-30%)"
      borderRadius="2xl"
      boxShadow="xl"
    >
      <Flex flexDirection="column" align="center">
        <Box
          w="36"
          h="36"
          borderRadius="full"
          overflow="hidden"
          position="relative"
          mb="5"
        >
          <Image src={BabyAvatar} w="full" h="full" objectFit="cover"></Image>
          <IconButton
            position="absolute"
            bottom="2"
            right="6"
            variant="iconModify"
            aria-label="Edit avatar"
            icon={<EditIcon />}
          />
        </Box>
        <Text fontWeight="bold" fontSize="18" color="secondary_color" mb="1">
          Baby Jenny
        </Text>
        <Text fontSize="14" color="grey.800" mb="2">
          jenny051266@gmail.com
        </Text>
        <Box pb="3" borderBottom="1px solid #E8E8E8">
          <Flex align="center" textAlign="left" mb="2" mx="2">
            <Image src={MapIcon} boxSize="5" mr="2"></Image>
            <Text fontSize="14" color="grey.800">
              Humboldt Hill, US
            </Text>
            <IconButton
              variant="iconModify"
              fontSize="sm"
              aria-label="Edit information"
              icon={<EditIcon />}
            />
          </Flex>
        </Box>
        <Button variant="sendMatch">Send Match</Button>
      </Flex>
    </Box>
  );
};

export default CardInfomation;
