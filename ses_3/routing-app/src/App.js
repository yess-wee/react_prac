import logo from './logo.svg';
import './App.css';
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navigation from './Navigation'
import TeacherLayout from './routingFiles/TeacherLayout'
import Admin from './routingFiles/Admin'
import NavigationInformation from './NavigationInformation'
import Teacher from './components/Teacher';

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <div>Home</div>
//   },
//   {
//     path:"/home",
//     element: <div>HOME</div>
//   },
//   {
//     path:"/about",
//     element: <div>ABOUT</div>
//   }
// ])

function App() {
  return (
    <div className="App">
        {/* <RouterProvider router={router}/>    */}

        <BrowserRouter>
        
          <NavigationInformation/>
          <Routes>

            <Route element={<Navigation/>}>
            {/* <Route element={<NavigationInformation/>}/> */}

            <Route path='' element={<div>HOME</div>}/>
            <Route path='home' element={<div>HOME</div>}/>
            <Route path='about' element={<div>ABOUT</div>}/>

            <Route path='teacher/:teacherId' element={<Teacher/>}/>
            
            {/* <Route path='teacher' element={<TeacherLayout/>} >
              <Route index element={<div>Teacher's overview</div>}/>
              <Route path='subject' element={<div>Teacher's subjects</div>}/>
              <Route path='lecture' element={<div>Teacher's lectures</div>}/>
              <Route path='planner' element={<div>Teacher's Planner</div>}/>
              </Route> */}

            <Route path='admin' element={<Admin/>}>
              <Route index element={<div>Admin page</div>}/>
              <Route path='addstaff' element={<div>Admin staff page</div>}/>
              <Route path='deletestaff' element={<div>Deletion page</div>}/>

            </Route>
            <Route path='/*' element={<div>Page not found</div>}/>


            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
