import React from "react";
import image from '../Img/photo4.jpeg';
import image1 from '../Img/Photo3.jpg';
import image2 from '../Img/Photo5.jpg';
import './OurTeam.css'

const Content = ()=>{
    return(
<>
<div className="Content">
                <div className="Head">
                    <div className="Title">
                        <h1>Our Instructors</h1>
                    </div>
                     
                </div>
                <div className="Contain">
                    <div className="Team1">
                        <div className="icon">
                        <img src={image} alt=""/>
                         <div>
                            <h3>Manisha Khattar</h3>
                            <h5>Instructor & Founding Member</h5>
                         </div>
                        </div>
                        <div className="Writer">
                        <p>She holds a Master’s from IIIT Delhi and has more than four years of teaching experience in advanced level C++, Java and Android courses. Her data analytics research work has been published in prestigious conferences.</p>
                        </div>
                    </div>
                    <div className="Team1">
                        <div className="icon">
                        <img src={image1} alt=""/>
                         <div>
                            <h3>Aakash Tyagi</h3>
                            <h5>Software Engineer & Instructor</h5>
                         </div>
                        </div>
                        <div className="Writer">
                        <p>He is an expert in JavaScript & React (Front-end) and has worked on open-source projects like Firebug and Zulip. He has also served as a GCI (Google Code-In) Mentor with Zulip. In his previous role as a Software Engineer .</p>
                        </div>
                    </div>
                    <div className="Team1">
                        <div className="icon">
                        <img src={image2} alt=""/>
                         <div>
                            <h3>Arpan Garg</h3>
                            <h5>Instructor & Founding Membe</h5>
                         </div>
                        </div>
                        <div className="Writer">
                        <p>He holds a Bachelor’s degree in Electronics & Communications and is well versed with Angular, React.JS and Python. He has been the organiser of Google Developers Group and has previously worked with companies like Spice Labs, .</p>
                        </div>
                    </div>
                     
                </div>
            </div>
</>
)}
export default Content ;