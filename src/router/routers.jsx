import { createBrowserRouter } from "react-router-dom";
import Latest from './../pages/Latest';
import Bangladesh from './../pages/Bangladesh';
import Economy from "../pages/Economy";
import Entertainment from './../pages/Entertainment';
import Internationa from './../pages/Internationa';
import Jobs from './../pages/Jobs';
import National from './../pages/National';
import Politics from './../pages/Politics';
import Sports from './../pages/Sports';
import Error from "../pages/404";
import Sengale from './../pages/sengale';

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Latest/>
     },
    {
        path:"/:slug",
        element:<Sengale/>
     },
     {
        path : "/bangladesh",
        element : <Bangladesh/>
     },
     {
        path: "/economy",
        element : <Economy/>
     },
     {
        path:"/entertainment",
        element: <Entertainment/>
     },
     {
        path:"/international",
        element : <Internationa/>
     },
     {
        path:"/jobss",
        element: <Jobs/>
     },
     {
        path:"/national",
        element: <National/>
     },
     {
        path:"/politics",
        element: <Politics/>
     },
     {
        path:"/sports",
        element : <Sports/>
     },
     {
      path:"*",
      element: <Error/>
     }
])
export default Router