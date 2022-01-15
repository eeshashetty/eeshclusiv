import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import { getPhotos } from '../lib/photos'
import { getSortedPostsData } from '../lib/posts'
import Stories from '../components/stories'
import PhotoGrid from '../components/photosgrid'

export async function getStaticProps() {
  const allPhotosData = await getPhotos(process.env.PHOTOS_URL)
  const allPostsData = await getSortedPostsData()

  return {
    props: {
      allPhotosData,
      allPostsData
    }
  }
}

export default function Home({ allPhotosData, allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.body}>
      <section className={utilStyles.headingMd}>
        <p>I like taking pictures and a good aesthetic.</p>
      </section>
      <br/>
      <Stories allPostsData = {allPostsData}/>
      <br/>
      <PhotoGrid allPhotosData = {allPhotosData}/>
      </section>
      
    </Layout>
  )
}