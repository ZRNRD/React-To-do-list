import s from "./Note.module.css"

const Note = (props) => {
    return(
        <div className={s.note}>
             <p>{props.text}</p> <button>X</button>
        </div>
    )
}

export default Note;