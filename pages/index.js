import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import { Img } from './photos'
import Link from 'next/link'
import Date from '../components/date'
import { getPhotos } from '../lib/photos'

export async function getStaticProps() {
  const allPhotosData = await getPhotos()
  return {
    props: {
      allPhotosData
    }
  }
}

export default function Home({ allPhotosData }) {
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
      <section className={`${utilStyles.row}`}>
          {allPhotosData.map(({ uid, url, width, height}) => Img(url, height, width, uid))}
      </section>
      </section>
      
    </Layout>
  )
}