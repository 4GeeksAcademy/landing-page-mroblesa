import React from "react";

export const Cards = (image, title, description) => {
    return (
        <div className="card" style="width: 18rem;">
            <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Más info</a>
                </div>
        </div>
    )
}

