import { BrowserRouter, Routes,Route } from "react-router-dom"
import { useState } from "react"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
const App = () => {
    const [users, setusers] = useState(
        [
            {
                username: "saro",
                password: "123"
            }
        ]
    )
    return(
    <>
        <BrowserRouter>

            <Routes>
                <Route path="/signup" element={<Signup users={users} setusers={setusers}></Signup>}></Route>
                <Route path="/" element={<Login users={users} setusers={setusers}></Login>}></Route>
                <Route path="/landing" element={<Landing></Landing>}></Route>

            </Routes>
        </BrowserRouter>


    </>)


} 
export default App