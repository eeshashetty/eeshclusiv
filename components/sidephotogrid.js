import Image from "next/image";
import gridStyle from "./sidephotogrid.module.css";
import { Img } from "./photosgrid";

export default function SidePhotoGrid({ allPhotosData }) {
    return (
    <div className={`${gridStyle.row}`}>
            {allPhotosData.map(({ uid, url, width, height}) => Img(url, height, width, uid))}
    </div>
    )
}