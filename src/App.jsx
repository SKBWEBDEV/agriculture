import Abo from "./components/abo/Abo"
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home"
import { createBrowserRouter, RouterProvider } from "react-router";
import Project from "./components/project/Project";
import Helthfood from "./components/helthfood/Helthfood";
import Service from "./components/services/Service";
import Khobor from "./components/khobor/Khobor";



function App() {

  const router = createBrowserRouter([
    
  { path: "/",
    element: (
      <div>
        <Home/>
      </div>
    )
   },
   {
    path: "/abo", 
    element: (
      <div>
        <Abo/>
      </div>
    )
   },
   {
    path: "/contact",
    element: (
      <div>
        <Contact/>
      </div>
    )
   },{
    path: "/project", 
    element: (
      <div>
        <Project/>
      </div>
    )
   },{
    path: "/helthfood",
    element: (
      <div>
        <Helthfood/>
      </div>
    )
   },
   {
    path: "/service",
    element: (
      <div>
        <Service/>
      </div>
    )
   },
   {
    path: "/news",
    element: (
      <div>
        <Khobor/>
      </div>
    )
   }
]);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
