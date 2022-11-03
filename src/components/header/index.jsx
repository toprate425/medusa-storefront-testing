import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Dropdown from 'react-bootstrap/Dropdown'
import "../../styles/header.css"

const links = [
  {
    text: "HOME",
    url: "/",
    description:
      "",
  },
  {
    text: "DOG BEDS",
    url: "/dog-beds",
    description:
      "",
  },
  {
    text: "COVER & KITS",
    url: "/cover-kits",
    description:
      "",
  },
  {
    text: "SIZE GUIDE",
    url: "/size-guide",
    description:
      "",
  },
  {
    text: "SHIPPING",
    url: "/shipping",
    description:
      "",
  },
  {
    text: "CARE & WASHING",
    url: "/care-washing",
    description:
      "",
  },
  {
    text: "REVIEWS",
    url: "/reviews",
    description:
      "",
  },
  {
    text: "VIDEOS",
    url: "/videos",
    description:
      "",
  },
  {
    text: "FAQA",
    url: "/faqs",
    description:
      "",
  },
  {
    text: "OUR STORY",
    url: "/our-story",
    description:
      "",
  },
  {
    text: "CONTACT",
    url: "/contact",
    description:
      "",
  },
  
]

const Header = () => (
  <header
    style={{
      margin: `0 auto`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <nav style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '5px 5px 5px 14px',
          backgroundColor: '#636363'
        }}
      >
        <Link style={{ color: '#fff', fontFamily: 'Montserrat,sans-serif', fontSize: 13, fontWeight: 300 }}>BARNEY BED</Link>
        <Dropdown style={{ background: 'transparent' }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            NORTH AMERIA
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>AUSTRALIA & NZ</Dropdown.Item>
            <Dropdown.Item>UK & EUROPE</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="announcementbardiv">
        <div>
          <Link to="/shipping" style={{ color: '#242424', textDecoration: 'none', fontFamily: 'Montserrat,sans-serif', fontSize: 14 }}>
            <div className="announcementtext usa">
            FREE DELIVERY & FAST SHIPPING IN THE USA
            </div>
            {/* <div className="announcementtext canada">
            LOW RATES TO CANADA AND MEXICO
            </div> */}
          </Link>
        </div>
      </div>
      <div style={{ borderBottom: '1px solid #d3d3d3', textAlign: 'center', marginTop: 10, position: 'relative' }}>
        <StaticImage
          src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/61f4e6f4200a00771bd2a316_barneybed_logo.png"
          loading="eager"
          width={125}
          formats={["auto", "webp", "avif"]}
          alt=""
        />
        <div>
          <Link to="#">
            <div 
              style={{
                position: 'absolute',
                top: 0,
                right: 10,
                width: 30,
                height: 30,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat', 
                backgroundImage: 'url(https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/61f50334d55424baa24de354_bag.svg)'}}>
            </div>
          </Link>
        </div>
        <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', listStyle: 'none', margin: 0 }}>
          {links.map(link => (
            <li 
              key={link.url}
              style={{
                padding: 10,
                fontFamily: 'Montserrat,sans-serif',
                fontSize: 12,
                textDecoration: 'none',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}>
              <Link
                style={{ color: '#222', textDecoration: 'none' }}
                to={`${link.url}`}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
