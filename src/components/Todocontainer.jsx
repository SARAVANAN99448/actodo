import Todolist from "./Todolist"
import AddTODO from "./AddTODO"
import { useState } from "react"
const Todocontainer=()=>{
    const [activityArr,setactivityArr]=useState([
        

   ] )
    return(
    <div className="flex justify-between gap-10 items-center flex-wrap">
                
                <AddTODO activityArr={activityArr} setactivityArr={setactivityArr}></AddTODO>
                <Todolist activityArr={activityArr} setactivityArr={setactivityArr}></Todolist>
                </div>)

    
}
export default Todocontainer