import React from "react"

export function EduDesc(props) {
  return (
    <div class={`${props.class}`}>
      { /* General education information */ }
      <div class="flex">
        <p>{props.institutionName}</p>
        <div class="flex ml-auto">
          <p>{props.startDate} - {props.endDate}</p>
        </div>
      </div>
      <p>{props.programName}</p>

      { /* Competencies acquired */ }
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