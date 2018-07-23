import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from './actionTypes'
import { combineReducers } from 'redux'

function todos(todos = [], action)
{
    switch (action.type)
    {
        case ADD_TODO:
            return [...todos, 
                {
                    id: 0,
                    text: action.text,
                    completed: false
                }]
        case TOGGLE_TODO:
            return todos.map((todo,index)=>{
                    if (index === action.index) {
                        return Object.assign({},todo,{
                            completed: !todo.completed
                        })
                    }
                    return todo
                })
        default:
            return todos;
    }
}

function visibilityFilter(visibilityFilter = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default: 
            return visibilityFilter;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
  })

export default todoApp
