import React from "react"

export default function Layout({ children }) {
  return (
    <div class="
      mainContent 
      mx-auto 
      max-w-2xl 
      pt-8 pb-24 
      px-4
      text-gray-300
    ">
      { children }
    </div>
  )
}