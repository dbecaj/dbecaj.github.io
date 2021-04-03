import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoItem(props) {
  // Check if info text is a web link
  let text = <p>{props.text}</p>
  if (props.text.match(/^(http|https):\/\//)) {
    text = <a href={props.text}>{props.text}</a>
  }

  return (
    <div class={`flex items-center ${props.class}`}>
      <FontAwesomeIcon icon={props.icon} />
      <div class="ml-2">
        {text}
      </div>
    </div>
  )
}