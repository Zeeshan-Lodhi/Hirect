import React, { useEffect, useRef, useState } from 'react'
import '../JobSeeker/jobSeeker.css'
import { useNavigate } from 'react-router-dom'

import emailjs from 'emailjs-com'

const Recruiters = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [designation, setDesignation] = useState("")
    const [category, setCategory] = useState("")
    // const [id, setID] = useState("")
    // const [password, setPassword] = useState("")
    const [otp, setOtp] = useState("")
    const [userOtp, setUserOtp] = useState("")

    const formRef = useRef()

    const subMitForm = (e) => {
        e.preventDefault()
        // setPassword(Math.random().toString(36).slice(2));
        // setID(new Date().getTime().toString())


        emailjs.sendForm('service_vp8wkp9', 'template_exqgalq', formRef.current, '2FNwtA1ahticn1IVH')
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
    const submitOtp = () => {
        if (otp == userOtp) {
            navigate("/mainPage")
            window.location.reload(false);
        } else {
            alert("Enter valid otp")
            setUserOtp("")
        }
    }
    useEffect(() => {
        setOtp(Math.floor(1000 + Math.random() * 9000))
    }, [])

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
                                {

                                }
                                <input type="text" autoComplete="off" placeholder="Name" className="el-input__inner" value={otp} name="otp" style={{ display: "none" }} />

                                <input type="text" autoComplete="off" placeholder="Name" className="el-input__inner" value={name} onChange={(e) => setName(e.target.value)} name="name" />


                                <input type="text" autoComplete="off" placeholder="Enter mobile number" className="el-input__inner" onChange={(e) => setPhone(e.target.value)} required value={phone} />

                                <input type="email" autoComplete="off" placeholder="Official Email" className="el-input__inner" onChange={(e) => setEmail(e.target.value)} required value={email} name="user_email" />

                                <input type="text" autoComplete="off" placeholder="City Name" className="el-input__inner" onChange={(e) => setCity(e.target.value)} required value={city} />

                                <input type="text" autoComplete="off" placeholder="Designation" className="el-input__inner" onChange={(e) => setDesignation(e.target.value)} required value={designation} />

                                <select className="el-input__inner" style={{ height: "40px" }} required onChange={(e) => setCategory(e.target.value)}>
                                    <option value="">Category</option>
                                    <option value="Freelance">Freelance</option>
                                    <option value="Part time">Part time</option>
                                    <option value="Full time">Full time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Internship">Internship</option>
                                </select>

                                <div >
                                    <button className="submitForm" onClick={subMitForm} data-toggle="modal" data-target="#exampleModal">Submit</button></div>

                            </div>
                            {/* <button type="button" className="btn btn-primary" style={{ display: "none" }} >
                            Launch demo modal
                        </button> */}

                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Enter 4-digit code:</label>
                                                <input type="text" className="form-control" id="recipient-name" value={userOtp} onChange={(e) => setUserOtp(e.target.value)} />
                                            </div>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" onClick={submitOtp}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Recruiters