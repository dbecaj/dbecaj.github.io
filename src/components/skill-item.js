import React from "react"

export function SkillItem(props) {
  const level = parseInt(props.level)

  return (
    <div style={{ display: "flex", ...props.style }}>
      <p style={{ marginRight: 10 }}>{props.name}</p>

      { /* Generate and fill skill level circles */}
      {Array.from(Array(5)).map((v, i) => {
        const circleStyle = {
          height: 25,
          width: 25,
          backgroundColor: i < level ? "#dbf4a7" : "#bbb",
          borderRadius: "50%",
          border: "2px solid black",
          marginRight: 5
        }

        return (
          <span style={circleStyle} />
        )
      })}
    </div>
  )
}