import React from 'react';

export default function ProjectsArr() {
    var projects = [
        {
            "id": 1,
            "name": "FoodLauncher",
            "description": "Restaurant and food finder app"
        }, {
            "id": 2,
            "name": "PrintOnline",
            "description": "Online web2print solution for local print shop owners."
        }
    ];
    return (
        <div>
            <ul>
                { projects.map(project => {
                    return (
                        <li key={ project.id }>
                            <h2>{ project.name }</h2>
                            <p>{ project.description }</p>
                        </li>
                    )
                }) }
            </ul>
        </div>
    )

}