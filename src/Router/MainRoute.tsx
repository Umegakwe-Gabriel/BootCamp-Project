import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LayOut from '../Components/common/LayOut'
import HomeScreen from '../Pages/HomeScreen'
import SignIn from '../Register/SignIn'
import SignUp from '../Register/SignUp'

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
  },
  {
    path: "/sign-in",
    element: <SignIn/>
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  },
])