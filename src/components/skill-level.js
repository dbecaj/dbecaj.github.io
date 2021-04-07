import React from "react"

export function SkillLevel(props) {
  const level = parseInt(props.level)
  // Generate and fill skill level circles

  return (
    <div class={`whitespace-nowrap ${props.class}`}>
      {Array.from(Array(5)).map((v, i) => {
        const circleStyle = {
          display: "inline-block",
          height: 16,
          width: 16,
          backgroundColor: i < level ? "#60a5fa" : "#bbb",
          borderRadius: "50%",
          marginRight: 5
        }

        return (
          <span style={circleStyle} />
        )
      })}
    </div>
  )
}