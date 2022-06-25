import { Link } from "gatsby"
import React from "react"
import InfoItem from "./info-item"
import { useLocation } from '@reach/router';

export function Header(props) {
  const location = useLocation()
  const url = location.href ? location.href : '' 
  let currLang = url.split('/').at(-1)
  if (currLang === '') currLang = 'en'

  return (
    <div class={`flex flex-col w-full ${props.class}`}>
      <div class="flex ml-auto mt-4 mr-4 px-1.5 py-1 bg-gray-100 font-bold rounded-lg">
        {props.supportedLanguages.map((lang, index) => {
          const link = lang === 'en' ? '/' : `/${lang}`
          const circleStyle = {
            display: "inline-block",
            height: 4,
            width: 4,
            backgroundColor: "#374151",
            borderRadius: "50%"
          }
          const langStyle = currLang === lang ? {
            backgroundColor: "#374151",
            color: "#f3f4f6",
            borderRadius: "25%",
            width: 30,
            textAlign: "center"
          } : { width: 30, textAlign: "center" }

          return (
            <div class="flex items-center text-gray-700">
              {index > 0 ? <span class="mr-1.5 ml-1.5" style={circleStyle} /> : undefined}
              <Link to={link} style={langStyle}>{lang.toUpperCase()}</Link>
            </div>
          )
        })}
      </div>

      <div class="flex flex-col items-center p-8 pb-10">
          <h1 class="nameTitle text-center mb-8 text-gray-100">{props.name}</h1>

          <div class="flex flex-wrap justify-center">
            {props.userInfos.map(info => {
              return (
                <InfoItem
                  icon={info.icon}
                  text={info.text}
                  class="infoItem mr-6 mt-2 text-gray-100"
                />
              )
            })}
          </div>
      </div>
    </div>
  )
}