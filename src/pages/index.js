import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby";
import InfoItem from "../components/info-item";
import { JobDesc } from "../components/job-desc";
import { SkillItem } from "../components/skill-item";
import { EduDesc } from "../components/edu-desc";

import SiteData from "../../content/site-data.json"

export default function Home({ data }) {

  return (
    <div>
      { /* Header */}
      <div class="flex justify-center items-center w-full h-72 bg-blue-400">
        <div>
          <h1 class="text-6xl text-center mb-8">Dominik Bečaj</h1>

          <div class="flex flex-wrap justify-center">
            {SiteData.userInfo.map(info => {
              return (
              <InfoItem 
                icon={info.icon} 
                text={info.text} 
                class="mr-6"
              />
              )
            })}
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
              class="mb-14"
            />
          )
        })}

        <h3>Znanje</h3>
        <div class="flex flex-wrap justify-between">
          {Array.from(Array(12)).map(v => {
            return (
              <SkillItem name="Java" level="3" style={{ margin: "0 0px 40px 0" }} class="mb-14" />
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
              class="mb-14"
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
