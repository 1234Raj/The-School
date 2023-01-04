import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Front.css'
import img from '../Img/image4.jpeg';
import img1 from '../Img/Design.png';
import img2 from '../Img/png.png';

const Front = ()=>{
    return(
<Carousel variant="dark" >
      <Carousel.Item interval={11000} variant="dark" >
      <div className="first">
        <div className="course">
          <h5>FOR PROFESSIONALS</h5>
           <h1>Data Structures & Algorithms in Python</h1>
           <p className="p1">Top product companies that hire software developers require DSA as an essential skill set. Widely used in Data Science & Machine Learning</p>
           <div className="button">
            <button className="btn1">Start Your Trial</button>
            <button className="btn2">Enroll Now </button>
            </div>
            <div className="Rating">
               <div>
                <h2>4.8 <i className="fa fa-star"></i></h2>
                <p>30K+ Learners enrolled</p>
               </div>
               <div>
                <h2>60+</h2>
                <p>Hours of lectures</p>
               </div>
               <div>
                <h2>530+</h2>
                <p>Problems</p>
               </div>
            </div>
           
        </div>
        <div className="image">
        <img
          className="img"
          src={img}
          alt="First slide"
        />
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item interval={11000} variant="light">
      <div className="Second-card">
      <div className="second">
        <div className="course">
          <h5>FOR PROFESSIONALS</h5>
           <h1>Start learning Java Foundation for free</h1>
            <p className="p">Duration: 4-6 months</p>
           <p className="p">Pre-requisites: Knowledge of basic mathematics</p>
           <p className="p1">Pre-requisites: Previous Coding experience is not required</p>
           <div className="button">
            <button className="btn1">Start Your Trial</button>
            <button className="btn2">Enroll Now </button>
            </div>
            <div className="Rating">
               <div>
                <h2>4.8 <i className="fa fa-star"></i></h2>
                <p>30K+ Learners enrolled</p>
               </div>
               <div>
                <h2>100+</h2>
                <p>videos</p>
               </div>
               <div>
                <h2>50+</h2>
                <p>Questions with Solutions</p>
               </div>
            </div>
           
        </div>
        <div className="image">
        <img
          className="img"
          src={img1}
          alt="First slide"
        />
        </div>
      </div>
      </div>
      </Carousel.Item>
      <Carousel.Item interval={11500} variant="dark">
      <div className="first">
        <div className="course">
          <h5>FOR PROFESSIONALS</h5>
           <h1>MERN Full stack web development</h1>
           <p className="p1">Learn to build entire web applications from start to finish on one of the most versatile tech stacks</p>
           <div className="button">
            <button className="btn1">Start Your Trial</button>
            <button className="btn2">Enroll Now </button>
            </div>
            <div className="Rating">
               <div>
                <h2>4.8 <i className="fa fa-star"></i></h2>
                <p>30K+ Learners enrolled</p>
               </div>
               <div>
                <h2>170+</h2>
                <p>Hours of lectures</p>
               </div>
               <div>
                <h2>15</h2>
                <p>Guided projects</p>
               </div>
            </div>
           
        </div>
        <div className="image">
        <img
          className="img"
          src={img2}
          alt="First slide"
        />
        </div>
      </div>
      </Carousel.Item>
    </Carousel>
)}
export default Front ;