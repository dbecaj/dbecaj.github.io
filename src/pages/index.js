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
            {SiteData.userInfos.map(info => {
              return (
              <InfoItem 
                icon={info.icon} 
                text={info.text} 
                class="mr-6 mt-2"
              />
              )
            })}
          </div>
        </div>
      </div>

      { /* Body */}
      <Layout>
        <h3>Izkušnje</h3>
        {SiteData.jobs.map(job => {
          return (
            <JobDesc
              startDate={job.startDate}
              endDate={job.endDate}
              companyName={job.companyName}
              location={job.location}
              position={job.position}
              technologies={job.technologies}
              tasks={job.tasks}
              class="mb-14"
            />
          )
        })}

        { /* class="flex flex-wrap justify-between" */ }
        <h3>Znanje</h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, auto))",
          rowGap: "2rem",
          columnGap: "1rem"
        }}>
          {SiteData.skills.map(skill => {
            return (
              <SkillItem 
                name={skill.name} 
                level={skill.level} 
              />
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
