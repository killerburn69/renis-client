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