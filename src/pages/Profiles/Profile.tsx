import React from 'react'
import {
  Box,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import ProfileBg from '../../imgs/bgprofile.png'
import About from './Components/About'
import CardInfomation from './Components/CardInfomation'
import Expectation from './Components/Expectation'

const Profile = () => {
 
  return (
    <Box>
      <Image src={ProfileBg} />
      <Tabs align="center" variant="enclosed">
        <TabList>
          <Tab>More about me</Tab>
          <Tab mx="12">My expectation</Tab>
          <Tab>Banner</Tab>
        </TabList>
        <Grid templateColumns="repeat(7,1fr)">
          <GridItem colSpan={2} textAlign="right">
            <CardInfomation/>
          </GridItem>
          <GridItem colSpan={4}>
            <TabPanels textAlign="left">
              <TabPanel>
                <About/>
              </TabPanel>
              <TabPanel>
                <Expectation/>
              </TabPanel>
              <TabPanel>
                <Text>Only for Vip</Text>
              </TabPanel>
            </TabPanels>
          </GridItem>
        </Grid>
      </Tabs>
    </Box>
  )
}

export default Profile
