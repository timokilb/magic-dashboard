import { ReactElement, useState } from 'react'

type ButtonProps = {
  children: ReactElement
  onClick: () => void
}

function Button(props: ButtonProps) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {props.children}
        <button
          onClick={props.onClick}></button>
      </div>

    </>
  )
}

export default Button 
