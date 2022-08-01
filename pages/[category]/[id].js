import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData.title}/>
        <meta name="twitter:title" content={postData.title}/>
        <meta property="description" content={postData.description}/>
        <meta property="og:description" content={postData.description}/>
        <meta name="twitter:description" content={postData.description}/>
        <meta property="og:image" content={postData.image}/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image" content={postData.image}/>
        <meta name="twitter:image" content={postData.image}/>      
        <meta name="twitter:card" content="summary_large_image"/>  
        <meta property="og:url" content={postData.url} />
        <meta property="og:site_name" content="Here Now Body" />
        <meta name="twitter:site" content="@herenowbody"/>
        <meta name="twitter:creator" content="@herenowbody"/>      
      </Head>
      <div className='ten columns singlePost'>
        {postData.title}
        <br />
        {postData.description}
        <br />
        <Date dateString={postData.date} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>

    </Layout>
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
  const postData = await getPostData(params.category, params.id)
  return {
    props: {
      postData
    }
  }
}