import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export function InterestItem(props) {
  return (
    <div class={`flex flex-col items-center text-base ${props.class}`}>
      <FontAwesomeIcon icon={props.icon} size="3x" />
      <h3 class="font-bold mt-2">{props.text}</h3>
    </div>
  )
}