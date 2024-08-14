import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
const Login = (props) => {
    const navigate = useNavigate()
    const [uname, setuname] = useState("")
    const [upass, setupass] = useState("")
    const [regUser, setregUser] = useState(true)
    const users=props.users
    const setusers=props.setusers
    const handleusers = () => {
        console.log(users)
        var userfound=false
        users.forEach(function (item) {
            if (item.username === uname && item.password === upass) {
                console.log(" Login successfull")
                userfound=true
                navigate("./landing", {state:{user:uname}})
            }
            
        })
        if(userfound==false){
            console.log("Login failed")
            setregUser(false)
        }
    }
    const handleuname = (evt) => {
        setuname(evt.target.value)
    }
    const handleupass = (evt) => {
        setupass(evt.target.value)
    }
    return (
        <>
            <div className="bg-black p-10">
                <div className="bg-[#EFEFEF] p-10 border rounded-md ">
                    <h1 className="text-3xl font-medium">Hey Hi </h1>
                    {regUser? <p>I help you manage your activities after you login</p> : <p className="text-red-500">please signup first</p>
                    
                    }
                    
                    <div className="flex flex-col gap-2 my-2">
                        <input
                            onChange={handleuname}
                            type="text"
                            placeholder="user name"
                            className="border rounded-md p-1 bg-transparent  border-black w-52 " />
                        <input
                            onChange={handleupass}
                            type="text"
                            placeholder="password"
                            className="border rounded-md p-1 bg-transparent  border-black w-52 " />
                        <button onClick={handleusers} className="p-1 bg-[#8272DA] w-24 border rounded-md">login</button>
                        <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>
                    </div>
                </div>

            </div>
        </>)

}
export default Login