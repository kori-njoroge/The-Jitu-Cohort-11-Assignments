
import './App.css';
import  MoviesList  from './movielist';
import { useState } from 'react';
import MoviesNew from "./movies"

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
    {
      id: 6,
      title: "Bake pastries for me and neighbor",
      date_dur: 5,
      completed: false
    },
    {
      id: 7,
      title: "Go see a Broadway production",
      date_dur: 5,
      completed: false
    },
    {
      id: 8,
      title: "Write a thank you letter to an influential person in my life",
      date_dur: 5,
      completed: true
    },
    {
      id: 9,
      title: "Invite some friends over for a game night",
      date_dur: 5,
      completed: false
    },
    {
      id: 10,
      title: "Have a football scrimmage with some friends",
      date_dur: 5,
      completed: false
    }
  ])



  return (
    <div className="App">
      <h1>Movies Hub</h1>
      <MoviesList movies = {MoviesNew} />
    </div>
  );
}

export default App;
