import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

import CollectionPreview from "../components/categories/collection-preview"
import ProductListItem from "../components/products/product-list-item"
import Grid from "../components/utility/grid"
import SearchEngineOptimization from "../components/utility/seo"
import { useCollections } from "../hooks/use-collections"

const MainImageWrapper = styled.div`
    display: flex;
    padding-right: 40px;
    padding-left: 40px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #d3d3d3;
`

const DIV = styled.div`
    display: flex;
`

const IndexPage = ({ data }) => {
  const { products, collections } = data
  const prods = data.products.edges.map(edge => edge.node)
  const collectionPreviews = useCollections(collections, products)

  return (
    <div>
      <SearchEngineOptimization title="Home" />
      <div className="bg-ui-light pb-12 lg:pb-0 w-full px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center max-w-screen-2xl mx-auto">
          <MainImageWrapper>
              <DIV>
                  <StaticImage
                      src="https://assets-global.website-files.com/61e8ddff43ba4a80cf3fc001/6221a54e905f00799c5ecc94_barneybed_medium_hires.jpg"
                      loading="eager"
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      style={{ borderTopLeftRadius: 17, borderBottomLeftRadius: 17 }}
                      alt=""
                  />
                  <StaticImage
                      src="https://assets-global.website-files.com/61e8ddff43ba4a80cf3fc001/61fb4c6b26c5bd5c63f0b74d_medium8.jpg"
                      loading="eager"
                      quality={100}
                      style={{ borderTopRightRadius: 17, borderBottomRightRadius: 17 }}
                      formats={["auto", "webp", "avif"]}
                      alt=""
                  />
              </DIV>
          </MainImageWrapper>
        </div>
      </div>
      <div className="layout-base my-12 min-h-0">
        <Grid
          title={"Featured"}
          cta={{ to: "/products", text: "Browse all products" }}
        >
          {prods.slice(0, 4).map(p => {
            return <ProductListItem product={p} key={p.handle} />
          })}
        </Grid>
        <div className="mt-12">
          <Grid
            title="Shop by collection"
            cta={{ to: "/collections", text: "Browse all collections" }}
          >
            {collectionPreviews.slice(0, 4).map(collection => {
              return (
                <CollectionPreview
                  key={collection.id}
                  collection={collection}
                />
              )
            })}
          </Grid>
        </div>
      </div>
    </div>
  )
}
export const query = graphql`
  query {
    products: allMedusaProducts {
      edges {
        node {
          handle
          title
          collection_id
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
          variants {
            prices {
              amount
              currency_code
            }
          }
        }
      }
    }
    collections: allMedusaCollections {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`

export default IndexPage
