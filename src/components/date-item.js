import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export function DateItem(props) {

  return (
    <div class={`flex items-center ${props.class}`}>
      <FontAwesomeIcon icon="calendar-alt" />
      <p class="ml-1.5">{props.startDate} - {props.endDate}</p>
    </div>
  )
}