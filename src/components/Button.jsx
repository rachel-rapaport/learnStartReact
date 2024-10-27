import React,{useState} from 'react'
import Image from './Image'

const Button = () => {
    const [showImage, setShowImage] = useState(false);
    function show(){
       setShowImage(true) 
    }
  return (
    <div>
      <button onClick={show}>click me</button>
      {showImage&&<Image/>}
    </div>
  )
}

export default Button
