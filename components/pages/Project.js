import React from "react";

export default function Project(props) {
  return (
    <ul className="list-group">
        {props.projects.map(item => (
            <li className="list-group-item" key={item.id}>
                <div className="container">
                    <div className="card">
                        <img
                            className="card-img-top"
                            src={item.img}
                            alt="Card cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Name: {item.name}</h5>
                            <a href={item.githubURL} className="card-text">Github Repository</a>
                            <a href={item.deployedURL} className="card-text">Deployed App</a>
                        </div>
                    </div>
                </div>
            </li>

        ))}
    
    </ul>
  );
}
