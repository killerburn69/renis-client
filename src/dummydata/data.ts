import img1 from '../imgs/pexels-keira-burton-6624452.png'
import img2 from '../imgs/pexels-photo-929436.jpeg'
import img3 from '../imgs/pexels-photo-2869318.jpeg'
import Baby from '../imgs/baby-boy.svg'
import BabyMain from '../imgs/babyimgmain.png'
import BabyMain2 from '../imgs/pexels-photo-929436.jpeg'
import { backgroundFlexProfile,backgroundBoxBeforeProfile, backgroundBoxProfile, backgroundTextProfile } from '../theme/background/Background'
interface Img {
    id:string;
    img: string;
}
interface Tag {
    id:string;
    icon:string;
    title:string;
}
interface chart {
    id:string,
    chartHeading:string,
    chartTitle:string,
    backgroundBoxWrapper:object,
    backgroundFlex:object,
    backgroundText:object,
    backgroundBox:object,
    backgroundBoxBefore:object,
}
export interface Information {
    id:number;
    name:string;
    vip:boolean;
    description:string;
    imgArray: Img[];
    tagArray:Tag[];
}
export interface Banner {
    id:number;
    name:string;
    desc:string
}
export interface BabyProfileImg {
    id:string,
    img:string,
}


export const ArrayImage:Img[]=[
    {
        id:"1",
        img:img1
    },
    {
        id:"2",
        img:img2
    },
    {
        id:"3",
        img:img3
    }
] 
export const ArrayTag:Tag[]=[
    {
        id:"1",
        icon:Baby,
        title:"Grumby baby"
    },
    {
        id:"2",
        icon:Baby,
        title:"Ten mark"
    },
    {
        id:"3",
        icon:Baby,
        title:"Allow"
    }
]

export const ArrayListInformation:Information[]=[
    {
        id:1,
        name:"Mr.Basign",
        vip:true,
        description:"Very kind, very love children, Sed vitae hendrerit neque. Aliquam hendrerit tincidunt urna ac cursus. Ut faucibus dolor id venenatis scelerisque. Pellentesque est metus",
        imgArray:ArrayImage,
        tagArray:ArrayTag,
    },
    {
        id:2,
        name:"Mr.Uansbfwg",
        vip:false,
        description:"Very,very love children, Sed vitae hendrerit neque. Aliquam hendrerit tincidunt urna ac cursus. Ut faucibus dolor id venenatis scelerisque. Pellentesque est metus",
        imgArray:ArrayImage,
        tagArray:ArrayTag,
    },
    {
        id:3,
        name:"Mrs.Basign Uahssng",
        vip:false,
        description:"Very kind, very love children, Sed vitae hendrerit neque. Aliquam hendrerit tincidunt urna ac cursus. Ut faucibus dolor id venenatis scelerisque. Pellentesque est metus",
        imgArray:ArrayImage,
        tagArray:ArrayTag,
    }
]

export const arrayBanner:Banner[]=[
    {
        id:1,
        name:"Layle",
        desc:"So cute, generous"
    },
    {
        id:2,
        name:"Mike",
        desc:"happy boy, loyalty"
    },
    {
        id:3,
        name:"Mike",
        desc:"happy boy, loyalty"
    },
    {
        id:4,
        name:"Mike",
        desc:"happy boy, loyalty"
    },
    {
        id:5,
        name:"Mike",
        desc:"happy boy, loyalty"
    },
    {
        id:6,
        name:"Mike",
        desc:"happy boy, loyalty"
    },
    {
        id:7,
        name:"Mike",
        desc:"happy boy, loyalty"
    },

    
]

export const ArrayBabyImgProfile:BabyProfileImg[]=[
    {
        id:"1",
        img:BabyMain
    },
    {
        id:"2",
        img:BabyMain2
    }
]

export const ArraChartProfile:chart[]=[
    {
        id:"1",
        chartHeading:"Characteristics",
        chartTitle:"Age range: 2-8 weeks",
        backgroundBoxWrapper:{
            top:"-3%",
            left:"50%",
            transform:"translate(-50%,3%)"
        },  
        backgroundFlex:{
            ...backgroundFlexProfile,
        },
        backgroundText:{
            ...backgroundTextProfile,
            top:"-6",
            left:"-10"
        },
        backgroundBox:{
            ...backgroundBoxProfile,
            top:"-2",
            left:"16"
        },
        backgroundBoxBefore:{
            ...backgroundBoxBeforeProfile,
            top:"3",
            left:"-1",
        }
    },
    {
        id:"2",
        chartHeading:"Distance",
        chartTitle:"Age range: 2-8 weeks",
        backgroundBoxWrapper:{
            top:"38%",
            right:"-3%",
            transform:"translate(3%,-38%)"
        },
        backgroundFlex:{
            ...backgroundFlexProfile,
            
        },
        backgroundText:{
            ...backgroundTextProfile,
            top:"0",
            left:"7"
        },
        backgroundBox:{
            ...backgroundBoxProfile,
            top:"10",
            left:"-2"
        },
        backgroundBoxBefore:{
            ...backgroundBoxBeforeProfile,
            top:"-1",
            left:"3",
        }
    },
    {
        id:"3",
        chartHeading:"Age",
        chartTitle:"Age range: 2-8 weeks",
        backgroundBoxWrapper:{
            top:"38%",
            left:"-3%",
            transform:"translate(3%,-38%)"
        },
        backgroundFlex:{
            ...backgroundFlexProfile,
        },
        backgroundText:{
            ...backgroundTextProfile,
            top:"0",
            right:"7"
        },
        backgroundBox:{
            ...backgroundBoxProfile,
            bottom:"10",
            right:"-2"
        },
        backgroundBoxBefore:{
            ...backgroundBoxBeforeProfile,
            bottom:"-1",
            right:"3",
        }
    },
    {
        id:"4",
        chartHeading:"Paid",
        chartTitle:"Age range: 2-8 weeks",
        backgroundBoxWrapper:{
            bottom:"-2%",
            left:"16%",
            transform:"translate(-16%,2%)"
        },
        backgroundFlex:{
            ...backgroundFlexProfile,
           
        },
        backgroundText:{
            ...backgroundTextProfile,
            top:"2",
            right:"7"
        },
        backgroundBox:{
            ...backgroundBoxProfile,
            bottom:"10",
            right:"-2"
        },
        backgroundBoxBefore:{
            ...backgroundBoxBeforeProfile,
            bottom:"-1",
            right:"3",
        }
    },
    {
        id:"5",
        chartHeading:"Type",
        chartTitle:"odjasjdlajsldas",
        backgroundBoxWrapper:{
            bottom:"-2%",
            right:"16%",
            transform:"translate(-16%,2%)"
        },
        backgroundFlex:{
            ...backgroundFlexProfile,
            
        },
        backgroundText:{
            ...backgroundTextProfile,
            top:"2",
            left:"7"
        },
        backgroundBox:{
            ...backgroundBoxProfile,
            bottom:"10",
            left:"-2"
        },
        backgroundBoxBefore:{
            ...backgroundBoxBeforeProfile,
            bottom:"-1",
            left:"3",
        }
    }
]