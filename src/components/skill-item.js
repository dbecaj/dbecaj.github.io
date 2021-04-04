import React from "react"
import { SkillLevel } from "./skill-level"

export function SkillItem(props) {

  return (
    <div class={`flex ${props.class}`}>
      <p class="mx-auto">{props.name}</p>
      <SkillLevel level={props.level} class="whitespace-nowrap ml-4"/>
    </div>
  )
}