import React from "react";
import dogvolton from "/workspaces/landing-page-mroblesa/src/img/dogvolton.jpeg"

export const Jumbotron = () => {
    return (
        <div className="p-5 bg-light rounded-3 m-4 d-flex justify-content-center">
            <div className="container-fluid py-4 justify-content-center">
                <h1 className="display-5 fw-bold">¡Bienvenidos a DogVolton!</h1>
                <p className="col-md-9 fs-4">Somos una guarderia y hotel familiar, donde tu peludo podrá disfrutar dias llenos de diversión, felicidad y amor🐾💚</p>
                <button className="btn btn-primary btn-lg" type="button">¡Conócenos!</button>
            </div>
            <div className="col-md-4">
                <img 
                    src={dogvolton}
                    alt="Imagen del jumbotron" 
                    className="img-fluid rounded-3 shadow-lg"
                />
            </div>
        </div>

    )
}