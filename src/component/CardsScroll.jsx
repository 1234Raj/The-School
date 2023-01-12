import React from "react";
import image1 from '../Img/Photo5.jpg';
import image2 from '../Img/Photo2.jpg';
import image3 from '../Img/Photo3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import image4 from '../Img/photo4.jpeg';
// import './OurTeam.css';
import './CardsScroll.css'

const OurTeam = ()=>{
    return(
<>
<div className="OurTeam">
                <div className="Head">
                    <div className="Title">
                        <h1>Our Team</h1>
                    </div>
                    <div className="Description">
                        <p>Meet the faculty legends that will make you legendary</p>
                    </div>
                </div>
                <div className="Cards" >
                 
                 <div className="Team1">
                        <img src={image1} alt=""/>
                        <h3>Arpan Garg</h3>
                        <h5>Instructor & Founding Member</h5>
                        <div className="icon">
                        <i className="fa  fa-facebook"></i>
                        <i className="fa  fa-twitter"></i>
                        <i className="fa  fa-google"></i>
                        <i className="fa  fa-linkedin"></i>  
                        </div>
                    </div>
                    
                    <div className="Team1">
                        <img src={image4} alt=""/>
                        <h3>Manisha Khattar</h3>
                        <h5>Instructor & Founding Member</h5>
                        <div className="icon">
                        <i className="fa  fa-facebook"></i>
                        <i className="fa  fa-twitter"></i>
                        <i className="fa  fa-google"></i>
                        <i className="fa  fa-linkedin"></i>  
                        </div>
                    </div>
                    
                    <div className="Team1">
                        <img src={image3} alt=""/>
                        <h3>Aakash Tyagi</h3>
                        <h5>Software Engineer & Instructor</h5>
                        <div className="icon">
                        <i className="fa  fa-facebook"></i>
                        <i className="fa  fa-twitter"></i>
                        <i className="fa  fa-google"></i>
                        <i className="fa  fa-linkedin"></i>  
                        </div>
                    </div>
                     
                    <div className="Team1">
                        <img src={image2} alt=""/>
                        <h3>Rajesh Nagar</h3>
                        <h5>Founder</h5>
                        <div className="icon">
                        <i className="fa  fa-facebook"></i>
                        <i className="fa  fa-twitter"></i>
                        <i className="fa  fa-google"></i>
                        <i className="fa  fa-linkedin"></i>  
                        </div>
                    </div>
                    
                </div>
            </div>
</>
)}
export default OurTeam ;