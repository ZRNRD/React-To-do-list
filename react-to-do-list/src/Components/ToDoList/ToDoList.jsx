import { connect } from "react-redux";
import Note from "../Note/Note";
import s from "./ToDoList.module.css"



const ToDoList = (props) => {

    const notes = props.notePage.notes.map((p) => { return <Note key={p.id} text={p.text}/> })
    console.log(notes)

    return(
        <div className={s.wrapper}>
            <strong>To Do List</strong> 
            <div>
                <input type="text" placeholder="Введите текст"/> <button>Добавить</button>
            </div>
            <div>{ [...notes].reverse() }</div>
            
        </div>
    )
}


const mapStateToProps = state => {
    console.log(state)
    return {
        notePage: state.notePage,
    }
}
    

export default connect(mapStateToProps)(ToDoList);