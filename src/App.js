import { useEffect, useState } from "react";
//import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateNote from "./Components/CreateNote";
import "./App.css";
import Home from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import MyNotesPage from "./Pages/MyNotesPage";
import EditNote from "./Pages/EditNotePage";
import AboutUs from "./Pages/AboutUs";



const App = () => {
  // set a key for localstorage
  const key = "alphaNotesData";
  // State to hold all the notes.
  const [myNotes, updateMyNotes] = useState([]);
 
  // State to hold index of note that is being edited.
  const [noteToBeEdited, updateNoteToBeEdited] = useState({});

  // Function to fetch the data about new note created and update the notes array.
  const getNoteDetail = ({ noteDate, noteTitle, noteBody }) => {
    const tempArr = [...myNotes];
    updateMyNotes([...tempArr, { date: noteDate, title: noteTitle, body: noteBody }]);
  }

  // Fetching notes data from the local storage every time the page refreshes or the application starts.
  useEffect(() => {
    const tempNoteList = JSON.parse(localStorage.getItem(key));
    tempNoteList && updateMyNotes([...tempNoteList]);
  }, []);

  // Storing notes data in local storage every time notes array is updated.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(myNotes));
  }, [myNotes]);

  // Function to fetch the index of the note that is being deleted.
  const getNoteToDelete = (index) => {
    const tempNoteList = [...myNotes];
    tempNoteList.splice(index, 1);
    updateMyNotes([...tempNoteList]);
  }

  // Function to fetch new details of a note that is being edited.
  const updateNote = (newNote, index) => {
    const tempNoteList = [...myNotes];
    tempNoteList[index] = newNote;
    updateMyNotes([...tempNoteList]);
  }

  // Function to fetch the index of a note that is being edited.
  const getNoteToEdit = (index) => {
    updateNoteToBeEdited({ pos: index, data: myNotes[index] });
  }
  
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/createnote"  component={() => <CreateNote getNoteDetail={getNoteDetail} />}/>
          <Route path="/mynotes"  component={() => <MyNotesPage myNotes={myNotes}
            getNoteToDelete={getNoteToDelete}
            getNoteToEdit={getNoteToEdit}
          />} />
          <Route path="/mynotes/edit"  component={() => <EditNote noteToBeEdited={noteToBeEdited} updateNote={updateNote} />} />;
          <Route path="/aboutus"  component={AboutUs} />
          <Route path="/" exact component={Home}/>
          <Route component={PageNotFound} />
          
        </Switch>
      </div>
    </Router>
  );
}
export default App;