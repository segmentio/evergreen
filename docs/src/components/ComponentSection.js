import React from 'react'

const ComponentSection = ({ ...props }) => (
  <section
    className="ComponentSection"
    style={{ marginTop: 40, marginBottom: 40 }}
    {...props}
  />
)

export default ComponentSection
