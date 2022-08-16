import React from 'react'
import Footer from './Footer'
import Genre from './Genre'
import Header from './Header'

export default function Layout({search, children}) {
  return (
    <>
          <Header />
              <main className="wrap">
                  <div className="content">
                      <div className="search-form">
                          {search} 
                          <span> rating &#709;</span>
                      </div>
                      {children}
                    </div>
                  <Genre />
              </main>
          <Footer />
    </>
  )
}
