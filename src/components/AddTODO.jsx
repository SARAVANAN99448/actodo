import { useState } from "react"

const AddTODO = (props) => {

    const activityArr=props.activityArr
    const setactivityArr=props.setactivityArr

    const [newevent,setnewevent]=useState("")

    const handlenewevent=(evt)=>{
           setnewevent(evt.target.value)
    }

    const handleadd=()=>{
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:newevent}])
        setnewevent("")
    }

    return (
        <div className="" id="activity">
            <h1 className="mb-3 font-medium text-2xl">Manage Activities</h1>
            <input id="input1" value={newevent} onChange={handlenewevent} type="text" placeholder="Next activity?" className="border border-black  p-1 bg-transparent" />
            <button id="btn1" onClick={handleadd} className="bg-black text-white p-1 border border-black">Add</button>
        </div>
    )
}
export default AddTODO