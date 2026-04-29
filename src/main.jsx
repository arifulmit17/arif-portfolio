import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout.jsx'
import GardenDetails from './Projects/GardenDetails.jsx'
import TutorDetails from './Projects/TutorDetails.jsx'
import SubscriptionDetails from './Projects/SubscriptionDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index:true,
        Component: Home
      },
      {
        path:'garden',
        Component: GardenDetails
      },
      {
        path:'tutor',
        Component: TutorDetails
      },
      {
        path:'subscribe',
        Component: SubscriptionDetails
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
