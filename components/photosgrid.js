import Image from "next/image";
import gridStyle from "./photosgrid.module.css";

export default function PhotoGrid({ allPhotosData }) {
    return (
    <div className={`${gridStyle.row}`}>
            {allPhotosData.map(({ uid, url, width, height}) => Img(url, height, width, uid))}
    </div>
    )
}

export function Img(link, h, w, uid) {
    return( 
    <div className={`${gridStyle.column}`} key={uid}>
    <Image
        priority
        className={`${gridStyle.img}`}
        src = {link}
        height = {h}
        width = {w}
    />
    </div>
    
)
}