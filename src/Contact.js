import React from 'react';
import './App.css';
import { faEnvelope, faInfoCircle, faMap, faMapMarkedAlt, faMapMarkerAlt, faMapSigns, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
    return (
        <div className="page">
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
    );
}

export default Contact;
