import Header from "./header";
import Body from "./body";

function Table(props) {
    // props.data={data}
    // props.name={"Lista de Categorias"}
    // props.columns={["id", "name", "description"]}
    // props.columnsAlias={["ID", "Nombre", "Descripcion"]}
    // props.tools={["update", "delete"]}
    // props.path={"/categoria"}
    return (
        <div className="container-fluid">
        <table class="table table-striped table-dark">
            <caption>{props.name}</caption>
            <Header columns={props.columnsAlias} tools={props.tools} />
            <Body
                data={props.data}
                columns={props.columns}
                tools={props.tools}
                path={props.path}
            />
        </table>
        </div>
    );
}

export default Table;
