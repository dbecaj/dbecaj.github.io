import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export function SectionHeading(props) {
  return (
    <div class={`flex items-center mt-14 mb-4 text-gray-700 ${props.class}`}>
      <FontAwesomeIcon icon={props.icon} size="lg" />
      <h3 class="sectionHeading ml-2">{props.title}</h3>
    </div>
  )
}