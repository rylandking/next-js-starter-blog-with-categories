import Head from 'next/head'
import Link from 'next/link'
import { useState } from "react"
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  // Delcare what category should be shown
  const [viewCategory, setCategory] = useState('all');

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Ryland's Blog</p>
      </section>
      <section>
        <button onClick={() => setCategory(viewCategory === 'neck-pain' ? 'all' : 'neck-pain')}>Neck Pain</button>
        <button onClick={() => setCategory(viewCategory === 'low-back-pain' ? 'all' : 'low-back-pain')}>Low Back Pain</button>
        <button onClick={() => setCategory(viewCategory === 'chronic-pain' ? 'all' : 'chronic-pain')}>Chronic Pain</button>
        <button onClick={() => setCategory(viewCategory === 'pelvic-health' ? 'all' : 'pelvic-health')}>Pelvic Health</button>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, category, date, title, image }) => (
            <li className={utilStyles.listItem} key={id} style={{ 
              display: (viewCategory === category || viewCategory === 'all') ? "block":"none"
            }}>
            <Link href="/[category]/[id]" as={`/${category}/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
            <br />
            <img src={image} alt={id}/>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}