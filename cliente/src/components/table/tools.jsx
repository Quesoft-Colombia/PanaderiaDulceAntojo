import UpdateTool from "./updateTool";
import DeleteTool from "./deleteTool";
function Tools(props) {
    //props.tools={props.tools}
    //props.path={props.path}
    //props.id={row["id"]}
    if (props.tools && props.tools.length > 0) {
        let updateJSX = (
            <UpdateTool tools={props.tools} path={props.path} id={props.id} />
        );
        let deleteJSX = (
            <DeleteTool tools={props.tools} path={props.path} id={props.id} />
        );
        if (updateJSX || deleteJSX) {
            return (
                <td>
                    {updateJSX}
                    {deleteJSX}
                </td>
            );
        }
    }
    return null;
}

export default Tools;
