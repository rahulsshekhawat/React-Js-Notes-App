import {useState} from "react";
import {Link, useHistory } from "react-router-dom";
import Navbar from "../Components/Navbar";


const EditNote=(props)=>{

    const {noteToBeEdited,updateNote}=props;
    const {pos,data}=noteToBeEdited;
    
    const [notesTitle,updateTitle]=useState(data.title);
    const [notesBody,updateBody]=useState(data.body);
    const history=useHistory();
    

    const clickHandler=(e)=>{
        e.preventDefault();
        const date = (data.title!==notesBody && data.body!==notesBody)?`Last Updated on ` + new Date().toDateString():data.date;
        const permit=window.confirm("Are you sure you want to save changes made to note?");
        if(permit){
            updateNote({date:date,title:notesTitle,body:notesBody},pos);
            history.push("/mynotes");
        }
    }
    
    return(
        <>
        <Navbar/>
        <div className="edit-note-container  mt-5">
            <form>
                <div className="card p-3" style={{width:"400px"}}>
                    <div className="card-header">
                    <div className="form-group">
                        <label className="lead">Note's Title:</label>
                        <input type="text" className="form-control bg-transparent" placeholder="Enter new title." value={notesTitle} onChange={
                            (e)=>{
                                updateTitle(e.target.value);
                            }
                        } />
                    </div>
                    </div>
                  <div className="card-body">
                  <div className="form-group">
                        <label className="lead">Note's Body:</label>
                        <textarea cols="10" rows="4" className="form-control bg-transparent" placeholder="Enter new body." value={notesBody} onChange={
                             (e)=>{
                                updateBody(e.target.value);
                            }
                        }/>
                    </div>
                  </div>
                    <div className="card-footer text-center">
                    <button className="btn btn-sm btn-outline-primary mx-3" onClick={clickHandler}>Save</button>
                    <Link to="/mynotes"><button className="btn btn-sm btn-outline-primary">Cancel</button></Link>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
}

export default EditNote;