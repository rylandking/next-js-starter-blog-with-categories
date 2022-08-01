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
      
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}> */}
        <h2 className= "postsListTitle">Recent Posts</h2>
        <ul className='postsList'>
          {allPostsData.map(({ id, category, date, title, image }) => (
            <li className='postsListItem' key={id} style={{ 
              display: (viewCategory === category || viewCategory === 'all') ? "block":"none"
            }}>
            <Link href="/[category]/[id]" as={`/${category}/${id}`}>
              <a className='postsListSingleTitle'>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
            <br />
            <img classname = "postsListImage" src={image} alt={id}/>
          </li>
          ))}
        </ul>
      {/* </section> */}
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