/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {
   faComment
 } from '@fortawesome/free-solid-svg-icons'
 import Footer from "./footer"
 import Header from "./header"
 import "../styles/theme.css"
 
 const messageCommet = {
   display: 'inline-block',
   padding: '10px 15px',
   border: '1px solid #444',
   width: 50,
   height: 50,
   borderRadius: '50%',
   fontSize: 20,
   color: 'white',
   backgroundColor: '#2000F0',
   position: 'fixed',
   bottom: 30,
   left: 30,
 }
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
     console.log('data', data)
   return (
     <>
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
       <div
         style={{
           margin: `0 auto`,
           maxWidth: `var(--size-content)`,
           padding: `var(--size-gutter)`,
         }}
       >
         <main>{children}</main>
       </div>
       <Footer />
       <div style={messageCommet}>
         <FontAwesomeIcon icon={faComment}/>
       </div>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 