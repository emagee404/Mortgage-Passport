import React from 'react'
import Button from './Button.view.js'

let ButtonLogic = props => (
  <Button
    {...props}
    onClick={() => {
      if (typeof props.onClick === 'function') {
        props.onClick(props.id)
      }
    }}
  />
)

export default ButtonLogic
