import Navbar from "../Components/Navbar";
import AlphaNotesImg from "../Images/App_Logo.png";
const AboutUs = () => {
    return (
        <>
        <Navbar/>
        <div className="container">
            <div className="row my-5">
                <div className="col-sm-8">
                    <h3>Alpha Notes</h3>
                    <p className="lead">
                        Alpha notes is a simple note making app built completely with <a href="https://reactjs.org/">React Js</a>.
                        Here you can create new notes, delete or edit earlier created notes.
                        All the notes are saved on Firebase database.
                        <br />
                        <br />
                        Alpha notes web app is completely responsive and can be used in mobile devices also.
                    </p>
                </div>
                <div className="col-sm-4">
                    <img className="img-fluid" src={AlphaNotesImg} alt="Alpha notes img" />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-sm-4">
                    <img className="img-fluid" src={AlphaNotesImg} alt="Alpha notes img" />
                </div>
                <div className="col-sm-8">
                    <p className="lead">
                        <strong>Alpha notes</strong> is a simple note making app built completely with React Js.
                        Here you can create new notes, delete or edit earlier created notes.
                        All the notes are saved on Firebase database.
                        <br />
                        <br />
                        <strong>Alpha notes</strong> web app is completely responsive and can be used in mobile devices also.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default AboutUs;