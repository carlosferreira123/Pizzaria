import { createBrowserRouter } from "react-router"
import { Dashboard } from "./pages/app/dashboard"
import { SingIn } from "./pages/auth/sing-in"
import { AppLayout } from "./pages/_layouts/app"

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
    element: <AppLayout />,
    children: [
        {path: '/sign-in', element:<SingIn/>}
    ]
   }
   
  
])