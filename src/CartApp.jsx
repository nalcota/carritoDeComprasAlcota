export const CartApp = () => {
    return (
        <>


            <div className="container">
                <h3> Cart App</h3>
                <div className="row">
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Teclado Mecanico RGB</h5>
                                <p className="card-text">Teclado Mecanico con Luces RGB switches red</p>
                                <p className="card-text"> $ 1000</p>
                                <button className="btn btn-primary">Agregar</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Samunsung Smar tv 55</h5>
                                <p className="card-text">Television</p>
                                <p className="card-text"> $ 3000</p>
                                <button className="btn btn-primary">Agregar</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Audifonos bluetooh</h5>
                                <p className="card-text">Audifonos </p>
                                <p className="card-text"> $ 1800</p>
                                <button className="btn btn-primary">Agregar</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Memoria Corsair 8gb</h5>
                                <p className="card-text">memoria</p>
                                <p className="card-text"> $ 1000</p>
                                <button className="btn btn-primary">Agregar</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Tarjeta de video NVIDIA</h5>
                                <p className="card-text">Tarjeta grafica para juegos 4k</p>
                                <p className="card-text"> $ 1000</p>
                                <button className="btn btn-primary">Agregar</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Mouse inalambrico</h5>
                                <p className="card-text">Mouse</p>
                                <p className="card-text"> $ 1000</p>
                                <button className="btn btn-primary">Agregar</button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-4 w-50">
                    <h3>Carro de Compras</h3>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>nombre</td>
                                <td>precio</td>
                                <td>cantidad</td>
                                <td>total</td>
                                <td>eliminar</td>
                            </tr>


                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={"3"} className="text-end fw-bold">Total</td>
                                <td colSpan={"2"} className="text-start fw-bold">12345</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>


            </div>
        </>
    )
}