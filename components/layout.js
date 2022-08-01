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
              <div className='three columns header'>
                <img
                  className='headerImg'
                  priority
                  src="images/vermeer-logo.svg"
                  // height={144}
                  // width={144}
                  alt={name}
                />
              </div>
              <div className='nine columns'>
                <section className='headerTitle'>
                  <h1>{name}</h1>
                </section>
                {/* <section className='navbar'>
                  <button onClick={() => setCategory(viewCategory === 'neck-pain' ? 'all' : 'neck-pain')}>Neck Pain</button>
                  <button onClick={() => setCategory(viewCategory === 'low-back-pain' ? 'all' : 'low-back-pain')}>Low Back Pain</button>
                  <button onClick={() => setCategory(viewCategory === 'chronic-pain' ? 'all' : 'chronic-pain')}>Chronic Pain</button>
                  <button onClick={() => setCategory(viewCategory === 'pelvic-health' ? 'all' : 'pelvic-health')}>Pelvic Health</button>
                  <button onClick={() => setCategory(viewCategory === 'miscellaneous' ? 'all' : 'miscellaneous')}>Miscellaneous</button>
                  <button onClick={() => setCategory(viewCategory === 'all' ? 'all': 'all')}>All</button>      
                </section> */}
              </div>
            </>
          ) : (
            <>
            <div className='header'>
              <section>
                <img
                  className='headerImg'
                  priority
                  src="/vermeer-logo.svg"
                  // height={144}
                  // width={144}
                  alt={name}
                />               
              </section>
              <section>
                <h1 className='headerTitle'>{name}</h1>
              </section>
            <section className='{styles.backToHome}'>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </section>
          </div>
            </>
          )}
        </header>
    </div>    

    {/* <div className='row'>
      <div className='twelve columns navbar'>
             <button onClick={() => setCategory(viewCategory === 'neck-pain' ? 'all' : 'neck-pain')}>Neck Pain</button>
            <button onClick={() => setCategory(viewCategory === 'low-back-pain' ? 'all' : 'low-back-pain')}>Low Back Pain</button>
            <button onClick={() => setCategory(viewCategory === 'chronic-pain' ? 'all' : 'chronic-pain')}>Chronic Pain</button>
            <button onClick={() => setCategory(viewCategory === 'pelvic-health' ? 'all' : 'pelvic-health')}>Pelvic Health</button>
            <button onClick={() => setCategory(viewCategory === 'miscellaneous' ? 'all' : 'miscellaneous')}>Miscellaneous</button>
            <button onClick={() => setCategory(viewCategory === 'all' ? 'all': 'all')}>All</button>          *
        </div>
      </div> */}
     

    <div className='row'>
      <div className='nine columns'>
        <main>{children}</main>
      </div>
      <div className='three columns sidebar'>
        <sidebar>
            <section className="sidebarItem">
                  <h3 className="sidebarTitle">An Aside</h3>
                  <p>
                      It can often be a wonder what the Platform Team does in a world with so many "platforms". Well, we hope that this handy website will not only answer that question for you but also provide many other insights and information you will find useful!
                  </p>
              </section>
          
              <section className="sidebarItem">
                      <h3 className="sidebarTitle">Contributing Content</h3>
                      <p>
                          To contribute content to this site please refer to the README on <a href = "https://github.com/vermeer-corp/pt-swa-comm-hub-v2">GitHub</a>
                      </p>
              </section> 
        </sidebar> 
      </div>
    </div>


    </div>
  )
}
