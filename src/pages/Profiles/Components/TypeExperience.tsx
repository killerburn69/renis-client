import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import {
  bgTypeExperienceProfile,
  columnExperience,
  hastagExperience,
  textHastag,
} from "../../../theme/background/Background";
import {
  ArraChartProfile,
  typeExperienceTag,
} from "../../../dummydata/data";
import React, { useState } from "react";

interface TagProps {
  dataTag: typeExperienceTag[];
}
const TypeExperience = ({ dataTag }: TagProps) => {
  const [isShowTag, setIsShowTag] = useState("");
  const [trueTag, setTrueTag] = useState(false);
  const openTag = (id: string) => {
    setIsShowTag(id);
    setTrueTag(true);
  };

  return (
    <Box py="2" px="3" bg="grey.50" borderRadius="md" mb="7">
      <Grid templateColumns="repeat(5,1fr)" justifyItems="center">
        {ArraChartProfile.map((item, index) => (
          <GridItem w="full" key={item.id}>
            <Box
              px="3"
              position="relative"
              _before={item.id !== "1" ? columnExperience : {}}
            >
              <Text
                onMouseEnter={() => openTag(item.id)}
                onMouseLeave={() => setTrueTag(false)}
                sx={bgTypeExperienceProfile}
              >
                {item.experienceHeading}
              </Text>
              {item.id === isShowTag && trueTag && (
                <Text sx={textHastag} _before={hastagExperience}>
                  {dataTag[index].tag}
                </Text>
              )}
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default TypeExperience;
