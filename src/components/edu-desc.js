import React from "react"

export function EduDesc(props) {
  return (
    <div class={`${props.class}`}>
      { /* General education information */}
      <div class="flex">
        <p>{props.institutionName}</p>
        <div class="flex ml-auto">
          <p>{props.startDate} - {props.endDate}</p>
        </div>
      </div>
      <div class="flex">
        <p>{props.programName}</p>
        <p class="ml-auto mt-auto">{props.gradeAvg}/{props.gradeTotal}</p>
      </div>

      { /* Competencies acquired */}
      <div class="border border-black px-8 py-4">
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