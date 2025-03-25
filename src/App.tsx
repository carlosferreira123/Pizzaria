import { RouterProvider } from "react-router";
import './global.css'
import { router } from "./routes";
import { Toaster, toast } from 'sonner'

export function App() {

  return (
   
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  
  )
}

