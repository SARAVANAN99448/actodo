import Header from "../components/Header"
import Card from "../components/Card"
import Todocontainer from "../components/Todocontainer"
import { useLocation } from "react-router-dom"
const Landing = () => {
    const data =useLocation()
    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <Header name={data.state.user}></Header>
                <div className="flex justify-between gap-7 flex-wrap">
                    <Card bg={"#8272DA"} tittle={"23"} subtittle={"Chennai"} />
                    <Card bg={"#FD6663"} tittle={"December"} subtittle={"18:09:30"} />
                    <Card bg={"#FCA201"} tittle={"Built Using"} subtittle={"React"} />
                </div>
                
                <Todocontainer></Todocontainer> 
            </div>


        </div>
    )
}
export default Landing  