import CreateNote from "../Components/CreateNote";
const CreateNotePage=(props)=>{
    return(
        <div>
            <NavBar/>
            <div className="page_body">
                <CreateNote getNoteDetail={props.getNoteDetail}/>
            </div>
        </div>
    );
}

export default CreateNotePage;