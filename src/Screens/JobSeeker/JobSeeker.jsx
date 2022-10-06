import React, { useRef, useState } from 'react'
import './jobSeeker.css'
import emailjs from 'emailjs-com'

const JobSeeker = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [designation, setDesignation] = useState("")
    const [category, setCategory] = useState("")
    const [id, setID] = useState("")
    const [password, setPassword] = useState("")
    const formRef = useRef()

    const subMitForm = (e) => {
        e.preventDefault()
        setPassword(Math.random().toString(36).slice(2));
        setID(new Date().getTime().toString())

        emailjs.sendForm('service_vp8wkp9', 'template_ex7iigi', formRef.current, '2FNwtA1ahticn1IVH')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });


        setName("")
        setCategory("")
        setDesignation("")
        setCity("")
        setEmail("")
        setPhone("")
    }
    return (
        <>
            <div className="row mt-5 jobSeeker">
                <div className="right col container">
                    <h1>Want to Hire Instantly?</h1>
                    <p>Hirect is a job app that enables Founders/CXOs/Hiring Managers/Business Owners to chat directly with relevant, AI-filtered candidates, without consultants, and with 100% data privacy.</p>
                </div>

                <div className="left col">
                    <div className="container formCard">
                        <h4 className='text-center font-weight-bold'>Let us Simplify the Hiring Process</h4>
                        <p className='mx-5 text-center'>Register to find your Next Hire. Get Started Soon.</p>
                        <form className="container" ref={formRef}>

                            <div className='d-flex flex-column mt-4 container' style={{ gap: "15px" }}>

                                <input type="text" autoComplete="off" placeholder="Name" className="el-input__inner" value={name} onChange={(e) => setName(e.target.value)} name="name" />

                                <input type="text" autoComplete="off" placeholder="Enter mobile number" className="el-input__inner" onChange={(e) => setPhone(e.target.value)} value={phone} />

                                <input type="email" autoComplete="off" placeholder="Official Email" className="el-input__inner" onChange={(e) => setEmail(e.target.value)} value={email} name="user_email" />

                                <input type="text" autoComplete="off" placeholder="City Name" className="el-input__inner" onChange={(e) => setCity(e.target.value)} value={city} />

                                <input type="text" autoComplete="off" placeholder="Designation" className="el-input__inner" onChange={(e) => setDesignation(e.target.value)} value={designation} />

                                <select className="el-input__inner" style={{ height: "40px" }} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="">Category</option>
                                    <option value="Freelance">Freelance</option>
                                    <option value="Part time">Part time</option>
                                    <option value="Full time">Full time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Internship">Internship</option>
                                </select>

                                <label className='ml-3  mb-0'>Upload CV/Resume:</label>
                                <input type="file" autoComplete="off" placeholder="Name" className='ml-2' />
                                <div > <button className="submitForm" onClick={subMitForm}>Submit</button></div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobSeeker