import React from 'react';
import './App.css';
import Project from './Project';

function Works() {
    var projects = [
        {
            "id": 1,
            "title": "FoodLauncher",
            "description": "Restaurant and food finder app"
        }, {
            "id": 2,
            "title": "PrintOnline",
            "description": "Online web2print solution for local print shop owners."
        }
    ];
    return (
        <div className="page">
            <div className="rows">
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
