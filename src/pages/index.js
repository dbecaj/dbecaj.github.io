import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby";
import InfoItem from "../components/info-item";
import { JobDesc } from "../components/job-desc";
import { SkillItem } from "../components/skill-item";
import { EduDesc } from "../components/edu-desc";

import SiteData from "../../content/site-data.json"
import { SectionHeading } from "../components/section-heading";
import { Helmet } from "react-helmet";

export default function Home({ data }) {

  <Helmet>
    <title>Dominik Bečaj</title>
    <meta name="description" content="A resume site for Dominik Bečaj, containing contact information and all professional experiences which may be of interest to a future employer" />
  </Helmet>

  return (
    <div>
      { /* Header */}
      <div class="flex justify-center items-center w-full h-72 p-8 bg-blue-400">
        <div>
          <h1 class="name text-center mb-8">Dominik Bečaj</h1>

          <div class="flex flex-wrap justify-center">
            {SiteData.userInfos.map(info => {
              return (
              <InfoItem 
                icon={info.icon} 
                text={info.text} 
                class="info mr-6 mt-2"
              />
              )
            })}
          </div>
        </div>
      </div>

      { /* Body */}
      <Layout>
        <SectionHeading title="References" icon="briefcase" />
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
              class="mb-8 shadow-md p-4 border rounded-md"
            />
          )
        }).reverse()}

        <SectionHeading title="Skills" icon="wrench" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, auto))",
          rowGap: "2rem",
          columnGap: "3rem",
          justifyContent: "space-around"
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

        <SectionHeading title="Education" icon="graduation-cap" />
        {SiteData.education.map(education => {
          return (
            <EduDesc
              startDate={education.startDate}
              endDate={education.endDate}
              institutionName={education.institutionName}
              programName={education.programName}
              gradeAvg={education.gradeAvg}
              gradeTotal={education.gradeTotal}
              competencies={education.competencies}
              class="mb-8 shadow-md p-4 border rounded-md"
            />
          )
        }).reverse()}
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
