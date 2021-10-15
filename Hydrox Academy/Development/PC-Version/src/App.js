import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import Logo from './hydrox-academy.png';
import { Grid, Button } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => { 
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id:doc.id, todo:doc.data().todo})))
    })
  }, []);
// eslint-disable-next-line
  const createTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input
    });
    setInput('');
  };


  return (
    <div className="App">
      <Grid container spacing={3} justify="center" className="App__grid">
        <img src={Logo} height={100} width={100} alt="" />
      </Grid>
      <Grid container spacing={3} justify="center" className="App__grid">
        <h1 style={{color: 'lightgray'}}>Hydrox Academy Rocket League</h1>
      </Grid>
      <Grid container spacing={3} justify="center" className="App__grid">
      <label>Adicionar Rank</label>
      </Grid>

      <Grid container spacing={3} justify="center" className="App__grid">
          <Button type="submit" variant="contained" className="App_submitBtn" style={{marginLeft:20}}>1v1</Button>
          <Button type="submit" variant="contained" className="App_submitBtn" style={{marginLeft:20}}>2v2</Button>
          <Button type="submit" variant="contained" className="App_submitBtn" style={{marginLeft:20}}>3v3</Button>
      </Grid>
      <Grid container spacing={3} justify="center" className="App__grid">
      <label>Consultar Rank</label>
      </Grid>

      <Grid container spacing={3} justify="center" className="App__grid">
          <Button type="submit" variant="contained" className="App_submitBtn" style={{marginLeft:20}}>1v1</Button>
          <Button type="submit" variant="contained" className="App_submitBtn" style={{marginLeft:20}}>2v2</Button>
          <Button type="submit" variant="contained" className="App_submitBtn" style={{marginLeft:20}}>3v3</Button>
      </Grid>

      {todos.map(todo => (
        <Todo todo={todo} />
      ))}
      

    </div>
  );
}

export default App
