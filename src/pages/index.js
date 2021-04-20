import React from "react"
import Layout from "../components/layout"
import { JobDesc } from "../components/job-desc";
import { SkillItem } from "../components/skill-item";
import { EduDesc } from "../components/edu-desc";
import { SectionHeading } from "../components/section-heading";
import { Helmet } from "react-helmet";
import { Header } from "../components/header";

import SiteData from "../../content/site-data.json"
import { InterestItem } from "../components/interest-item";
import { SkillDesc } from "../components/skill-desc";

export default function Home({ data }) {

  return (
    <div class="bg-gray-800">
      <Helmet>
        <title>{SiteData.name}</title>
        <meta name="description" content={SiteData.description} />
      </Helmet>

      <Header
        name={SiteData.name}
        userInfos={SiteData.userInfos}
        class="bg-gray-700"
      />

      <Layout>
        <div>
          <SectionHeading title="References" icon="briefcase" />
          {SiteData.references.map(job => {
            return (
              <JobDesc
                startDate={job.startDate}
                endDate={job.endDate}
                companyName={job.companyName}
                location={job.location}
                position={job.position}
                technologies={job.technologies}
                tasks={job.tasks}
                class="mb-8 shadow-md p-4 border rounded-md bg-gray-700"
              />
            )
          })}
        </div>

        {/* <SkillItem
                  name={skill.name}
                  level={skill.level}
                /> */}

        <div>
          <SectionHeading title="Skills" icon="wrench" />
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 justify-items-center">
            {SiteData.skills.map(skill => {
              return (
                <SkillDesc
                  icon={skill.icon}
                  techName={skill.name}
                  experience={skill.experience}
                  text={skill.text}
                  class="shadow-md p-4 border rounded-md bg-gray-700"
                />
              )
            })}
          </div>
        </div>

        <div>
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
                class="mb-8 shadow-md p-4 border rounded-md bg-gray-700"
              />
            )
          })}
        </div>

        <div>
          <SectionHeading title="Interests" icon="user" />
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 justify-items-center">
            {SiteData.interests.map(interest => {
              return (
                <InterestItem
                  icon={interest.icon}
                  text={interest.text}
                />
              )
            })}
          </div>
        </div>
      </Layout>
    </div>
  )
}
