import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import ReactMarkdown from "react-markdown"
import { DateItem } from "./date-item"

function Marks(props) {
  return (
    <div class="flex items-center">
      <FontAwesomeIcon icon="user-graduate" />
      <p class="ml-1">{props.gradeAvg}/{props.gradeTotal}</p>
    </div>
  );
}

export function EduDesc(props) {
  // Add custom style to html elements for markdown to html conversion 
  const components = {
    a: ({node, ...props}) => <a class="text-blue-800 font-bold" {...props} /> 
  }

  return (
    <div class={`${props.class}`}>

      { /* General education information */}
      <div class="flex">
        { /* Main information */}
        <div class="mr-2">
          <h3 class="font-bold text-base">{props.institutionName}</h3>
          <p>{props.programName}</p>
        </div>

        { /*Side information*/}
        <div class="flex flex-col ml-auto text-gray-400">
          <DateItem
            startDate={props.startDate}
            endDate={props.endDate}
            class="w-24"
          />
          <Marks gradeAvg={props.gradeAvg} gradeTotal={props.gradeTotal} />
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

      { /* Final project */}
      {
        props.project ? <ReactMarkdown components={components} children={props.project} /> : undefined
      }
    </div>
  )
}