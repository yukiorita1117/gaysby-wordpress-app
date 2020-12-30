import React from "react"
import { Link, graphql } from "gatsby"
import { styled } from "linaria/react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "@material-ui/core/Card"
import { CardContent } from "@material-ui/core"

const CardStyled = styled.div`
  display: block;
  width: 200px;
  height: 140px;
  background-color: red;
`

// TODO material-uiも使えるか調査する。
export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <h4>Posts</h4>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.content }} />
        </div>
      ))}
      {data.allWordpressPost.edges.map(({ node }) => {
        console.log("nodeの中身は？？？？", node)
        return (
          <div>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <CardStyled>カードだよ</CardStyled>
            <Card>
              <CardContent>material-uiのカードだよ。</CardContent>
            </Card>
          </div>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          content
          excerpt
        }
      }
    }
  }
`

// const IndexPage: React.FC = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>

//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//   </Layout>
// )
// export default IndexPage
