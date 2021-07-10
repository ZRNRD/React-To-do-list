import { connect } from "react-redux";
import Note from "../Note/Note";
import s from "./ToDoList.module.css"



const ToDoList = () => {
    return(
        <div className={s.wrapper}>
            <strong>To Do List</strong> 
            <div>
                <input type="text" placeholder="Введите текст"/> <button>Добавить</button>
            </div>
            <Note />
        </div>
    )
}


const mapStateToProps = store => {
    console.log(store)
    return {
        notes: store.notes,
    }
}
    

export default connect(mapStateToProps)(ToDoList);