

export const Footer = () => {
    return (
        <>
            <footer className="bg-primary text-white" />
            <div className="bg-primary text-white py-3">
                <div className="container text-center">
                    <h4>¿Quieres más información? A continuación deja tu numero de telefono y nos pondremos en contacto contigo</h4>
                    <form className="row justify-content-center mt-3">
                        <div className="col-md-2">
                            <input type="number" className="form-control" placeholder="Número de telefono"/>
                        </div>
                        <div className="col-md-2 mt-1 mt-md-0">
                            <button className="btn btn-outline-dark w-70">Contactarme</button>
                        </div>
                        <span>Dogvolton 2025 ©</span>
                    </form>
                </div>
            </div>
        </>
    )
}