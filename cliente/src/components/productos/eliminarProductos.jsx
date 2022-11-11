import { getProductosById } from "../../js/getData";
import { useParams } from "react-router-dom";

function EliminarProductos(props) {
    let { idProductos } = useParams();
    let productos = getProductosById(idProductos);
    if (!productos) {
        productos = {};
    }
    return (
        <div className="w-75 mx-auto">
            <h3>Eliminar Productos</h3>
            <form>
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        id="floatingInput2"
                        placeholder="Id productos"
                        name="productos_id"
                        required={true}
                        readOnly={true}
                        value={productos.id}
                    />
                    <label for="floatingInput2">Id productos</label>
                </div>
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Nombre productos"
                        name="productos_nombre"
                        minLength={3}
                        required={true}
                        defaultValue={productos.nombre}
                    />
                    <label for="floatingInput">Nombre productos</label>
                </div>
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        id="floatingInput2"
                        placeholder="precio productos"
                        name="productos_precio"
                        required={true}
                        readOnly={true}
                        value={productos.precio}
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
                        readOnly={true}
                        value={productos.stock}
                    />
                    <label for="floatingInput2">Stock productos</label>
                </div>
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        id="floatingDescrip"
                        placeholder="Categoria productos"
                        name="categoria_description"
                        minLength={3}
                        required={true}
                        defaultValue={productos.categoria}
                    />
                    <label for="floatingDescrip">Categoria productos</label>
                </div>
                <button
                    class="w-100 btn btn-lg btn-outline-danger"
                    type="submit"
                >
                    Eliminar
                </button>
            </form>
        </div>
    );
}

export default EliminarProductos;
