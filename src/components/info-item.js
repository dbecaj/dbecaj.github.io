import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoItem(props) {
  // Check if info text is a web link
  let text = <p>{props.text}</p>
  if (props.text.match(/^(http|https):\/\//)) {
    text = <a class="underline" href={props.text}>{props.text}</a>
  }
  // Check if info text is an email (very basic check)
  if (props.text.match(/^\S+@\S+$/)) {
    text = <a href={`mailto:${props.text}`}>{props.text}</a>
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