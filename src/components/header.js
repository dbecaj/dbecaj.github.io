import React from "react"
import InfoItem from "./info-item"

export function Header(props) {
  return (
    <div class={`flex flex-col w-full ${props.class}`}>
      <div class="flex ml-auto pt-4 pr-4">
        {props.supportedLanguages.map((lang, index) => {
          const href = lang === 'en' ? '/' : lang
          const circleStyle = {
            display: "inline-block",
            height: 4,
            width: 4,
            backgroundColor: "#bbb",
            borderRadius: "50%"
          }

          return (
            <div class="flex items-center">
              {index > 0 ? <span class="mr-2" style={circleStyle} /> : undefined}
              <a class="mr-2 text-gray-100" href={href}>{lang.toUpperCase()}</a>
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