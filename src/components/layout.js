import React from "react"

export default function Layout({ children }) {
  return (
    <div class="
      mainContent 
      mx-auto 
      max-w-2xl 
      pt-4 pb-24 
      px-4
      text-gray-600
    ">
      { children }
    </div>
  )
}