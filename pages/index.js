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

    {/* <div className='row'> */}
      <div className='three columns navbar'>
        <ul className='navbarButtonsList'>
         <li className='navbarItem'>
            <button onClick={() => setCategory(viewCategory === 'all' ? 'all': 'all')}>All</button>
          </li>
          <li className='navbarItem'>
            <button onClick={() => setCategory(viewCategory === 'neck-pain' ? 'all' : 'neck-pain')}>Neck Pain</button>
          </li>
          <li className='navbarItem'>           
           <button onClick={() => setCategory(viewCategory === 'low-back-pain' ? 'all' : 'low-back-pain')}>Low Back Pain</button>
          </li>
          <li className='navbarItem'>
            <button onClick={() => setCategory(viewCategory === 'chronic-pain' ? 'all' : 'chronic-pain')}>Chronic Pain</button>
          </li>
          <li className='navbarItem'>
            <button onClick={() => setCategory(viewCategory === 'pelvic-health' ? 'all' : 'pelvic-health')}>Pelvic Health</button>
          </li>
          <li className='navbarItem'>
            <button onClick={() => setCategory(viewCategory === 'azure' ? 'all' : 'azure')}>azure</button>
          </li>
          <li className='navbarItem'>
            <button onClick={() => setCategory(viewCategory === 'pelvic-health' ? 'all' : 'pelvic-health')}>Pelvic Health</button>
          </li>
          <li className='navbarItem'>
            <button onClick={() => setCategory(viewCategory === 'pelvic-health' ? 'all' : 'pelvic-health')}>Pelvic Health</button>
          </li>
          <li className='navbarItem'>
            <button onClick={() => setCategory(viewCategory === 'pelvic-health' ? 'all' : 'pelvic-health')}>Pelvic Health</button>
          </li>
          <li className='navbarItem'>
            <button onClick={() => setCategory(viewCategory === 'miscellaneous' ? 'all' : 'miscellaneous')}>Miscellaneous</button>
          </li>
       </ul>

            
            
            
                  
        </div>
    {/* </div> */}
      
                  
      
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}> */}
      <div className='nine columns postsList'>
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
              {/* <img classname = "postsListImage" src={image} alt={id}/> */}
            </li>
            ))}
          </ul>
      </div>
        
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