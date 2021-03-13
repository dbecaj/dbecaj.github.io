import React from "react"

// Load colors used for github programming languages
const langColors = require("./github-lang-colors.json")

export function JobDesc(props) {
  return (
    <div style={{ ...props.style }}>
      { /* General job information */}
      <div style={{ display: "flex" }}>
        <p>{props.companyName} - {props.jobPosition}</p>
        <div style={{ display: "flex", marginLeft: "auto" }}>
          <p>{props.startDate} - {props.endDate}</p>
        </div>
      </div>

      <div style={{ display: "flex", flexFlow: "wrap" }}>
        {props.languages.map(lang => {
          const circleStyle = {
            height: 10,
            width: 10,
            backgroundColor: langColors.hasOwnProperty(lang) ? langColors[lang].color : "#bbb",
            borderRadius: "50%",
            marginRight: 5,
            marginTop: 3 // Font has some padding top so add margin top to center circle with text
          }

          return (
            <div style={{ display: "flex", alignItems: "center", marginRight: 15 }}>
              <span style={circleStyle} />
              <p>{lang}</p>
            </div>
          )
        })}
      </div>

      { /* Job description */}
      <div style={{ border: "1px solid black", padding: "10px 30px 10px" }}>
        <ul style={{ listStyleType: "disc" }}>
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