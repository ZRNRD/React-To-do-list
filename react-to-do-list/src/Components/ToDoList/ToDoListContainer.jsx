import { connect } from "react-redux"
import { addNewNoteAction, changeInputValueAction, deleteNoteAction } from "../../Redux/note-reducer"
import ToDoList from "./ToDoList"

const mapStateToProps = state => {
    return {
        notePage: state.notePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeInput: (newValue) => {
            dispatch(changeInputValueAction(newValue))
        },
        addNewNote: (newNote) =>{
            dispatch(addNewNoteAction(newNote))
        },
        deleteNote: (noteId) => {
            dispatch(deleteNoteAction(noteId))
        }
        
    }
}
    

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);