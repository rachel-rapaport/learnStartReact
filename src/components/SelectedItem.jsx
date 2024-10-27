import React, { useState } from 'react'

const SelectedItem = (props) => {
  return (
    <div>
      <h1>selected: {props.item}</h1>
    </div>
  )
}

export default SelectedItem
