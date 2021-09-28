import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
//import { Provider } from "./context";
import { Link } from "react-router-dom";
//import EditNote from "../Pages/EditNotePage";
const MyNote = ({ noteDetail, index, getNoteToEdit, getNoteToDelete }) => {
   
    return (
            <div className="card my-3" style={{ width: "500px" }}>
                <div className="card-header d-flex">
                    <h5 className="card-text text-dark">{noteDetail.title}</h5>
                    <div className="logo">
                        <Link to="/mynotes/edit" title="Edit note"><RiEdit2Line className="edit mx-3" onClick={() => {
                            
                            getNoteToEdit(index);
                            // <Provider value={index}>
                            //     <EditNote/>
                            // </Provider>
                        }} /></Link>
                        <RiDeleteBinLine className="delete" title="Delete note" onClick={() => getNoteToDelete(index)} />
                    </div>
                </div>
                <div className="card-body">
                    <p className="lead">{noteDetail.body}</p>
                </div>
                <div className="card-footer">
                    <p className="card-text text-center">{noteDetail.date}</p>
                </div>
            </div>
    );
}

export default MyNote;