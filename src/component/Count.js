import React, { useState } from 'react'

function Count() {
      const [value,setvalue]=useState(0)
      const remove=()=>{
      if(value === 0){
            alert("your value is 0")
      }
      else{
            setvalue(value-1)
      }
}
  return (
    <div style={{display:"flex",gap:20,margin:"50px"}}>
      <button onClick={remove}>-</button>
      <div>{value}</div>
      <button onClick={()=>{setvalue(value+1)}}>+</button>
    </div>
  )
}

export default Count