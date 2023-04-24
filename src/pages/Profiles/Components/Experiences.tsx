import { Box } from "@chakra-ui/react";
import { dataExperienceBaby } from "../../../dummydata/data";
import React from "react";
import ExperienceItem from "./ExperienceItem";

const Experiences = () => {
  return (
    <Box>
      {dataExperienceBaby.map((item, index) => (
        <ExperienceItem data={item} key={item.id} />
      ))}
    </Box>
  );
};

export default Experiences;
