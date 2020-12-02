import { React, Component, useState } from 'react';
import ResumeItem from './ResumeItem';
import Skill from './Skill';

function Resume() {
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

    return (
        <div className="page">
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
        </div >
    );
}

export default Resume;
