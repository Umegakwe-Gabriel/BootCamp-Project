import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LayOut from '../Components/common/LayOut'
import HomeScreen from '../Pages/HomeScreen'
import SignIn from '../Register/SignIn'
import SignUp from '../Register/SignUp'
import PrivateRoute from './PrivateRoute'
import MainLayOut from '../Components/common/MainLayOut'
import WorkOutPlans from '../Pages/Main/WorkOutPlans'

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <LayOut/>,
    children: [
      {
        index: true,
        element: <PrivateRoute>
          <HomeScreen/>
        </PrivateRoute>
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
  {
    path: "/main",
    element: <MainLayOut/>,
    children: [
      {
        path: "workOut",
        element: <WorkOutPlans/>
      },
    ]
  }
])