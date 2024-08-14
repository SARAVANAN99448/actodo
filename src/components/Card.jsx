import { useState } from "react"
import { useEffect } from "react"
const Card=(props)=>{
  
    
    return (<div className=" p-10 my-5 text-center flex-grow border rounded-md"  style={{backgroundColor:props.bg}}>
        <h1 className="font-medium text-xl">{props.tittle}</h1>
        <p>{props.subtittle}</p>
    </div>)
}
export default Card
