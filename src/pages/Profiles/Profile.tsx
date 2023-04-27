import React, { createContext, useState } from "react";
import {
  Box,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import ProfileBg from "../../imgs/bgprofile.png";
import About from "./Components/About";

import Expectation from "./Components/Expectation";
import Experiences from "./Components/Experiences";
import CardInformationNani from "./Components/CardInformationNani";
import { moreAboutMe } from "../../dummydata/data";

interface Value {
  descValue: string;
  setDescValue: (value: string) => void;
}
export const Context = createContext<Value | undefined>(undefined);
const Profile = () => {
  const [fixed, setFixed] = useState(false);

  const [descValue, setDescValue] = useState<string>(moreAboutMe);
  const setFixedCard = () => {
    if (window.scrollY >= 150) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  window.addEventListener("scroll", setFixedCard);
  console.log(window.scrollY);
  return (
    <Context.Provider value={{ descValue, setDescValue }}>
      <Box>
        <Image src={ProfileBg} />
        <Tabs align="center" variant="enclosed">
          <TabList>
            <Tab>More about me</Tab>
            <Tab mx="12">My expectation</Tab>
            <Tab>Experience</Tab>
          </TabList>
          <Grid templateColumns="repeat(7,1fr)">
            <GridItem
              position="relative"
              colSpan={2}
              textAlign="right"
            >
              <CardInformationNani fixed={fixed} />
            </GridItem>
            <GridItem colSpan={4}>
              <TabPanels textAlign="left">
                <TabPanel>
                  <About />
                </TabPanel>
                <TabPanel>
                  <Expectation />
                </TabPanel>
                <TabPanel>
                  <Experiences />
                </TabPanel>
              </TabPanels>
            </GridItem>
          </Grid>
        </Tabs>
      </Box>
    </Context.Provider>
  );
};

export default Profile;
