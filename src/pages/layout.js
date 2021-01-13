import React from 'react'
import '@vetixy/circular-std'
import SEO from '../components/seo'

export default function Layout({ children }) {
  return (
    <div>
      <SEO />
      {children}
    </div>
  )
}
