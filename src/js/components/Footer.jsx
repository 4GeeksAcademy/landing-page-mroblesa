

export const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-white" />
            <div className="bg-secondary py-5">
                <div className="container text-center">
                    <h4>Suscríbete a nuestro newsletter</h4>
                    <form className="row justify-content-center mt-3">
                        <div className="col-md-4">
                            <input type="email" className="form-control" placeholder="Correo electrónico"/>
                        </div>
                        <div className="col-md-2 mt-2 mt-md-0">
                            <button className="btn btn-primary w-100">Suscribirse</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}