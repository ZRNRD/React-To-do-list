import { Provider } from 'react-redux';
import './App.css';
import ToDoList from './Components/ToDoList/ToDoList';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <ToDoList />
      </div>
    </Provider>
      
  );
}

export default App;
