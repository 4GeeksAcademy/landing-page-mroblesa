import React from "react";

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">DogVolton</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Servicios</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Galeria
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Instalaciones</a></li>
                                    <li><a className="dropdown-item" href="#">Nuestros alumnos</a></li>
                                    <li><a className="dropdown-item" href="#">Actividades</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-dark" type="submit">Buscar</button>
                        </form>
                </div>
            </nav>
        </>
    )
};