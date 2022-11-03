import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
import styled from "styled-components";

import "../styles/footer.css";

const FooterBar = styled.footer`
margin-top: var(--space-5);
font-size: var(--font-sm)};
padding: 40px;
background-color: #e0e0e0;
`

const FooterMenuLayout = styled.div`
    display: flex;
    min-width: 180px;
    margin-top: 10px;
    margin-right: 40px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
`

const SocialLayout = styled.div`
    display: flex;
    min-width: 180px;
    margin-top: 10px;
    margin-right: 40px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
`

const MenuTitle = styled.h3`
    margin-bottom: 0;
    font-size: 22px;
    font-weight: 400;
    text-decoration: underline;
`

const BottomMenu = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    align-items: center;
`
const Footer = () => {
    return (
        <FooterBar className="footerBar">
          <div style={{ display: 'flex' }}>
            <FooterMenuLayout className="wrapper">
                <MenuTitle>Barney Bed</MenuTitle>
                <Link to="/contact">Contact</Link>
                <Link to="/our-story">Our Story</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms-of-service">Terms of Service</Link>
            </FooterMenuLayout>
            <FooterMenuLayout className="wrapper">
                <MenuTitle>Help & Support</MenuTitle>
                <Link to="/">FAQ's</Link>
                <Link to="/">Shipping</Link>
                <Link to="/">Care & Wishing</Link>
                <Link to="/">Videos</Link>
                <Link to="/">Return Policy</Link>
            </FooterMenuLayout>
            <FooterMenuLayout className="wrapper">
                <MenuTitle>Locations</MenuTitle>
                <Link to="/">NOrth America $USD</Link>
                <Link to="/">Australia & NZ $AUD</Link>
                <Link to="/">UK & Europe £GBP</Link>
            </FooterMenuLayout>
            <SocialLayout>
                <MenuTitle>Socials</MenuTitle>
                <div className="socialWrapper">
                    <Link to="/">
                        <StaticImage
                            src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/623aaaa745b5ece16ab7d0e2_intagram%40100x-8.png"
                            loading="eager"
                            height={35}
                            quality={90}
                            formats={["auto", "webp", "avif"]}
                            alt=""
                        />
                    </Link>
                    <Link to="/">
                        <StaticImage
                            src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/623aaaa708ea9b70f6d0743a_tiktok%40100x-8.png"
                            loading="eager"
                            height={35}
                            quality={90}
                            formats={["auto", "webp", "avif"]}
                            alt=""
                        />
                    </Link>
                    <Link to="/">
                        <StaticImage
                            src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/623aaaa72d6c35b93ff6b1c6_youtube%40100x-8.png"
                            loading="eager"
                            height={35}
                            quality={90}
                            formats={["auto", "webp", "avif"]}
                            alt=""
                        />
                    </Link>
                    <Link to="/">
                        <StaticImage
                            src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/623aaaa741b5279793f5b308_facebook%40100x-8.png"
                            loading="eager"
                            height={35}
                            quality={90}
                            formats={["auto", "webp", "avif"]}
                            alt=""
                        />
                    </Link>
                </div>
                
            </SocialLayout>
          </div>
          <BottomMenu>
            <div>
                <StaticImage 
                    src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/61f4e6f4200a00771bd2a316_barneybed_logo.png"
                    loading="eager"
                    width={80}
                    quality={99}
                />
                <p style={{ fontSize: 13, color: '#a3a3a3' }}>© Copyright Barney Bed 2022</p>
            </div>
            <div>
                <StaticImage
                    src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/623a6172cc7d630ce85c7ab2_applepay%40100x-8.png"
                    loading="eager"
                    width={40}
                    style={{ marginRight: 8, opacity: .54 }}
                    quality={70}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                />
                <StaticImage
                    src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/623a61721cd697beb9796979_paypal%40100x-8.png"
                    loading="eager"
                    width={40}
                    style={{ marginRight: 8, opacity: .54 }}
                    quality={90}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                />
                <StaticImage
                    src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/623a617268c7d70b789327d7_googlepay%40100x-8.png"
                    loading="eager"
                    width={40}
                    style={{ marginRight: 8, opacity: .54 }}
                    quality={90}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                />
                <StaticImage
                    src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/623a61724232bfd17c73be78_visa%40100x-8.png"
                    loading="eager"
                    width={40}
                    style={{ marginRight: 8, opacity: .54 }}
                    quality={90}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                />
                <StaticImage
                    src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/623a6172376b6b1aed1a41b6_mastercard%40100x-8.png"
                    loading="eager"
                    width={40}
                    style={{ marginRight: 8, opacity: .54 }}
                    quality={90}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                />
                <StaticImage
                    src="https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/623a61721cd6977d4f79696b_amex%40100x-8.png"
                    loading="eager"
                    width={40}
                    style={{ marginRight: 8, opacity: .54 }}
                    quality={90}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                />
            </div>
          </BottomMenu>
        </FooterBar>
    )
    
}

export default Footer;