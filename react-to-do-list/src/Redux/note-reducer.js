

export const initialState = {
    notes: [
        {id: 1, text:"Заметка 1"},
        {id: 2, text:"Заметка 2"},
        {id: 3, text:"Заметка 3"}
    ]
}


const noteReducer = (state = initialState, action) => {

    return state;
}

export default noteReducer;