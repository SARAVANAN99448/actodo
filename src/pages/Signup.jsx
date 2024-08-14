import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
const Signup=(props)=>{
    var navigate = useNavigate()
    const [uname, setuname] = useState("")
    const [upass, setupass] = useState("")
    const users=props.users
    const setusers=props.setusers
    const handleuname = (evt) => {
        setuname(evt.target.value)
    }
    const handleupass = (evt) => {
        setupass(evt.target.value)
    }
    const addusers=()=>{
        setusers([...users,{username:uname,password:upass}])
        navigate("/")
    }
    return(<>
    <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md ">
            <h1 className="text-3xl font-medium">Hey Hi </h1>
            <p> You can Signup here :)</p>
            <div className="flex flex-col gap-2 my-2">
                <input 
                type="text" 
                placeholder="user name" 
                className="border rounded-md p-1 bg-transparent  border-black w-52 " 
                onChange={handleuname}/>
                
                <input 
                type="text" 
                placeholder="password" 
                className="border rounded-md p-1 bg-transparent  border-black w-52 "
                onChange={handleupass} />
                <input 
                type="text" 
                placeholder="confirm password" 
                className="border rounded-md p-1 bg-transparent  border-black w-52 " />
                 <button onClick={addusers} className="p-1 bg-[#FCA201] w-24 border rounded-md">Signup</button>
                 <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                    </div>
            </div>
            
    </div>
    </>)
}
export default Signup