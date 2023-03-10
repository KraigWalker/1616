import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Project 16:16</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav aria-labelledby='nav-label' className={styles.header}>
          <h2 id="nav-label" className={styles.vh}>Site</h2>
          <div className={styles.logo}>
            <Link href="/" className={styles.logoText}>16:16<span className={styles.vh}> home page</span></Link>
          </div>
          <div className={styles.selector}>

          </div>
          <div className={styles.podcast}><div className={'text'}>RSS</div></div>
          <div className={styles.info}><div>i</div></div>
          <div className={styles.newsletter}><div>i</div></div>
          </nav>
        </header>
      <main className={styles.main}>
        <div className={styles.noon}></div>
        <div className={styles.calendar}>
          <div className={styles.day}>
            <div className={styles.text}>M</div>
            <div className={styles.number}>16</div>
          </div>
          <div className={styles.day}>
          <div className={styles.text}>T</div>
            <div className={styles.number}>17</div>
          </div>
          <div className={styles.day}>
            <div className={styles.text}>W</div>
            <div className={styles.number}>18</div>
          </div>
          <div className={styles.day}>
            <div className={styles.text}>T</div>
            <div className={styles.number}>19</div>
          </div>
          <div className={styles.day}>
            <div className={styles.text}>F</div>
            <div className={styles.number}>20</div>
          </div>
          <div className={styles.day}>
            <div className={styles.text}>S</div>
            <div className={styles.number}>21</div>
          </div>
          <div className={`${styles.day} ${styles.last}`}>
            <div className={styles.text}>S</div>
            <div className={styles.number}>22</div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </>
  )
}
