import { Box, Flex, Grid, GridItem, Image, Text,Link } from '@chakra-ui/react'
import Baby from '../../../imgs/pexels-photo-2869318.jpeg'
import {Link as RouterLink, useLocation} from 'react-router-dom'
import React from 'react'
import Star from '../../../components/Star'

const Experience = () => {
  return (
    <Grid templateColumns="repeat(8,1fr)"borderRadius="xl"  overflow="hidden">
        <GridItem colSpan={2}>
            <Image src={Baby} boxSize="60" objectFit="cover"/>
        </GridItem>
        <GridItem colSpan={6} px="4" py="3">
            <Flex justify="space-between" align="center">
                <Flex align="center" gap="2">
                    <Text fontSize="18" fontWeight="bold" color="font_color.100">Baby Emma</Text>
                    <Star/>
                </Flex>
                <Link position="relative" variant="linkFont" color="blue_sky" fontWeight="bold" fontStyle="italic" _after={{
                    content:"''",
                    position:"absolute",
                    w:"full",
                    h:"1px",
                    bottom:"0",
                    left:"0",
                    bg:"blue_sky",
                    opacity:"0.8"
                }} as={RouterLink} to="/">See more</Link>
            </Flex>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim ligula nibh, id commodo urna sodales in. Donec et dapibus nisi, in lacinia ante. Nullam at suscipit massa, non vulputate diam.</Text>
        </GridItem>
    </Grid>
  )
}

export default Experience