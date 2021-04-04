import React from "react"

// Load colors used for github programming languages
const langColors = require("./github-lang-colors.json")

export function JobDesc(props) {
  return (
    <div class={`${props.class}`}>
      { /* General job information */}
      <div class="flex">
        <p>{props.position}</p>
        <div class="flex ml-auto">
          <p>{props.startDate} - {props.endDate}</p>
        </div>
      </div>
      <p>{props.companyName}, ({props.location})</p>

      <div class="flex flex-wrap">
        {props.technologies.map(lang => {
          const circleStyle = {
            height: 10,
            width: 10,
            backgroundColor: langColors.hasOwnProperty(lang) ? langColors[lang].color : "#bbb",
            borderRadius: "50%",
            marginRight: 5,
            marginTop: 3 // Font has some padding top so add margin top to center circle with text
          }

          return (
            <div class="flex items-center mr-4">
              <span style={circleStyle} />
              <p>{lang}</p>
            </div>
          )
        })}
      </div>

      { /* Job description */}
      <div class="border border-black px-8 py-4">
        <ul class="list-disc">
          {props.tasks.map(value => {
            return (
              <li>{value}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}