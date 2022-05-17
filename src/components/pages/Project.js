import React from "react";

const styles = {
    pic: {
        imageRendering: "optimizeQuality",
        width: "50 px",
        height: "50 px",
        objectFit: "cover",
    }
}

export default function Project(props) {
  return (
    <ul className="list-group">
        {props.projects.map(item => (
            <li className="list-group-item" key={item.id}>
                <div className="container">
                    <div className="card">
                        <img
                            style = {styles.pic}
                            className="card-img-top"
                            src={item.img}
                            width={25}
                            height={150}
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
