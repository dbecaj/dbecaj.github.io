import React from "react"

// Load colors used for github programming languages
const langColors = require("../../content/github-lang-colors.json")

export function TechItem(props) {
  const circleStyle = {
    height: 10,
    width: 10,
    backgroundColor: langColors.hasOwnProperty(props.lang) ? langColors[props.lang].color : "#bbb",
    borderRadius: "50%",
    marginRight: 5
  }

  return (
    <div class="flex items-center border rounded-lg shadow-sm px-2 border-gray-300 mr-2.5">
      <span style={circleStyle} />
      <p>{props.lang}</p>
    </div>
  )
}