import Layout from '../components/layout' 
import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import { getPhotos } from '../lib/photos'

export async function getStaticProps() {
    const allPhotosData = await getPhotos()
    return {
      props: {
        allPhotosData
      }
    }
  }
  
  export default function Home({ allPhotosData}) {
    return (
    <Layout>
      <Head>
          <title>Photos</title>
      </Head>
      <section className={`${utilStyles.row}`}>
          {allPhotosData.map(({ uid, url, width, height}) => Img(url, height, width, uid))}
      </section>
      </Layout>
    )
}
  
export function Img(link, h, w, uid) {
    return( 
    <div className={`${utilStyles.column}`} key={uid}>
    <Image
        priority
        className={`${utilStyles.img}`}
        src = {link}
        height = {h}
        width = {w}
    />
    </div>
    
)
}
