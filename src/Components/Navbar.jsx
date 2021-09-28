import {useState} from "react";
import { GoHome } from "react-icons/go";
import { BsCardText, BsInfoSquare } from "react-icons/bs";
import { MdNoteAdd } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useHistory } from "react-router-dom";
import "../App.css";
const Navbar = ({searchNote}) => {
    const history = useHistory();
    const [searchBarValue,updateSearchBarValue]=useState("");
    let render = null;
    const commonNavLink = <>
        <li className="nav-item">
            <NavLink to="/" title="Home"><GoHome color="white" size="25px"/></NavLink>
        </li>
        <li className="nav-item ">
            <NavLink to="/aboutus" title="About Us" ><BsInfoSquare color="white" size="20px" /></NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/createnote" title="Create a new Note"><MdNoteAdd color="white" size="25px" /></NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/mynotes" title=" My Notes"><BsCardText color="white" size="25px" /></NavLink>
        </li>
    </>;

   if (history.location.pathname === "/mynotes") {
        render = <>
            <ul className="navbar-nav">
                {commonNavLink}
            </ul>
            <div className="navbar-form">
            <form className="d-flex">
                <input className="form-control me-2" type="search" 
                placeholder="Search a note" 
                value={searchBarValue}
                onChange={e=>updateSearchBarValue(e.target.value)}/>
                <button className="btn btn-outline-secondary" 
                type="submit" 
                onClick={(e)=>{
                    e.preventDefault();
                    searchBarValue===""?window.alert("Seach box is empty. Please enter any keyword related to the note."):
                    searchNote(searchBarValue);
                    }
                }>Search</button>
            </form>
            </div>
        </>;
    }
    else{
        render=<>
            <ul className="navbar-nav">
                {commonNavLink}
            </ul>
        </>;
    }
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <div className="navbar-brand">
                <h3>Alpha Notes</h3>
            </div>
            {render}
        </nav>
    );
}

export default Navbar;