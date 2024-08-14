import { useState } from "react"
import Todoitem from "./Todoitem"

const Todolist=(props)=>{

    const activityArr=props.activityArr
    const setactivityArr=props.setactivityArr
    


    return(<div className="bg-[rgb(189,180,234)] p-5 my-5 flex-grow border rounded-md"  >
        <h1 className="font-medium text-2xl">Today's activity</h1>
        {activityArr.length===0?         <p>you haven't added anything yet</p> : ""
}
        
       
            {
                activityArr.map(function(item,index){
                    return <Todoitem id={item.id} activityArr={activityArr} setactivityArr={setactivityArr} item={item.activity} index={index}></Todoitem>
                })
            }
    </div>)
}

export default Todolist
