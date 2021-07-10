

export const initialState = {
    notes: [
        {id: 1, message:"Заметка 1"},
        {id: 2, message:"Заметка 2"},
        {id: 3, message:"Заметка 3"}
    ]
}


const noteReducer = (state = initialState, action) => {

    return state;
}

export default noteReducer;