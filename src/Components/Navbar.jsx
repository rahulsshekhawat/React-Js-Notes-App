import {useState} from "react";
import { GoHome } from "react-icons/go";
import { BsCardText, BsInfoSquare, BsSearch } from "react-icons/bs";
import { MdNoteAdd,MdClear } from "react-icons/md";
//import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useHistory } from "react-router-dom";
import "../App.css";
const Navbar = ({searchNote}) => {
    const history = useHistory();
    const [searchBarValue,updateSearchBarValue]=useState("");
    let render = null;
    const commonNavLink = <>
        <li className="nav-item">
            <NavLink to="/" title="Home"><GoHome color="white" size="1.5rem"/></NavLink>
        </li>
        <li className="nav-item ">
            <NavLink to="/aboutus" title="About Us" ><BsInfoSquare color="white" size="1.5rem" /></NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/createnote" title="Create a new Note"><MdNoteAdd color="white" size="1.5rem" /></NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/mynotes" title=" My Notes"><BsCardText color="white" size="1.5rem" /></NavLink>
        </li>
    </>;

   if (history.location.pathname === "/mynotes") {
        render = <>
            <ul className="navbar-nav">
                {commonNavLink}
            </ul>
            <div className="navbar-form">
            <input className="search-bar" type="text" placeholder="Seach a note"
                value={searchBarValue}
                onChange={(e)=>{
                    updateSearchBarValue(e.target.value);
                    searchNote(e.target.value);
                }}/>
            <span className="search-bar-logo mt-2">
                {searchBarValue===""?<BsSearch color="white" size="1.5rem"/>:<MdClear color="white" size="1.5rem"
                onClick={e=>updateSearchBarValue("")}/>}
            </span>
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
                <h3 className="mx-2">Alpha Notes</h3>
            </div>
            {render}
        </nav>
    );
}

export default Navbar;