import React, {useState} from 'react'
import { ArrayBabyImgProfile } from '../../../dummydata/data'
import { EditIcon } from '@chakra-ui/icons'
import { Box,Image ,Text, IconButton, Flex} from '@chakra-ui/react'
import { backgroundImageBabyProfile, textBackgroundImageBabyProfile} from '../../../theme/background/Background'
import DescriptionProfile from './DescriptionProfile'

const About = () => {
  const [imgShow, setImgShow] = useState(ArrayBabyImgProfile[0].img)
  

  return (
    <React.Fragment>
      <Box sx={backgroundImageBabyProfile}>
          <Image src={imgShow} w="full" objectFit="contain"/>
          <Text
            sx={textBackgroundImageBabyProfile}
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
        {ArrayBabyImgProfile.map((item,index)=>(
          <Box key={item.id} cursor="pointer" border={imgShow === item.img ? "2px solid #8682A7" :"none"} >
            <Image src={item.img} onClick={()=>setImgShow(item.img)} w='24' h='24' objectFit="cover" transform={imgShow === item.img ? "translate(-10px,-10px)" : ""} boxShadow="xl"></Image>
          </Box>
        ))}
      </Flex>
      <Box transform="translateX(-5%)">
        <Flex align="flex-start">
          <IconButton variant="iconModify" h="6" aria-label="Edit information" icon={<EditIcon/>}/>
          <DescriptionProfile/>
        </Flex>
      </Box>
    </React.Fragment>
  )
}

export default About