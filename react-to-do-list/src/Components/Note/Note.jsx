import s from "./Note.module.css"

const Note = (props) => {
    const deleteNote = () => {
        const noteId = props.id;
        props.deleteNote(noteId);
    }
    return(
        <div className={s.note}>
             <p>{props.text}</p> <button onClick={deleteNote}>X</button>
        </div>
    )
}

export default Note;