import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../components/layout.module.css'
import { getPhotos, getPhotosDataById } from '../../lib/photos'
import { Img } from '../photos'
import PhotoGrid from '../../components/photosgrid'
import SidePhotoGrid from '../../components/sidephotogrid'

export default function Post({ postData, allPhotosData }) {
    return (
      <div className={utilStyles.page}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <section className={utilStyles.grid}>
      <div className={utilStyles.header}>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
            </div><br/>
      </div>
      <div className={utilStyles.pfp}>
      <Link href = "/">
            <a>
            <Image 
              src = "/images/pfp.jpg" 
              height={100} 
              width={100} 
              className={`${utilStyles.borderCircle}`}
              />
            </a>
      </Link>
      </div>
      </section>
      <section className = {utilStyles.container}>
        <div className = {`${utilStyles.post}`}>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        <div className={utilStyles.content}>
        <SidePhotoGrid allPhotosData = {allPhotosData}/>
        </div>
      </section>
      
    </div>
      )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    const allPostData = await getPhotosDataById(params.id)
    const allPhotosData = await getPhotos(allPostData.url)
    return {
      props: {
        postData,
        allPostData,
        allPhotosData
      }
    }
  }