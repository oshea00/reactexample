import React from 'react';
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer'
import './App.css';

const App = () => (
<div>
  <AddTodo />
  <VisibleTodoList />
  <Footer />
</div>
)

export default App;

