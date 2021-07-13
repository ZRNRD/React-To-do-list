const CHANGE_INPUT = "react-to-do-list/notes/CHANGE_INPUT";
const ADD_NOTE = "react-to-do-list/notes/ADD_NOTE";
const DELETE_NOTE = "react-to-do-list/notes/DELETE_NOTE";
const EDIT_NOTE = "react-to-do-list/notes/DELETE_NOTE";


export const initialState = {
    notes: [
        {id: 1, text:"Заметка 1"},
        {id: 2, text:"Заметка 2"},
        {id: 3, text:"Заметка 3"}
    ],
    input: ""
}


const noteReducer = (state = initialState, action) => {
    switch(action.type){

        case CHANGE_INPUT: {
            let newValue = action.newValue;
            return {
                ...state,
                input: newValue
            }
        }
        case ADD_NOTE: {
            let newNote = action.newNote;
            return{
                ...state,
                notes:[...state.notes, newNote],
                input: ""
            }
        }
        case DELETE_NOTE: {
            return {
                ...state,
                notes: state.notes.filter(p => p.id !== action.noteId)
            };
        }

        default: return state;
    }

}

export const changeInputValueAction = (newValue) => {
    return {
      type: CHANGE_INPUT,
      newValue
    };
};

export const addNewNoteAction = (newNote) => {
    return {
      type: ADD_NOTE,
      newNote
    };
};
export const deleteNoteAction = (noteId) => {
    return {
      type: DELETE_NOTE,
      noteId
    };
};

export default noteReducer;