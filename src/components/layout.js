import React from "react"

export default function Layout({ children }) {
  return (
    <div class="content mx-auto my-12 max-w-2xl px-4">
      { children }
    </div>
  )
}