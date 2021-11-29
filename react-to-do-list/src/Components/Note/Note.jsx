import { useEffect, useState } from "react";
import s from "./Note.module.css"

const Note = (props) => {
    const deleteNote = () => {
        const noteId = props.id;
        props.deleteNote(noteId);
    }

    const [editMode, changeEditMode] = useState(false);
    const [editedValue, changeEditValue] = useState(props.text);
    

    return(
        <div className={s.note} onDoubleClick = {() => changeEditMode(true)}>

             {
                editMode === true 
                ? <textarea autoFocus 
                            name="textarea" 
                            onBlur = {() => {
                                changeEditMode(false);
                                props.editNote(props.id, editedValue)
                            }}
                            onChange = {(e) => {changeEditValue(e.target.value)}}>{editedValue}</textarea> 
                : <p>{editedValue}</p> 
             } 
             
             <button onClick={deleteNote}>X</button>
        </div>
    )
}

export default Note;