// import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage;