import React from "react"
import ReactMarkdown from "react-markdown"

import JavaScript from "../assets/javascript.svg"
import Java from "../assets/java.svg"
import Database from "../assets/database.svg"
import CSS from "../assets/css.svg"
import Linux from "../assets/linux.svg"
import Python from "../assets/python.svg"
const icons = {
  js: <JavaScript />,
  java: <Java />,
  database: <Database />,
  css: <CSS />,
  linux: <Linux />,
  python: <Python />
}

export function SkillDesc(props) {
  // Add custom style to html elements for markdown to html conversion 
  const components = {
    a: ({node, ...props}) => <a class="text-blue-800 font-bold" {...props} /> 
  }

  return (
    <div class={`${props.class}`}>
      <div class="flex mb-2.5">
        <div class="w-12 h-12 mr-2">
          {icons[props.icon]}
        </div>
        <div class="flex flex-col">
          <h3 class="text-xl">{props.techName}</h3>
          <p class="text-gray-500">{props.experience}</p>
        </div>
      </div>

      <ReactMarkdown components={components} children={props.text} />
    </div>
  )
}