import {chakra} from '@chakra-ui/react'
import babybg from '../../imgs/babybg.jpeg'
export const Background =  chakra('div',{
    baseStyle:{
        width:'full',
        height:'fullContainer',
        bg:'primary_color',
        position:'relative',
        overflow:'hidden',
        _before:{
            content:'""',
            position:'absolute',
            bottom:'0',
            left:'0',
            width:'full',
            height:'fullContainer',
            bg:'secondary_color',
            clipPath:'polygon(0 0, 40% -3%, 72% 102%, 0 100%)',
        },
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },

})
export const BackgroundCustom = chakra('div',{
    baseStyle:{
            borderRadius:'xl',
            width:'6xl',
            minHeight:'xl',
            bg:'white',
            position:'relative',
            overflow:'hidden',
            zIndex:'docked',
            boxShadow:'lg',
            _before:{
                content:'""',
                position:'absolute',
                top:'0',
                right:'0',
                width:'full',
                height:'full',
                background:` url(${babybg}) no-repeat center center`,
                backgroundSize:'cover',
                clipPath:'polygon(41% -3%, 100% 0, 100% 100%, 72% 102%)',
                // clipPath:'polygon(50% 0%, 100% 0, 100% 100%, 50% 100%)',
            },
            _after:{
                content:'""',
                position:'absolute',
                top:'0',
                right:'0',
                width:'full',
                height:'full',
                backgroundColor:'secondary_color',
                opacity:'0.8',
                clipPath:'polygon(41% -3%, 100% 0, 100% 100%, 72% 102%)',
                // clipPath:'polygon(50% 0%, 100% 0, 100% 100%, 50% 100%)',
            }
        },
})