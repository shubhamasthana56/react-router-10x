import './App.css';
import Home from './Home';
import Profile from './Profile';
import About from './about';
import Nav from './nav';
import Edit from './edit';
import NotFound from './notFound';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { useState, memo } from 'react';

function App() {
  const [testState, setTestState] = useState(0);
  const [propValue, setPropValue] = useState("abc");
  const [todoList, setTodoList] = useState([]);
  console.log(testState, propValue);
  const addNewTodo = (newElement)=> {
    setTodoList([...todoList, newElement])
    console.log(newElement, "added");
  }
  return (
    <div>
      <button onClick={()=> {setTestState(testState + 1);setPropValue("bca")}}>Parent State Change</button>
      <Home testing={propValue} updateTodoList={addNewTodo}/>
      <NotFound/>
    </div>
  );
}

export default memo(App);
