import { Provider } from 'react-redux';
import './App.css';
import ToDoListContainer from './Components/ToDoList/ToDoListContainer';
import store from './Redux/store';

function App() {
  console.log(JSON.parse(localStorage.getItem("notes"))) //Удалить позже
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <ToDoListContainer />
      </div>
    </Provider>
      
  );
}

export default App;
