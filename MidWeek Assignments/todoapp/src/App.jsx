import { useEffect, useState } from 'react';
import './App.css';
import List from './components/list';
import AddItem from './components/addtodo';
import Completed from './components/completed';



function App() {
  const[completedTask, setCompletedTasks] = useState(true);
  const [toDoList, setToDoList] = useState([
    {
      id: 1,
      title: "Watch a classic movie",
      date_dur: 5,
      ischecked: false
    },
    {
      id: 2,
      title: "Contribute code to an open-source software project",
      date_dur: 5,
      ischecked: false
    },
    {
      id: 3,
      title: "Solve a Rubik's cube",
      date_dur: 5,
      ischecked: false
    },
  ])
  const[checkbox,setCheckbox] =useState([])




  console.log("checking",checkbox)
  return (
    <div className='appContainer'>
      <h3>To do list</h3>
      <AddItem settodolist ={setToDoList} />
      <hr />
      <List todos={toDoList} setToDo = {setToDoList} setCheckbox={setCheckbox}/>
      {completedTask &&<Completed checkbox={checkbox}/>}
      {/* <Completed  checkbox={checkbox}/> */}
    </div> 
  );
}

export default App;
