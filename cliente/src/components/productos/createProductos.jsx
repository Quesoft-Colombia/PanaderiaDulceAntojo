function CreateProductos(props) {
    return (
        <div>
            <h3>Pagina: Crear Productos</h3>
            <div className="w-75 mx-auto">
                <form>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Nombre Productos"
                            name="productos_nombre"
                            minLength={3}
                            required={true}
                        />
                        <label for="floatingInput">Nombre Productos</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput2"
                            placeholder="precio productos"
                            name="productos_precio"
                            required={true}
                    
                        />
                        <label for="floatingInput2">Stock productos</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput2"
                            placeholder="stock productos"
                            name="productos_stock"
                            required={true}
                    
                        />
                        <label for="floatingInput2">Stock productos</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingDescrip"
                            placeholder="Descripcion productos"
                            name="category_description"
                            minLength={3}
                            required={true}
                        />
                        <label for="floatingDescrip">Descripcion productos</label>
                    </div>

                    <button
                        class="w-100 btn btn-lg btn-outline-success"
                        type="submit"
                    >
                        Crear
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateProductos;
