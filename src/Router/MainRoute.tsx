import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LayOut from '../Components/common/LayOut'
import HomeScreen from '../Pages/HomeScreen'

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <LayOut/>,
    children: [
      {
        index: true,
        element: <HomeScreen/>
      }
    ]
  }
])