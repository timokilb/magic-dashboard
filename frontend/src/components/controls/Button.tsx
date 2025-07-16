import { useState } from 'react'

type ButtonProps = {
    onClick: () => void
}

function Button(props: ButtonProps) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Click me to upload
        <button
        onClick={props.onClick}></button>
      </div>

    </>
  )
}

export default Button 
