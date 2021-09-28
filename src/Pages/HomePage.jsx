import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="text_body">
            <h3>Welcome To Alpha Notes</h3>
            <p>A simple solution for your day to day note making.</p>
            <NavLink to="/createnote"><button className="btn btn-outline-primary mx-2">Create a Note</button></NavLink>
            <NavLink to="/mynotes"><button className="btn btn-outline-primary mx-2" >My Notes</button></NavLink>
        </div>
        </>
    );
}

export default Home;