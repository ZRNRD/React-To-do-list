import Note from "../Note/Note";
import s from "./ToDoList.module.css"



const ToDoList = (props) => {

    const notes = props.notePage.notes.map((p) => { return <Note key={p.id} text={p.text}/> })

    const changeInput = (e) => {
        const text = e.target.value;
        props.changeInput(text);
        
    };

    const addNewNote = () => {
        const newNote = {id: Date.now(), text: props.notePage.input};

        props.addNewNote(newNote)
    }

    return(
        <div className={s.wrapper}>
            <h1 className={s.h1}>To Do List</h1>
            <div className={s.input}>
                <input 
                    type="text" 
                    value={props.notePage.input} 
                    placeholder="Введите текст заметки"
                    onChange={changeInput}
                /> 
                <button onClick={addNewNote}>Добавить</button>
            </div>
            <div className={s.notes}>{ [...notes].reverse() }</div>
            
        </div>
    )
}



export default ToDoList;