import storyStyles from "../components/stories.module.css"
import utilStyles from "../styles/utils.module.css"
import Image from "next/image"
import Link from "next/link"
import { getSortedPostsData } from "../lib/posts"

export async function getStaticProps() {
    const allPostsData = await getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }

export default function Stories({allPostsData}) {
    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          {allPostsData.map(({ id, date, title }) => (
            <div className={`${storyStyles.story}`}>
            <Image
                priority
                src = {`/posts-covers/${id}.jpg`}
                height = {300}
                width = {300}
                className = {storyStyles.cover}
                objectFit = "cover"
            />
            <div className={`${storyStyles.centered}`}>{title}</div>
            </div>  
          ))}
      </section>
    )

}