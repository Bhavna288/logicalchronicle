import { React, useState, useEffect } from 'react';
import { faAndroid, faDev } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactJsTyping from 'reactjs-typing-effect';
import myPic from './mypic.jpg';
import Service from './Services';
import ResumeItem from './ResumeItem';
import Skill from './Skill';
import Nav from './Nav';
import Project from './Project';
import printOnline from './printonline.jpg';
import foodlauncher from './foodlauncher.png';
import { faEnvelope, faInfoCircle, faMapMarkedAlt, faPaperPlane, faPhone, faDownload } from '@fortawesome/free-solid-svg-icons';

function Home() {
    const listOfString = [" Developer ", " Freelancer ", " Designer "];

    const servicesArr = [
        {
            title: "Web Development",
            description: "Fully responsive websites.",
            icon: faDev
        }, {
            title: "Android Development",
            description: "Android development in Java and Kotlin.",
            icon: faAndroid
        }, {
            title: "Android Development",
            description: "Android development in Java and Kotlin.",
            icon: faAndroid
        }
    ];

    const [pageTitle, setPageTitle] = useState("About Me");

    let aboutdiv = document.getElementById("about");
    function setTitle() {
        // let abScr = aboutdiv.getBoundingClientRect();
        // if (abScr['top'] > 200)
        //     setPageTitle("Resume");
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", setTitle);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", setTitle);
        };
    }, pageTitle);

    var expArr = [
        {
            title: "Full Stack and Android developer - Freelancing",
            description: "Developing the accounts management app for DIVYA TRADERS using Kotlin in Android. Developing the accounts management website using REST API with Node.js, React and MongoDB. Deployed the API on Azure.",
            duration: "October 2020 - Present"
        }, {
            title: "Web Developer — CDEC (CHARUSAT Decryptonite)",
            description: "Lead front-end and back-end developer for the development of the official website for the event CDEC. Monitored the event full time.",
            duration: "June 2020 - September 2020"
        }
    ];

    var eduArr = [
        {
            title: "Chandubhai S. Patel Institute of Technology, Changa, Anand",
            description: "9.63 CGPA",
            duration: "Computer Engineering / JULY 2018 - APRIL 2022"
        }, {
            title: "Vision School of Science, Nadiad",
            description: "88%",
            duration: "Higher Secondary / June 2016 - APRIL 2018"
        }
    ];

    var skillsArr = [
        {
            name: "HTML/CSS",
            percent: 95
        }, {
            name: "PHP/MySQL",
            percent: 80
        }, {
            name: "ReactJS",
            percent: 85
        }, {
            name: "Node.js/Express",
            percent: 85
        }, {
            name: "Android development",
            percent: 90
        }
    ]

    var projects = [
        {
            "id": 1,
            "title": "FoodLauncher",
            "description": "Restaurant and food finder app, food finder application.",
            "img": foodlauncher
        }, {
            "id": 2,
            "title": "PrintOnline",
            "description": "Online web2print solution for local print shop owners.",
            "img": printOnline
        }, {
            "id": 3,
            "title": "PrintOnline",
            "description": "Online web2print solution for local print shop owners.",
            "img": printOnline
        }
    ];

    return (
        <div className="page">
            <Nav />
            <div className="rotate-text">{ pageTitle }</div>
            <div className="homepage" id="home">
                <div className="containerLocal main">
                    <p className="name">Bhavna Tahelyani</p>
                    <h1 className="changeTxt">I'm a
                        <ReactJsTyping StringList={ listOfString } speed={ 20 } />
                    </h1>
                </div>
            </div>
            <div className="aboutpage" id="about">
                <div className="containerLocal">
                    <div className="myPicDiv">
                        <img src={ myPic } className="myPic" alt="Bhavna Tahelyani" />
                    </div>
                    <div className="content">
                        <p className="headline">I'm Bhavna Tahelyani, a Full Stack Developer</p>
                        <p className="intro">
                            I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
                    </p>
                        <div className="details">
                            <div className="rowContainer">
                                <div className="rows">
                                    <div className="tds">
                                        Name: <span className="ansDet">Bhavna Tahelyani</span>
                                    </div>
                                    <div className="tds">
                                        Email: <span className="ansDet">bhavnatahelyani288@gmail.com</span>
                                    </div>
                                </div>
                                <div className="rows">
                                    <div className="tds">
                                        Age: <span className="ansDet">19</span>
                                    </div>
                                    <div className="tds">
                                        From: <span className="ansDet">Nadiad, Gujarat, India</span>
                                    </div>
                                </div>
                                <div className="rows">
                                    <div className="tds">
                                        <button className="cvBtn"><FontAwesomeIcon icon={ faDownload } />&ensp; Download My CV</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services">
                        <p className="headline">Services</p>
                        <div className="rows">
                            {
                                servicesArr.map((service, index) =>
                                    <Service key={ index } { ...servicesArr[index] } />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="resumepage">
                <div className="rotate-text">Resume</div>
                <div className="rows pl-150">
                    <div className="tds-md-12">
                        <div className="res-title">Experience</div>
                        <div className="l-contained">
                            <ul className="timeline-list">
                                { expArr.map((experience, index) => {
                                    return (
                                        <li key={ index }>
                                            <ResumeItem { ...experience } />
                                        </li>
                                    )
                                }) }
                            </ul>
                        </div>
                    </div>
                    <div className="tds-md-12">
                        <div className="res-title">Education</div>
                        <div className="l-contained">
                            <ul className="timeline-list">
                                { eduArr.map((education, index) => {
                                    return (
                                        <li key={ index }>
                                            <ResumeItem { ...education } />
                                        </li>
                                    )
                                }) }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <p className="headline">My Skills</p>
                    <div className="rows">
                        { skillsArr.map((skill, index) => {
                            return (
                                <div className="tds-md-12" key={ index }>
                                    <Skill { ...skill } />
                                </div>
                            )
                        }) }
                    </div>
                </div>
            </div>
            <div className="workspage">
                <div className="rotate-text">Works</div>
                <div className="rows pl-150" style={ { marginLeft: 0, marginRight: 0 } }>
                    { projects.map((project, index) => {
                        return (
                            <div className="tds-lg-4 tds-md-6 tds-sm-12" key={ index }>
                                <Project { ...project } />
                            </div>
                        )
                    }) }
                </div>
            </div>
            <div className="contactpage">
                <div className="rotate-text">Contact Me</div>
                <div className="pl-150">
                    <div className="rows">
                        <div className="tds" style={ { textAlign: "left" } }>
                            <div className="res-title">Message Me</div>
                            <form className="contact-form">
                                <div className="inp-con">
                                    <input type="text" name="name" required placeholder="Name" />
                                </div>
                                <div className="inp-con">
                                    <input type="email" name="email" required placeholder="Email" />
                                </div>
                                <div className="inp-con">
                                    <input type="text" name="subject" required placeholder="Subject" />
                                </div>
                                <div className="inp-con">
                                    <textarea name="name" required placeholder="Message" />
                                </div>
                                <div className="inp-con">
                                    <button className="cvBtn"><FontAwesomeIcon icon={ faPaperPlane } />&ensp; Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div className="tds">
                            <div className="res-title">Contact Info</div>
                            <p className="con-p">Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                            <ul className="contact-list">
                                <li>
                                    <div className="cl-icon">
                                        <FontAwesomeIcon icon={ faInfoCircle } fixedWidth />
                                    </div>
                                    <div className="cl-details">
                                        <span className="cl-title">
                                            Name
                                    </span><br />
                                    Bhavna Tahelyani
                                </div>
                                </li>
                                <li>
                                    <div className="cl-icon">
                                        <FontAwesomeIcon icon={ faMapMarkedAlt } fixedWidth />
                                    </div>
                                    <div className="cl-details">
                                        <span className="cl-title">
                                            Location
                                    </span><br />
                                    B/16, Karmvir Sundarvan Society, Nadiad - 387001, Gujarat, India.
                                </div>
                                </li>
                                <li>
                                    <div className="cl-icon">
                                        <FontAwesomeIcon icon={ faPhone } fixedWidth />
                                    </div>
                                    <div className="cl-details">
                                        <span className="cl-title">
                                            Phone
                                    </span><br />
                                    +91 9016108187
                                </div>
                                </li>
                                <li>
                                    <div className="cl-icon">
                                        <FontAwesomeIcon icon={ faEnvelope } fixedWidth />
                                    </div>
                                    <div className="cl-details">
                                        <span className="cl-title">
                                            Email
                                    </span><br />
                                    bhavnatahelyani288@gmail.com
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Home;