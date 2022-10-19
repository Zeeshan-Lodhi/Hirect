import Header from "./Components/Header/Header"
import Home from "./Screens/HomePage/Home"
import Details from "./Screens/RenderHiring/Details"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobSeeker from "./Screens/JobSeeker/JobSeeker"
import Recruiters from "./Screens/Recruiters/Recruiters"
import { useState } from "react"
import Navbar from './Screens/JobSeeker/DashBoard/Navbar'
import Application from "./Screens/JobSeeker/DashBoard/Applications/Application"
const App = () => {
    return (
        <>

            <BrowserRouter>
                {/* <Header /> */}

                <Navbar />
                <Routes>
                    {/* <Route path="/" element={<Home />} exact />
                    <Route path="/job-seeker" element={<JobSeeker />} />
                    <Route path="/recruiters" element={<Recruiters />} />
                <Route path="/api/hire" element={<Details />} /> */}
                    <Route path="/application" element={<Application />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App