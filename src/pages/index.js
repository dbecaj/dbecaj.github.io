import React from "react"
import Layout from "../components/layout"
import "../styles/index.css"
import { getImage, StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import InfoItem from "../components/info-item";
import { JobDesc } from "../components/job-desc";

export default function Home({ data }) {
  console.log(data)

  return (
    <div>
      { /* Header */}
      <div class="infoPanel">
        <div>
          <StaticImage
            src="../images/portrait-placeholder.webp"
            alt="Portrait of resume applicant"
            layout="fixed"
            width={150}
            height={120}
            style={{ margin: "0 auto 20px auto", }}
          />
          <div class="infoList">
            <InfoItem image={getImage(data.age.childImageSharp.gatsbyImageData)} imgAlt="Age icon" text="10.08.1998" />
            <InfoItem image={getImage(data.age.childImageSharp.gatsbyImageData)} imgAlt="Age icon" text="10.08.1998" />
            <InfoItem image={getImage(data.age.childImageSharp.gatsbyImageData)} imgAlt="Age icon" text="10.08.1998" />
            <InfoItem image={getImage(data.age.childImageSharp.gatsbyImageData)} imgAlt="Age icon" text="10.08.1998" />
            <InfoItem image={getImage(data.age.childImageSharp.gatsbyImageData)} imgAlt="Age icon" text="10.08.1998" />
          </div>
        </div>
      </div>

      { /* Body */}
      <Layout>
        <h1>Izkušnje</h1>
        {Array.from(Array(3)).map(i => {
          return (
            <JobDesc
              jobStart="01.01.2020"
              jobEnd="01.02.2020"
              companyName="Google"
              jobPosition="Razvijalec zalednih sistemov"
              languages={['Javascript', 'Python', 'Bash', 'SQL']}
              description="Sit aliquip occaecat est proident dolore sint anim enim nisi. Dolore dolore non consectetur deserunt aute esse in non consequat enim do. Id est sint Lorem veniam incididunt adipisicing culpa ad aute et. Tempor qui incididunt exercitation dolor pariatur officia cillum elit. Dolore nulla consequat aute dolor dolor incididunt fugiat.

Anim irure ullamco ullamco eiusmod nostrud sunt. Sint ex deserunt ipsum ut dolor Lorem sunt tempor amet do. Dolor culpa nulla dolor nostrud est id dolore nostrud ipsum duis adipisicing eiusmod pariatur. Quis Lorem id eiusmod pariatur do consequat incididunt Lorem magna ad. Quis amet est qui et veniam. Ex sunt occaecat cillum nisi deserunt id amet minim ut do ea minim."
            style={{ marginBottom: "25px" }}
            />
          )
        })}
      </Layout>
    </div>
  )
}

export const query = graphql`
{
  age: file(relativePath: {eq: "portrait-placeholder.webp"}) {
    childImageSharp {
      gatsbyImageData (
        width: 20
        height: 20
      )
    }
  }
}
`
