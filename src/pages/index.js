import React from "react"
import Layout from "../components/layout"
import { JobDesc } from "../components/job-desc";
import { EduDesc } from "../components/edu-desc";
import { SectionHeading } from "../components/section-heading";
import { Helmet } from "react-helmet";
import { Header } from "../components/header";
import { InterestItem } from "../components/interest-item";
import { SkillDesc } from "../components/skill-desc";

// Load language packs
import SiteDataEN from "../../content/site-data.json"
import SiteDataSL from "../../content/site-data_sl.json"
const supportedLanguages = {
  en: SiteDataEN,
  sl: SiteDataSL
}

export default function Home({ pageContext }) {
  // Page lang is a part of URL and resolved in gatsby-node to variable pageContext.lang
  const pageLang = pageContext.lang
  const siteData = supportedLanguages[pageLang] ? supportedLanguages[pageLang] : supportedLanguages['en']

  return (
    <div class="bg-gray-800">
      <Helmet>
        <title>{siteData.name}</title>
        <meta name="description" content={siteData.description} />
      </Helmet>

      <Header
        name={siteData.name}
        userInfos={siteData.userInfos}
        supportedLanguages={Object.keys(supportedLanguages)}
        class="bg-gray-700"
      />

      <Layout>
        <div>
          <SectionHeading title={siteData.references.title} icon="briefcase" />
          {siteData.references.items.map(job => {
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

        <div>
          <SectionHeading title={siteData.skills.title} icon="wrench" />
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 justify-items-center">
            {siteData.skills.items.map(skill => {
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
          <SectionHeading title={siteData.education.title} icon="graduation-cap" />
          {siteData.education.items.map(education => {
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
          <SectionHeading title={siteData.interests.title} icon="user" />
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 justify-items-center">
            {siteData.interests.items.map(interest => {
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
