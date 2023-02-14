import babybg from '../../imgs/babybg.jpeg'
const psedo = {
    content: '""',
    position: 'absolute',
    top: '0',
    right: '0',
    width: 'full',
    height: 'full',
}
export const mainBackground = {
    "w":"full",
    "h":"fullContainer",
    "bg":"primary_color",
    "position":"relative",
    "overflow":"hidden",
    "_before":{
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: 'full',
      height: 'fullContainer',
      bg: 'secondary_color',
      clipPath: 'polygon(0 0, 40% -3%, 72% 102%, 0 100%)',
    },
    "display":"flex",
    "justifyContent":"center",
    "alignItems":"center",

}

export const subBackground = {
    "borderRadius":"xl",
    "w":"6xl",
    "minH":"xl",
    "bg":"white",
    "position":"relative",
    "overflow":"hidden",
    "zIndex":"docked",
    "boxShadow":"lg",
    "_before":{
        ...psedo,
        background: ` url(${babybg}) no-repeat center center`,
        backgroundSize: 'cover',
        clipPath: 'polygon(41% -3%, 100% 0, 100% 100%, 72% 102%)',
    },
    "_after":{
        ...psedo,
        backgroundColor:'secondary_color',
        opacity:'0.8',
        clipPath:'polygon(41% -3%, 100% 0, 100% 100%, 72% 102%)',
    }
}

export const toastBackground = {
    color:"white",
    py:"3",
    px:"5",
    bg:"white",
    alignItems:"center",
    gap:"2",
    boxShadow:"xl",
    rounded:"xl"
}

export const tagBackground = {
    alignItems:"center",
    borderColor:"grey.250",
    borderWidth:"1px",
    p:"1",
    borderRadius:"lg",
    gap:"1"
}
export const navbarBackground = {
    zIndex:"dropdown",
    bg:"grey.100",
    boxShadow:"md",
    position:"sticky",
    top:"0",
    left:"0"
}
export const backgroundIconToast = {
    p:"6",
    w:"fit-content",
    h:"full",
    borderRadius:"full"
}
export const backgroundIconNotification = {
    bg:"none",
    fontSize:"3xl",
    size:"md",
    _hover: {
        bg: `none`,
    },
    _active: {
        bg: `none`,
    },

}
export const backgroundAmountNotification = {
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    bg:"red.800",
    top:"0",
    right:"1",
    color:"white",
    w:"5",
    h:"5",
    borderRadius:"full",
}
export const backgroundOverlay = {
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    w:"full",
    h:"full",
    bg:"rgba(0,0,0,0.7)",
    top:"0",
    left:"0",
    zIndex:"overlay"
}
