import React from "react"
import Sider from "../static/Sider"
import { Outlet } from "react-router-dom"

const MainLayOut = ()=>{
    return (
        <div>
            <Sider/>
            <Outlet/>
        </div>
    )
}

export default MainLayOut