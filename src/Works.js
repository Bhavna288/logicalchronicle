import React from 'react';
import Project from './Project';
import printOnline from './printonline.jpg';

const Works = () => {
    var projects = [
        {
            "id": 1,
            "title": "FoodLauncher",
            "description": "Restaurant and food finder app"
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
            <div className="rotate-text">Works</div>
            <div className="rows pl-150" style={ { marginLeft: 0, marginRight: 0 } }>
                { projects.map((project, index) => {
                    return (
                        <div className="tds-lg-4 tds-md-6 tds-sm-12">
                            <Project { ...project } />
                        </div>
                    )
                }) }
            </div>
        </div>
    );
}

export default Works;
