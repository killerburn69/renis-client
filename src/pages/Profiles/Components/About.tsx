import React, { useState } from "react";
import { ArrayBabyImgProfile } from "../../../dummydata/data";
import { EditIcon } from "@chakra-ui/icons";
import { Box, Image, Text, IconButton, Flex } from "@chakra-ui/react";
import {
  backgroundImageBabyProfile,
  bgAboutProfile,
  textBackgroundImageBabyProfile,
} from "../../../theme/background/Background";
import DescriptionProfile from "./DescriptionProfile";
import { Profile } from "../../../models/types";
interface Data {
  data: Profile | undefined;
}
const About = (props: Data) => {
  const [imgShow, setImgShow] = useState(ArrayBabyImgProfile[0].img);
  const [showForm, setShowForm] = useState(false);

  return (
    <React.Fragment>
      <Box sx={backgroundImageBabyProfile}>
        <Image src={imgShow} w="full" objectFit="contain" />
        <Text sx={textBackgroundImageBabyProfile}>
          Some baby's images
        </Text>
        <IconButton
          position="absolute"
          top="1"
          left="0"
          variant="iconModify"
          aria-label="Edit image"
          icon={<EditIcon />}
        />
      </Box>
      <Flex gap="5" marginLeft="2" align="center" marginBottom="7">
        {ArrayBabyImgProfile.map((item, index) => (
          <Box
            key={item.id}
            cursor="pointer"
            border={
              imgShow === item.img ? "2px solid #8682A7" : "none"
            }
          >
            <Image
              src={item.img}
              onClick={() => setImgShow(item.img)}
              sx={bgAboutProfile}
              transform={
                imgShow === item.img ? "translate(-10px,-10px)" : ""
              }
            ></Image>
          </Box>
        ))}
      </Flex>
      <Box>
        <Flex align="flex-start" w="full">
          <IconButton
            onClick={() => setShowForm(true)}
            variant="iconModify"
            h="6"
            aria-label="Edit information"
            icon={<EditIcon />}
          />
          <DescriptionProfile
            show={showForm}
            setShow={setShowForm}
            data={props.data?.Description}
          />
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default About;
