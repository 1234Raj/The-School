import React from "react";
import './Portfolio.css';
import image1 from '../Img/desktop.svg';
import image3 from '../Img/graduated.svg';
import image4 from '../Img/practice.svg';
import image2 from '../Img/pause.svg';

const Portfolio = () => {
    return (
        <>
            <div className="Portfolio">
                <div className="Head">
                     
                    <div className="Description">
                        <p>This is where you embark on an amazing journey!</p>
                    </div>
                </div>
                <div className="Contain">
                    <div className="Team1">
                        <div className="icon">
                            <img src={image1} alt="" />
                            <div>
                                <h3>Freedom to learn</h3>
                                <h5>Watch classes any time at your convenience</h5>
                            </div>
                        </div>

                        <div className="icon">
                            <img src={image2} alt="" />
                            <div>
                                <h3>Cheat days</h3>
                                <h5>Catch up on the course when life is calling you elsewhere
</h5>
                            </div>
                        </div>
                    </div>
                    <div className="Team1">
                        <div className="icon">
                            <img src={image3} alt="" />
                            <div>
                                <h3>Structured Curriculum</h3>
                                <h5>A structured curriculum that makes learning easy</h5>
                            </div>
                        </div>
                        <div className="icon">
                            <img src={image4} alt="" />
                            <div>
                                <h3>Practice code</h3>
                                <h5>Practice code problems of varying difficulty</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Portfolio;