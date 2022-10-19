import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import './details.css'
import logo from './download.png'
import logo2 from './logo2.png'
import logo3 from './logo3.png'
import logo4 from './logo4.png'


const Details = () => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)

    const [experience, setExperience] = useState("")
    const [salary, setSalary] = useState("")
    const [hiringData, setHiringData] = useState([])
    const fetchHiringData = async () => {
        const skill = (params.get("skill"));
        const location = (params.get("location"));
        console.log(salary);
        const { data } = await axios.get(`http://localhost:8000/api/hire?skill=${skill}&location=${location}&experience=${experience}&salary=${salary}`)

        setHiringData(data)
    }
    useEffect(() => {
        // eslint-disable-next-line
        fetchHiringData()
    }, [experience, salary])

    return (
        <>
            <div >
                <h4 className='text-center mt-4'>Hire the best Professionals across India</h4>
                <div className='container d-flex mt-4'>
                    <div className="co right_side">
                        <div className="experience container">
                            <h6 className='mt-4 ml-3'>Experience</h6>
                            <div className="selectWrapper mt-4">
                                <select className="selectBox text-center" onChange={(e) => setExperience(e.target.value)} value={experience}>

                                    <option value="">Select Experience</option>
                                    <option value="fresher">fresher</option>
                                    <option value="1yr">1yr</option>
                                    <option value="2yr">2yr</option>
                                    <option value="3yr">3yr</option>
                                </select>
                            </div>

                            <hr className='mt-4' />
                        </div>
                        <div className="experience container">
                            <h6 className='mt-4 ml-3'>Salary</h6>
                            <div className="container">
                                <div onChange={(e) => setSalary(e.target.value)}>
                                    <div className="form-check" >
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="30k" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            30k
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="50k" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            50k
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="70k" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                                            70k
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-3' />
                        </div>

                        <div className="experience container">
                            <h6 className='mt-3 ml-3'>Most Searched Job Role</h6>
                            <div className="container">
                                <div>Front End</div>
                                <div>Backend End</div>
                                <div>Graphics Design</div>
                            </div>
                        </div>



                    </div>


                    <div className='col ml-4'>
                        {

                            hiringData <= 0 ? <><p className='mt-4 text-center'>No data to display</p></>
                                :
                                hiringData?.map((elm) => {
                                    return (
                                        <>

                                            <div className="card-body row d-flex mt-3 flex-column" key={elm.id}>
                                                <div className="row container">
                                                    <div ><img src={logo} className="NameLogo" alt="" /></div>
                                                    <div className="mt-4 ml-3 ">{elm.education} | Months | {elm.salary} | {elm.experience}</div>
                                                </div>

                                                <div className="row d-flex justify-content-between container mt-3">
                                                    <div>
                                                        <h6> <img src={logo2} alt="" /> Fractal | Other Consultant</h6>
                                                        <p className='ml-3'>Aug 2021c - March 2022</p>
                                                    </div>

                                                    <div>
                                                        <h6> <img src={logo3} alt="" /> Fractal | Other Consultant</h6>
                                                        <p className='ml-3'>Aug 2021c - March 2022</p>
                                                    </div>
                                                    <button className='viewProfile'>View Profile</button>
                                                </div>

                                                <div className="row container mt-2">
                                                    <img src={logo4} alt="" className='mr-2' />
                                                    <h6>{elm.location}</h6>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })

                        }

                    </div>
                </div >
            </div >
        </>
    )
}

export default Details