import React from "react"

export default function Layout({ children }) {
  return (
    <div class="mx-auto my-12 max-w-xl px-2">
      { children }
    </div>
  )
}