import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const CreateNote = ({ getNoteDetail }) => {
    const date = `Created on ` + new Date().toDateString();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    return (
        <>
        <Navbar/>
        <div className="container mt-5">
            <div className="card custom-card1 ">
                <h3 className=" card-header text-center my-3">Alpha Note</h3>
                <div className="card-body">
                    <label className="form-label"><h5>Note's Title</h5></label>
                    <input type="text" className="form-control bg-transparent"
                        placeholder="Enter note's title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label className="form-label mt-2"><h5>Note's body</h5></label>
                    <textarea className="form-control bg-transparent" rows="3" placeholder="Enter note's body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <div className="card-footer">
                    <Link to="/mynotes"><button className="btn btn-outline-primary btn-sm my-3"
                        onClick={() => {
                            title === "" && body === "" ? window.alert("One or more fields are empty. Please fill all the fields.") : getNoteDetail({
                                noteDate: date,
                                noteTitle: title,
                                noteBody: body
                            });
                        }}>Create Note</button></Link>

                    <Link to="/mynotes"><button className="btn btn-sm btn-outline-primary mx-3">Cancel</button></Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default CreateNote;