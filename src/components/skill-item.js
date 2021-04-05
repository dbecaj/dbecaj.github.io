import React from "react"
import { SkillLevel } from "./skill-level"

export function SkillItem(props) {

  return (
    <div class={`flex w-48 justify-between ${props.class}`}>
      <p>{props.name}</p>
      <SkillLevel level={props.level} class="ml-2"/>
    </div>
  )
}