import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Eesha Shetty'
export const siteTitle = 'Eeshclusive'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/icon.png" />
        <meta
          name="description"
          content="I like taking pictures and a good aesthetic. A portfolio website for some of my photos."
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
          <>
            <Image
              priority
              src="/images/pfp.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
      </header>
      <main>{children}</main>
    </div>
  )
}
