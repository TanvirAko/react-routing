import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom'
import './App.css'
import Router from './router/routers';


function App() {

  return (
    <>
     <RouterProvider router={(Router)}/>
    </>
  )
}

export default App
