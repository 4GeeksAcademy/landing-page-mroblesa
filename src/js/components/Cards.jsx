import React from "react";

export const Cards = ({image, title, description}) => {
    return (
        <div className="card justify-center m-4 border border-2 border-primary card-size">
            <img src={image} className="card-img-top photo-style" alt="imagen"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Más información</a>
                </div>
        </div>
    )
}

