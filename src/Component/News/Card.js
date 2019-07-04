import React from "react";

const Card = ({ title , description }) => {
    return (
        <div className="card text-white bg-dark mb-3" style={{maxWidth: "90rem"}}>
            <div className="card-header">{title}</div>
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default Card;
