import React from "react"
import ReactMarkdown from "react-markdown"
import { DateItem } from "./date-item";
import { TechItem } from "./tech-item"

export function JobDesc(props) {
  // Add custom style to html elements for markdown to html conversion 
  const components = {
    a: ({node, ...props}) => <a class="text-blue-800 font-bold" {...props} /> 
  }

  return (
    <div class={`${props.class}`}>
      { /* General job information */}
      <div class="flex">
        <h3 class="font-bold text-base">{props.position}</h3>
        <div class="flex ml-auto">
          <DateItem 
            startDate={props.startDate} 
            endDate={props.endDate} 
            class="w-36 text-gray-400"
          />
        </div>
      </div>
      <ReactMarkdown components={components} children={`${props.companyName}, (${props.location})`} />

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