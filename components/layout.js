import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'


const name = 'Platform Team Communcations Hub'
export const siteTitle = 'Platform Team Communication Hub'

export default function Layout({ children, home }) {
  return (
    <div className= "row {styles.container}">
      <Head>
        <link rel="icon" href="/vermeer-favicon.png" />
      </Head>

    <div className='row'>
      <header>
          {home ? (
            <>
              <div className='two columns header'>
                <img
                  className='headerImg'
                  priority
                  src="/vermeer-logo.svg"
                  // height={144}
                  // width={144}
                  alt={name}
                />
              </div>
              <div className='ten columns headerTitle'>
                <h1>{name}</h1>
              </div>
            </>
          ) : (
            <>
            <div className='two columns header'>
              <img
                className='headerImg'
                priority
                src="/vermeer-logo.svg"
                // height={144}
                // width={144}
                alt={name}
              />
            </div>
            <div className='eight columns headerTitle>'>
              <h1 className='headerTitles'>{name}</h1>
            </div>
            <div className='two columns {styles.backToHome}'>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
            </>
          )}
        </header>
    </div>
      

      
      <main>{children}</main>

    </div>
  )
}
