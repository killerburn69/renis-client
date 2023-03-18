import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import BabyChart from '../../../imgs/babychart.svg'
import React, {useState} from 'react'
import DescriptionProfile from './DescriptionProfile'
import { ArraChartProfile } from '../../../dummydata/data'

const Expectation = () => {
  const [idShowModal, setIdShowModal] = useState(ArraChartProfile[2].id)
  const opentModal = (id:string) =>{
    setIdShowModal(id)
  }
  return (
    <Box>
      <Flex justify="flex-end" mb="14">
        <Button variant="editCharactic" mt="0">Edit characteristics</Button>
      </Flex>
      <Box position="relative" w="fit-content" m="0 auto" mb="16">
        <Box  w="96" h="96" bg="chart" margin="0 auto" 
        clipPath="polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)">
            <Flex align="center" justify="center" w="full" h="full">
                <Image src={BabyChart}/>
            </Flex>
        </Box>
        {ArraChartProfile.map((item,index)=>(
            <Box position="absolute" sx={item.backgroundBoxWrapper} key={item.id}>
              <Flex sx={item.backgroundFlex} border={idShowModal === item.id ? "1px solid #E3A5A8" : ""} borderRadius={idShowModal === item.id ? "full" : ""}>
                <Box  onMouseEnter={()=>opentModal(item.id)} w="4" h="4" bg="primary_color" borderRadius="full"></Box>
              </Flex>
              <Text sx={item.backgroundText}>{item.chartHeading}</Text>
              {idShowModal === item.id && <Box sx={item.backgroundBox} _before={item.backgroundBoxBefore}>{item.chartTitle}</Box>}
            </Box>
        ))}
      </Box>
      <DescriptionProfile/>
    </Box>
  )
}

export default Expectation