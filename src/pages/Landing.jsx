import Header from "../components/Header"
import Card from "../components/Card"
import Todocontainer from "../components/Todocontainer"
import { useLocation } from "react-router-dom"
import { useState,useEffect } from "react"
const Landing = () => {
    const [currentTime,setCurrentTime]=useState("")
    const [currentMonth,setCurrentMonth]=useState("")
    useEffect(()=>{
        const updateTime=()=>{
            const now = new Date
            const time = now.toLocaleTimeString()
            const month=now.toLocaleString('defalut',{month:"long"})
            setCurrentTime(time)
            setCurrentMonth(month)    
            

        }
        updateTime()
        const intervalId= setInterval(updateTime,1000)
        return()=>clearInterval (intervalId)
    },[])
     
    const data =useLocation()
    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <Header name={data.state.user}></Header>
                <div className="flex justify-between gap-7 flex-wrap">
                    <Card bg={"#8272DA"} tittle={"32℃"} subtittle={"Chennai"} />
                    <Card bg={"#FD6663"} tittle={currentMonth} subtittle={currentTime} />
                    <Card bg={"#FCA201"} tittle={"Built Using"} subtittle={"React"} />
                    
                </div>
                
                <Todocontainer></Todocontainer> 
            </div>


        </div>
    )
}
export default Landing  
