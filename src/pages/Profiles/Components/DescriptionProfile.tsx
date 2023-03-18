import { Box, Text } from '@chakra-ui/react'
import React,{useState} from 'react'

const DescriptionProfile = () => {
    const [isShow,setIsShow] = useState(false)
    const handleShowDesc = ()=>{
        setIsShow(true)
    }
    const handleHideDesc = ()=>{
        setIsShow(false)
    }
  return (
    <Box>
        <Text onMouseEnter={handleShowDesc} fontSize="lg" fontWeight="bold" color="secondary_color" cursor="pointer">More about me!</Text>
        {isShow && (
            <Text onMouseLeave={handleHideDesc} mt="2" fontSize="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam temporibus deleniti debitis nobis. Fugiat dolorem, deserunt consectetur sint non perspiciatis. Animi placeat voluptatem aliquid possimus dignissimos delectus aspernatur, assumenda omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex quam similique reiciendis qui dolor facilis illo animi? Ullam, nam officiis cumque deserunt dolor nihil architecto dolorem distinctio nemo autem.</Text>
        )}
    </Box>
  )
}

export default DescriptionProfile