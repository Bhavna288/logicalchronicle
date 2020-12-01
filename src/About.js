import React from 'react';
import './App.css';
import myPic from './mypic.jpg';

function About() {
    return (
        <div className="page">
            <div className="rotate-text">About Me</div>
            <div className="container">
                <img src={ myPic } className="myPic" />
                <div className="content">
                    <p className="headline">I'm Bhavna Tahelyani, a Full Stack Developer</p>
                    <p className="intro">
                        I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
                    </p>
                    <div className="details">
                        <table>
                            <tr>
                                <td>
                                    Name: <span className="ansDet">Bhavna Tahelyani</span>
                                </td>
                                <td>
                                    Email: <span className="ansDet">bhavnatahelyani288@gmail.com</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Age: <span className="ansDet">19</span>
                                </td>
                                <td>
                                    From: <span className="ansDet">Nadiad, Gujarat, India</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
