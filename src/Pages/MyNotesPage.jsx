import MyNote from "../Components/MyNote";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useState} from "react";

const MyNotesPage = ({ myNotes, getNoteToDelete, getNoteToEdit }) => {
    //console.log("myNotes:",myNotes);
    const [noteToBeSearched,updateNoteToBeSearched]=useState("");
    var notesArray=[];
    const searchNote=(noteIdentifier)=> updateNoteToBeSearched(noteIdentifier);
    noteToBeSearched===""?notesArray=[...myNotes]:(
        notesArray=[...myNotes.filter(note=>{
            if(note.title.toLowerCase().includes(noteToBeSearched)||note.body.toLowerCase().includes(noteToBeSearched))
                return note;
        })]
    );
    let notes = notesArray.map((note, index) => {
        return <li key={uuidv4()}>
            <MyNote noteDetail={note}
                index={index}
                getNoteToEdit={getNoteToEdit}
                getNoteToDelete={getNoteToDelete} />
        </li>;
    });
    return (
        <>
        <Navbar searchNote={searchNote}/>
        <div className="container">
            <div className="row text-center">
                <div className="col-md-9">
                {
                    notesArray.length === 0 ? <div className="card d-flex mt-5">
                        <div className="lead">
                        <h3>No notes to Show</h3>
                        <p>Click on Create Note Button to create a note</p>
                        </div>
                    </div> :
                        <ul style={{ listStyleType: "none" }}>
                            {notes}
                        </ul>
                }
                </div>
                <div className="col-md-3">
                <Link to="/createnote"><button className="create-note-btn btn btn-lg btn-outline-primary">Create New Note</button></Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default MyNotesPage;