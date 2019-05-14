import React from 'react'
// import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Subscibe from '../components/subscribe'
import SEO from '../components/seo'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`Hairstylist`, `Hair Artist`, `editorial`, `editorial stylist`, `session stylist`, `toronto hairstylist`, `los angeles hairstylist`]} />
    <div className="item-wrap">
      <div className="logo">
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      </div>
      <div className="hair-image">
        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
      </div>
      <div className="info">
        <h2>coming soon!</h2>
        <a href="mailto:begood@thegoodonesacademy.com">begood@thegoodonesacademy.com</a>
        <p>IG <a href="https://www.instagram.com/thegoodonesacademy/">@thegoodonesacademy</a></p>
        <div className="divider"></div>
        <p>be the first to know</p>
        <Subscibe/>
      </div>
    </div>
    {/* <Link to="/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage


export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "good-ones-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "natural-hair.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
