import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/HomePage/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Blogs from "../pages/Blogs/Blogs";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        }, 
        {
            path: '/allToys',
            element: <AllToys></AllToys>
        }, 
        {
            path: '/myToys',
            element: <MyToys></MyToys>
        }, 
        {
            path: '/addAToy',
            element: <AddAToy></AddAToy>
        }, 
        {
            path: '/login', 
            element: <Login></Login>
        }, 
        {
            path: '/signUp', 
            element: <SignUp></SignUp>
        },
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ]);


  export default router;