import React from "react"
import InfoItem from "./info-item"

export function Header(props) {
  return (
    <div class={`flex justify-center items-center w-full h-72 p-8 ${props.class}`}>
      <div>
        <h1 class="nameTitle text-center mb-8">{props.name}</h1>

        <div class="flex flex-wrap justify-center">
          {props.userInfos.map(info => {
            return (
              <InfoItem
                icon={info.icon}
                text={info.text}
                class="infoItem mr-6 mt-2"
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}