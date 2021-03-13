import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";

export default function InfoItem(props) {
  return (
    <div style={{ display: "flex" }}>
      <GatsbyImage image={props.image} alt={props.imgAlt} />
      <p style={{ margin: "0 5px 0 5px" }}>{props.text}</p>
    </div>
  )
}