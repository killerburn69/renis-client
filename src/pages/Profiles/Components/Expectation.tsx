import { Box, Button, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import BabyChart from '../../../imgs/babychart.svg'
import { EditIcon } from '@chakra-ui/icons'
import React from 'react'

const Expectation = () => {
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
        <Flex align="center" justify="center" w="6" h="6" border="1px solid #E3A5A8" borderRadius="full" position="absolute" top="-3%" left="50%" transform="translate(-50%,3%)">
          <Box w="4" h="4" bg="primary_color" borderRadius="full" >
            <Text fontSize="15" fontWeight="bold" color="secondary_color" position="absolute" top="-6" left="-10">Characteristics</Text>
            <Box borderRadius="xl" w="32" px="6" py="3" bg="#E3A5A8" position="absolute" top="-2" left="16" _before={{
              content:"''",
              position:"absolute",
              w:"3",
              h:"3",
              top:"3",
              left:"-1",
              bg:"primary_color",
              transform: "rotate(45deg)"
            }}>Age range: 2-8 weeks</Box>
          </Box>
        </Flex>
        <Flex align="center" justify="center" position="absolute" top="38%" right="-3%" transform="translate(3%,-38%)">
          <Box  w="4" h="4" bg="primary_color" borderRadius="full" >
            <Text fontSize="15" fontWeight="bold" color="secondary_color" position="absolute" top="0" left="7">Distance</Text>
          </Box>
        </Flex>
        <Flex align="center" justify="center" position="absolute" top="38%" left="-3%" transform="translate(3%,-38%)">
          <Box w="4" h="4" bg="primary_color" borderRadius="full">
            <Text fontSize="15" fontWeight="bold" color="secondary_color" position="absolute" top="0" right="7">Age</Text>
          </Box>
        </Flex>
        <Flex align="center" justify="center" position="absolute" bottom="-2%" left="16%" transform="translate(-16%,2%)">
          <Box w="4" h="4" bg="primary_color" borderRadius="full">
            <Text fontSize="15" fontWeight="bold" color="secondary_color" position="absolute" top="3" right="7">Paid</Text>
          </Box>
        </Flex>
        <Flex align="center" justify="center" position="absolute" bottom="-2%" right="16%" transform="translateX(16%,2%)">
          <Box w="4" h="4" bg="primary_color" borderRadius="full">
            <Text fontSize="15" fontWeight="bold" color="secondary_color" position="absolute" top="3" left="7">Type</Text>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Text fontSize="lg" fontWeight="bold" color="secondary_color" cursor="pointer">More about me!</Text>
        <Text mt="2" fontSize="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam temporibus deleniti debitis nobis. Fugiat dolorem, deserunt consectetur sint non perspiciatis. Animi placeat voluptatem aliquid possimus dignissimos delectus aspernatur, assumenda omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex quam similique reiciendis qui dolor facilis illo animi? Ullam, nam officiis cumque deserunt dolor nihil architecto dolorem distinctio nemo autem.</Text>
      </Box>
    </Box>
  )
}

export default Expectation