import { createBrowserRouter } from "react-router"
import { Dashboard } from "./pages/app/dashboard"
import { SingIn } from "../src/pages/auth/sing-in"
import { AppLayout } from "./pages/_layouts/app"
import { AuthLayout } from "./pages/_layouts/auth"

export const router = createBrowserRouter ([
   
   {
    path: '/',
    element: <AppLayout />,
    children: [
        {path: '/', element:<Dashboard/>}
    ]
   },
    
   {
    path: '/',
    element: <AuthLayout />,
    children: [
        {path: '/sign-in', element:<SingIn/>}
    ]
   }

   
   
  
])