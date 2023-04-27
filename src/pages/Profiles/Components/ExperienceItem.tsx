import {
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React, { PropsWithChildren } from "react";
import Star from "../../../components/Star";
import TypeExperience from "./TypeExperience";
import { linkBgExperience } from "../../../theme/background/Background";
import { experienceBaby } from "../../../dummydata/data";
interface ExperiencePorps extends PropsWithChildren {
  data: experienceBaby;
}
const ExperienceItem = ({ data }: ExperiencePorps) => {
  return (
    <Grid
      templateColumns="repeat(8,1fr)"
      borderRadius="xl"
      overflow="hidden"
      shadow="2xl"
      mb="12"
    >
      <GridItem colSpan={2}>
        <Image src={data.imgBaby} boxSize="60" objectFit="cover" />
      </GridItem>
      <GridItem colSpan={6} px="4" py="3">
        <Flex justify="space-between" align="center">
          <Flex align="center" gap="2">
            <Text
              fontSize="18"
              fontWeight="bold"
              color="font_color.100"
            >
              {data.nameBaby}
            </Text>
            <Star star={data.star} />
          </Flex>
          <Link
            variant="linkFont"
            sx={linkBgExperience}
            as={RouterLink}
            to={data.link}
          >
            See more
          </Link>
        </Flex>
        <Text my="4" fontSize="15">
          {data.desc}
        </Text>
        <TypeExperience dataTag={data.typeExperienceTags} />
        <Text fontSize="13" fontStyle="italic" color="grey.800">
          Contract from{" "}
          <Text as="span" fontWeight="bold" color="grey.350">
            {data.dayStart}
          </Text>{" "}
          to{" "}
          <Text as="span" fontWeight="bold" color="grey.350">
            {data.dayEnd}.
          </Text>
        </Text>
      </GridItem>
    </Grid>
  );
};

export default ExperienceItem;
