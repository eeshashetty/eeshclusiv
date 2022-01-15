import storyStyles from "./stories.module.css"
import utilStyles from "../styles/utils.module.css"
import Image from "next/image"
import Link from "next/link"
import albumData from "../public/links.json"

export default function Stories({allPostsData}) {
    return (
        <section className={`${storyStyles.bar}`}>
          {allPostsData.map(({ id, date, title }) => (
            <Link href={`/posts/${id}`}>
            <a className={`${storyStyles.story}`}>
            <Image
                priority
                src = {albumData[id].cover}
                height = {300}
                width = {300}
                className = {storyStyles.cover}
                objectFit = "cover"
            />
            <div className={`${storyStyles.centered}`}>{title}</div>
            </a>  
            </Link>
          ))}
      </section>
    )

}