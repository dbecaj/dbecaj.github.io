import { Link } from "gatsby"
import React from "react"
import InfoItem from "./info-item"

export function Header(props) {
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

          return (
            <div class="flex items-center text-gray-700">
              {index > 0 ? <span class="mr-2 ml-2" style={circleStyle} /> : undefined}
              <Link to={link}>{lang.toUpperCase()}</Link>
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