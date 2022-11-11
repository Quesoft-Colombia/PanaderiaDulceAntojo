import { getData } from "../../js/getData";
import MainPage from "../table/mainPage";

function IndexProductos(props) {
    let data = getData("url", {}, "get", {});

    return (
        <div className="mx-5">
            <div>
                <h3>Productos</h3>
                <p>Bienvenido a la pagina de Productos</p>
            </div>
            <MainPage
                data={data}
                name={"Lista de Productos"}
                columns={["id", "nombre","precio", "stock", "categoria"]}
                columnsAlias={["ID", "Nombre","Precio", "Stock", "Categoria"]}
                tools={["update", "delete"]}
                path={"/productos"}
            />
        </div>
    );
}

export default IndexProductos;