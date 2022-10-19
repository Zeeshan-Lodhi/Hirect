import Slider from "react-slick";
import React, { useRef, useState } from 'react'
import Navbar from '../Navbar'
import { Accordion, Button, Card } from 'react-bootstrap'

export const Application = () => {



    return (
        <>
            <Accordion className='mb-2 jobs container' style={{ padding: "40px" }} >
                <Card style={{
                    width: "35vw", boxShadow: "0px 1px 13px 1px #80808040",
                    border: "1px solid #007bff",
                }}>
                    <Card.Header style={{ display: "flex" }}>
                        <span style={{ color: "black", textDecoration: "none", flex: 1, cursor: "pointer", alignSelf: "center", fontSize: 18, }}>
                            <Accordion.Toggle variant="link" eventKey="0" style={{ width: "92%", outline: "none", border: "none" }}>UI/UX</Accordion.Toggle>
                        </span>
                        <div >
                            <Button variant="success" className="mx-2"> Apply</Button>
                        </div>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div className="row justify-content-between">
                                <div className="mx-2"><span class="badge badge-pill badge-success p-2">Part-Time</span></div>
                                <div className="mx-2">$10/hr</div>
                            </div>
                            <div>
                                <h5 className="text-center mt-3">Web Developer</h5>
                                <a href="">

                                    <h6 className="text-center ">VisionBird</h6>
                                </a>
                            </div>
                            <div className="text-center">
                                <span class="badge badge-pill badge-light p-2 mx-1">Reactjs</span>
                                <span class="badge badge-pill badge-light p-2 mx-1">NodeJs</span>
                                <span class="badge badge-pill badge-light p-2 mx-1">Mongodb</span>
                                <span class="badge badge-pill badge-light p-2 mx-1">Redux</span>
                            </div>
                            <p className="text-center mt-2">We are looking for an experience web develpoer to work on our new project</p>
                            <hr className="text-center" style={{ color: "black" }} />
                            <a href="">
                                <h5 className='text-center'>VIEW JOB</h5>
                            </a>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>


                <Card style={{ width: "35vw" }}>
                    <Card.Header style={{ display: "flex" }}>
                        <span style={{ color: "black", textDecoration: "none", flex: 1, cursor: "pointer", alignSelf: "center", fontSize: 18, }}>
                            <Accordion.Toggle variant="link" eventKey="0" style={{ width: "92%", outline: "none", border: "none" }}>UI/UX</Accordion.Toggle>
                        </span>
                        <div >
                            <Button variant="success" className="mx-2"> Apply</Button>
                        </div>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div className="d-flex justify-content-between user_details">
                                <h6>Email : </h6>
                                <h6>First Name</h6>
                                <h6>First Name</h6>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        </>
    )
}

export default Application
