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
import { useQuery } from "@apollo/client";
import {
  ProfileUserResponse,
  UserIdResponse,
} from "../../models/interfaces";
import { GET_CURRENT_USER_PROFILE } from "../../graphql/query/getCurrentUserProfile";
import { Overlay } from "../../components/Overlay";
import Loading from "../../components/Loading";
import { Email } from "../../models/types";
import { GET_USERID_BY_EMAIL } from "../../graphql/query/getUserIdByEmail";

interface Value {
  descValue: string | undefined;
  setDescValue: (value: string) => void;
}
export const Context = createContext<Value | undefined>(undefined);
const Profile = () => {
  const getEmail = localStorage.getItem("email");
  const { data: PROFILEID, loading } = useQuery<ProfileUserResponse>(
    GET_CURRENT_USER_PROFILE,
  );
  const { data: USERID } = useQuery<UserIdResponse, Email>(
    GET_USERID_BY_EMAIL,
    {
      variables: {
        email: getEmail ? JSON.parse(`"${getEmail}"`) : null,
      },
    },
  );
  const userIdString =
    USERID?.getUserByEmail.User_ID !== undefined
      ? USERID?.getUserByEmail.User_ID
      : "";
  localStorage.setItem("userid", userIdString);
  const [fixed, setFixed] = useState(false);
  const setFixedCard = () => {
    if (window.scrollY >= 150) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  // console.log(USERID?.getUserByEmail.User_ID);
  // console.log(PROFILEID?.getCurrentUserProfile.Profile_ID);
  window.addEventListener("scroll", setFixedCard);
  console.log(window.scrollY);
  if (loading) {
    return <Loading />;
  }
  return (
    <Box mb="10">
      <Image src={ProfileBg} />
      <Tabs align="center" variant="enclosed">
        <TabList>
          <Tab>More about me</Tab>
          <Tab mx="12">My expectation</Tab>
          <Tab>Experience</Tab>
        </TabList>
        <Grid templateColumns="repeat(7,1fr)">
          <GridItem position="relative" colSpan={2} textAlign="right">
            <CardInformationNani
              fixed={fixed}
              data={PROFILEID?.getCurrentUserProfile}
            />
          </GridItem>
          <GridItem colSpan={4}>
            <TabPanels textAlign="left">
              <TabPanel>
                <About data={PROFILEID?.getCurrentUserProfile} />
              </TabPanel>
              <TabPanel>
                <Expectation
                  data={PROFILEID?.getCurrentUserProfile}
                  dataUser={USERID?.getUserByEmail.User_ID}
                />
              </TabPanel>
              <TabPanel>
                <Experiences />
              </TabPanel>
            </TabPanels>
          </GridItem>
        </Grid>
      </Tabs>
    </Box>
  );
};

export default Profile;
