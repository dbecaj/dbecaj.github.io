import React from "react"

export function JobDesc(props) {
  return (
    <div style={{ display: "flex", ...props.style }}>
      { /* Job durration column */ }
      <div style={{ display: "flex", flexDirection: "column", marginRight: "10px" }}>
        <p>{props.jobStart}</p>
        <p style={{ marginTop: "auto" }}>{props.jobEnd}</p>
      </div>

      { /* Job description column */ }
      <div>
        <p>{props.companyName} - {props.jobPosition}</p>
        <div style={{ display: "flex" }}>
          {props.languages.map(lang => {
            return <p style={{ marginRight: "5px" }}>{lang}</p>
          })}
        </div>
        <p style={{ border: "1px solid black" }}>{props.description}</p> 
      </div>
    </div>
  )
}