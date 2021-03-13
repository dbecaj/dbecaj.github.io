import React from "react"
import Layout from "../components/layout"
import "../styles/index.css"
import { getImage, StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import InfoItem from "../components/info-item";
import { JobDesc } from "../components/job-desc";
import { SkillItem } from "../components/skill-item";
import { EduDesc } from "../components/edu-desc";

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
        <h3>Izkušnje</h3>
        {Array.from(Array(3)).map(i => {
          return (
            <JobDesc
              startDate="01.2021"
              endDate="02.2021"
              companyName="Google"
              jobPosition="Razvijalec zalednih sistemov"
              languages={['JavaScript', 'Python', 'Shell', 'SQL', "Java"]}
              tasks={['Screwing around', 'Screwing around', 'Screwing around', 'Screwing around', 'Screwing around', 'Screwing around', 'Screwing around']}
              style={{ marginBottom: "40px" }}
            />
          )
        })}

        <h3>Znanje</h3>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
          {Array.from(Array(12)).map(v => {
            return (
              <SkillItem name="Java" level="3" style={{ margin: "0 0px 40px 0" }} />
            )
          })}
        </div>

        <h3>Izobrazba</h3>
        {Array.from(Array(2)).map(v => {
          return (
            <EduDesc
              startDate="2016"
              endDate="2020"
              institutionName="Univerza v Ljubljani, Fakultata za računalništvo in informatiko"
              programName="visokošolski program"
              competencies={["Screwing around", "Screwing around", "Screwing around", "Screwing around", "Screwing around"]}
              style={{ marginBottom: "40px" }}
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
