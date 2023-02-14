import img1 from '../imgs/pexels-keira-burton-6624452.png'
import img2 from '../imgs/pexels-photo-929436.jpeg'
import img3 from '../imgs/pexels-photo-2869318.jpeg'
import Baby from '../imgs/baby-boy.svg'
interface Img {
    id:string;
    img: string;
}
interface Tag {
    id:string;
    icon:string;
    title:string;
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