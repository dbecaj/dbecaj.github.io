import React from "react"
import { TechItem } from "./tech-item"

export function JobDesc(props) {
  return (
    <div class={`${props.class}`}>
      { /* General job information */}
      <div class="flex">
        <h3 class="font-bold text-lg">{props.position}</h3>
        <div class="flex ml-auto">
          <p class="text-gray-500">{props.startDate} - {props.endDate}</p>
        </div>
      </div>
      <p>{props.companyName}, ({props.location})</p>

      { /* Technologies used */ }
      <div class="flex flex-wrap mt-2">
        {props.technologies.map(lang => {
          return (
            <TechItem lang={lang} />
          );
        })}
      </div>

      { /* Job description */}
      <div class="px-8 py-4">
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