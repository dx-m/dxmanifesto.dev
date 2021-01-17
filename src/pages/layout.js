/** @jsx jsx */
import React from 'react'
import { jsx, Box } from 'theme-ui'
import '@vetixy/circular-std'
import SEO from '../components/seo'

export default function Layout({ children }) {
  return (
    <Box sx={{ px: ['4px', null, null] }}>
      <SEO />
      {children}
    </Box>
  )
}
