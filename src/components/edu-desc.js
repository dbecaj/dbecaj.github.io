import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { DateItem } from "./date-item"

export function EduDesc(props) {
  return (
    <div class={`${props.class}`}>

      { /* General education information */}
      <div class="flex">
        { /* Main information */ }
        <div>
          <h3 class="font-bold text-base">{props.institutionName}</h3>
          <p>{props.programName}</p>
        </div>

        { /*Side information*/ }
        <div class="flex flex-col ml-auto text-gray-500">
          <DateItem
            startDate={props.startDate}
            endDate={props.endDate}
            class="w-24"
          />
          { /* Marks */ }
          <div class="flex items-center text-xs">
            <FontAwesomeIcon icon="graduation-cap" />
            <p class="ml-1">{props.gradeAvg}/{props.gradeTotal}</p>
          </div>
        </div>
      </div>

      { /* Competencies acquired */}
      <div class="px-8 py-4">
        <ul class="list-disc">
          {props.competencies.map(value => {
            return (
              <li>{value}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}