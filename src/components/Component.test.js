import React from 'react';
import Todo from './Todo'
import TodoList from './TodoList'
import Link from './Link'
import { getVisibleTodos, VisibleTodoList } from '../containers/VisibleTodoList'
import { VisibilityFilters } from '../actionTypes';

import Footer from './Footer'

it('Todo Renders',()=>{
    <Todo key={0} onClick={()=>{}} completed={false} text='test item'/>
})

it('TodoList Renders',()=>{
    var todos = [
        { id: 0, completed: false, text: 'test items'},
        { id: 1, completed: true, text: 'completed test items'}
    ]; 
    <TodoList todos={todos} onTodoClick={()=>{}} />
})

it('Link Renders Active is True',()=>{
    var l = <Link active={true} onClick={()=>{}}>
        <p>Hi</p>
    </Link>
})

it('Link Renders Active is False',()=>{
    var l = <Link active={false} onClick={()=>{}}>
        <p/> // childern required 
    </Link>
})

it('Footer Renders',()=>{
    <Footer/>
})

it('Filters visibility',()=>{
    var todos = [
        { id: 0, completed: false, text: 'test items'},
        { id: 1, completed: true, text: 'completed test items'},
        { id: 2, completed: true, text: 'completed test items'}
    ]; 
    expect(getVisibleTodos(todos,VisibilityFilters.SHOW_COMPLETED)).toHaveLength(2);
    expect(getVisibleTodos(todos,VisibilityFilters.SHOW_ACTIVE)).toHaveLength(1);
    expect(getVisibleTodos(todos,VisibilityFilters.SHOW_ALL)).toHaveLength(3);
})






