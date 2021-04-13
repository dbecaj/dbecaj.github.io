import React, { useEffect } from "react"
import Layout from "../components/layout"
import { JobDesc } from "../components/job-desc";
import { SkillItem } from "../components/skill-item";
import { EduDesc } from "../components/edu-desc";
import { SectionHeading } from "../components/section-heading";
import { Helmet } from "react-helmet";
import { Header } from "../components/header";

import SiteData from "../../content/site-data.json"
import { InterestItem } from "../components/interest-item";

export default function Home({ data }) {

  return (
    <div class="dark:bg-gray-800">
      <Helmet>
        <title>{SiteData.name}</title>
        <meta name="description" content={SiteData.description} />
        { /* Changes website theme to dark mode if browser requests it (we can change it manually with localStorage.theme) */ }
        <script>
          {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        `}
        </script>
      </Helmet>

      <Header
        name={SiteData.name}
        userInfos={SiteData.userInfos}
        class="bg-blue-400 dark:bg-gray-700"
      />

      <Layout>
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
              class="mb-8 shadow-md p-4 border rounded-md dark:bg-gray-700"
            />
          )
        })}

        <SectionHeading title="Skills" icon="wrench" />
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 justify-items-center">
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
              class="mb-8 shadow-md p-4 border rounded-md dark:bg-gray-700"
            />
          )
        })}

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
      </Layout>
    </div>
  )
}
