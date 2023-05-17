import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componets/App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Movie from './page/movie.jsx'
import Menu from './page/video.jsx'
import Television from './page/television.jsx'
import Profile from './page/profile.jsx'
import Favour from './page/favour.jsx'
import './index.css'

const router=createBrowserRouter([
  {
    path:"",
    element:<App/>
  },
  {
    path:"/movie",
    element:<Movie/>
  } ,
  {
    path:"/menu",
    element:<Menu/>
  }
  ,
  {
    path:"/television",
    element:<Television/>
  },
  {
    path:"/favour",
    element:<Favour/>
  }
  ,
  {
    path:"/Profile",
    element:<Profile/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
