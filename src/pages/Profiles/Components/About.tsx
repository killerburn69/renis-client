import React, {useState} from 'react'
import BabyMain from '../../../imgs/babyimgmain.png'
import BabyMain2 from '../../../imgs/pexels-photo-929436.jpeg'
import { EditIcon } from '@chakra-ui/icons'
import { Box,Image ,Text, IconButton, Flex} from '@chakra-ui/react'
import { backgroundImageBabyProfile} from '../../../theme/background/Background'

const About = () => {
  const [isShow,setIsShow] = useState(false)
  const [imgShow, setImgShow] = useState(BabyMain)
  
  

  return (
    <React.Fragment>
      <Box sx={backgroundImageBabyProfile}>
          <Image src={imgShow} w="full" objectFit="contain"/>
          <Text
            position="absolute"
            bottom="5"
            left="50%"
            transform="translateX(-50%)"
            fontFamily="Kalam"
            color="white"
            fontSize="2xl"
            zIndex="dropdown"
          >
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
        <Box cursor="pointer" border={imgShow === BabyMain ? "2px solid #8682A7" :"none"} >
          <Image src={BabyMain} onClick={()=>setImgShow(BabyMain)} w='24' h='24' objectFit="cover" transform={imgShow === BabyMain ? "translate(-10px,-10px)" : ""} boxShadow="xl"></Image>
        </Box>
        <Box cursor="pointer" border={imgShow === BabyMain2 ? "2px solid #8682A7" :"none"}>
          <Image src={BabyMain2} onClick={()=>setImgShow(BabyMain2)} w='24' h='24' objectFit="cover" transform={imgShow === BabyMain2 ? "translate(-10px,-10px)" : ""} boxShadow="xl"></Image>
        </Box>
      </Flex>
      <Box>
        <Flex align="flex-start">
          <IconButton variant="iconModify" h="6" aria-label="Edit information" icon={<EditIcon/>}/>
          <Box>
            <Text fontSize="lg" fontWeight="bold" color="secondary_color" cursor="pointer">More about me!</Text>
            <Text mt="2" fontSize="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam temporibus deleniti debitis nobis. Fugiat dolorem, deserunt consectetur sint non perspiciatis. Animi placeat voluptatem aliquid possimus dignissimos delectus aspernatur, assumenda omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex quam similique reiciendis qui dolor facilis illo animi? Ullam, nam officiis cumque deserunt dolor nihil architecto dolorem distinctio nemo autem.</Text>
          </Box>
        </Flex>
      </Box>
    </React.Fragment>
  )
}

export default About