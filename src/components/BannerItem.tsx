import React, { PropsWithChildren } from "react";
import { Flex, Image, Box, Heading, Text } from "@chakra-ui/react";
import Baby from "../imgs/pexels-photo-929436.jpeg";
import { Banner } from "../dummydata/data";
import { bgBannerItems } from "../theme/background/Background";

interface BannerItemProps extends PropsWithChildren {
  banner: Banner;
}
const BannerItem = ({ banner }: BannerItemProps) => {
  return (
    <Flex sx={bgBannerItems}>
      <Image src={Baby} boxSize="50px" objectFit="cover" borderRadius="full" />
      <Box>
        <Heading variant="headingBase" color="black" fontSize="15">
          {banner.name}
        </Heading>
        <Text fontSize="12">{banner.desc}</Text>
      </Box>
    </Flex>
  );
};

export default BannerItem;
