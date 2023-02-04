import { useState } from 'react';
import './App.css';
import List from './components/list';
import AddItem from './components/addtodo';



function App() {
  const [toDoList, setToDoList] = useState([
    {
      id: 1,
      title: "Do something nice for someone I care about",
      date_dur: 5,
      completed: true
    },
    {
      id: 2,
      title: "Memorize the fifty states and their capitals",
      date_dur: 5,
      completed: false
    },
    {
      id: 3,
      title: "Watch a classic movie",
      date_dur: 5,
      completed: false
    },
    {
      id: 4,
      title: "Contribute code or a monetary donation to an open-source software project",
      date_dur: 5,
      completed: false
    },
    {
      id: 5,
      title: "Solve a Rubik's cube",
      date_dur: 5,
      completed: false
    },
  ])

  // console.log(toDoList)
  return (
    <div className='appContainer'>
      <h3>To do list</h3>
      <AddItem settodolist ={setToDoList} />
      <hr />
      <List todos={toDoList} />
    </div> 
  );
}

export default App;
