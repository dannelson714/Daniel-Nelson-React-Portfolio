import React from "react";

export default function Project(props) {
  return (
    <ul className="list-group">
        {props.project.map(item => (
            <li className="list-group-item" key={item.id}>
                <div className="container">
                    <div className="card">
                        <img
                            className="card-img-top"
                            src={props.img}
                            alt="Card cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Name: {item.name}</h5>
                            <a href={item.githubURL} className="card-text">Github Repository</a>
                            <a href={item.deployedURL} className="card-text">Deployed App</a>
                            <p className="card-text">ID: {props.id}</p>
                        </div>
                    </div>
                </div>
            </li>

        ))}
    
    </ul>
  );
}
