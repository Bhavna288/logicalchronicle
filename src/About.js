import { faAndroid, faDev } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React } from 'react';
import myPic from './mypic.jpg';
import Service from './Services';

function About() {

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

    return (
        <div className="page2">
            <div className="rotate-text">About Me</div>
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
    );
}

export default About;
