import React, { useEffect } from "react"
import InfoItem from "./info-item"

export function Header(props) {
  
  // Changes website theme to dark mode if browser requests it (we can change it manually with localStorage.theme)
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  });

  return (
    <div class={`flex justify-center items-center w-full h-72 p-8 ${props.class}`}>
      <div>
        <h1 class="nameTitle text-center mb-8 dark:text-gray-100">{props.name}</h1>

        <div class="flex flex-wrap justify-center">
          {props.userInfos.map(info => {
            return (
              <InfoItem
                icon={info.icon}
                text={info.text}
                class="infoItem mr-6 mt-2 dark:text-gray-100"
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}