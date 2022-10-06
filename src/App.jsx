import Header from "./Components/Header/Header"
import Home from "./Screens/HomePage/Home"
import Details from "./Screens/RenderHiring/Details"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobSeeker from "./Screens/JobSeeker/JobSeeker"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/job-seeker" element={<JobSeeker />} />
                    <Route path="/api/hire" element={<Details />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App