import React from 'react'
import { useState } from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [skill, setSkill] = useState("")
    const [location, setLocation] = useState("")
    const navigate = useNavigate();

    const startHiring = async () => {
        navigate(`/api/hire?skill=${skill}&location=${location}`)
    }
    return (
        <>
            <div className='homePage d-flex justify-content-center align-items-center'>
                <div className="content_section">
                    <h1 className='title'>Direct <span style={{ color: "#2CE2A2" }}> Hiring</span> App for Founders,
                        Team Leaders and Hiring Managers</h1>
                    <p className='description'> Hirect simplifies the
                        hiring process. Directly chatting with verified candidates matched by the AI algorithm ensures a simple, quick and effective hiring experience.</p>
                </div>
                <div className="selectWrapper">
                    <select className="selectBox" onChange={(e) => setSkill(e.target.value)}>

                        <option className=' text-center'>Skill Set</option>
                        <option value="Frontend">FrontEnd</option>
                        <option value="Backend">BackEnd</option>
                        <option value="Graphics">Graphics</option>
                    </select>
                    <select className="selectBox" onChange={(e) => setLocation(e.target.value)}>

                        <option className=' text-center' >Hiring Location</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Rawalpindi">Islamabad</option>
                    </select>
                    <div >
                        <button href="" className="hiring" onClick={startHiring}>Start Hiring</button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home