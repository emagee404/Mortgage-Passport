import React, { useState } from 'react'
import Button from './Button.view.js'

let ButtonLogic = props => {
  let [isSelected, setIsSelected] = useState(false)

  return (
    <Button
      {...props}
      isSelected={isSelected}
      onClick={() => {
        setIsSelected(!isSelected)

        if (typeof props.onClick === 'function') {
          props.onClick(props.id)
        }
      }}
    />
  )
}

export default ButtonLogic
