import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobNavbar from './pages/JobNavPage/Jobnavbar'
import Job from './pages/JobPage/Job'


function App() {


  return (
    // <div className='App'>
    //   <Navbar/>
    //   <Home/>
    // </div>
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" >
          <Route index element={<> <Navbar/> <Home /> </> } />
          <Route path='/jobs' element={<> <JobNavbar/> <Job /> </> }  />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
