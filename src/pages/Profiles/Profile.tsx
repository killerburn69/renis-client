import React, { createContext, useState } from 'react'
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
} from '@chakra-ui/react'
import ProfileBg from '../../imgs/bgprofile.png'
import About from './Components/About'

import Expectation from './Components/Expectation'
import Experiences from './Components/Experiences'
import CardInformationNani from './Components/CardInformationNani'

interface Value{
  descValue:string,
  setDescValue: (value:string) => void
}
export const Context = createContext<Value | undefined>(undefined)
const Profile = () => {
  const [descValue, setDescValue] = useState<string>("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam temporibus deleniti debitis nobis. Fugiat dolorem, deserunt consectetur sint non perspiciatis. Animi placeat voluptatem aliquid possimus dignissimos delectus aspernatur, assumenda omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex quam similique reiciendis qui dolor facilis illo animi? Ullam, nam officiis cumque deserunt dolor nihil architecto dolorem distinctio nemo autem.")
  return (
    <Context.Provider value={{descValue, setDescValue}}>
      <Box>
        <Image src={ProfileBg} />
        <Tabs align="center" variant="enclosed">
          <TabList>
            <Tab>More about me</Tab>
            <Tab mx="12">My expectation</Tab>
            <Tab>Experience</Tab>
          </TabList>
          <Grid templateColumns="repeat(7,1fr)">
            <GridItem colSpan={2} textAlign="right">
              <CardInformationNani/>
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
                  <Experiences/>
                </TabPanel>
              </TabPanels>
            </GridItem>
          </Grid>
        </Tabs>
      </Box>
    </Context.Provider>
  )
}

export default Profile
