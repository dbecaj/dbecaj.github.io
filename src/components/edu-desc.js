import React from "react"

export function EduDesc(props) {
  return (
    <div style={{ ...props.style }}>
      { /* General education information */ }
      <div style={{ display: "flex" }}>
        <p>{props.institutionName}</p>
        <div style={{ display: "flex", marginLeft: "auto" }}>
          <p>{props.startDate} - {props.endDate}</p>
        </div>
      </div>
      <p>{props.programName}</p>

      { /* Competencies acquired */ }
      <div style={{ border: "1px solid black", padding: "10px 30px 10px" }}>
        <ul style={{ listStyleType: "disc" }}>
          {props.competencies.map(value => {
            return (
              <li>{value}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}