import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilters } from '../actionTypes'
import TodoList from '../components/TodoList'

export const getVisibleTodos = (todos,filter) => {
    switch (filter)
    {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo=>todo.completed===false)
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo=>todo.completed===true)
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos,state.visibilityFilter)
    }
 }

 const mapDispatchToProps = (dispatch) => {
     return {
         onTodoClick: id => {
             dispatch(toggleTodo(id))
         }
     }
 }

 const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
 )(TodoList);

 export default VisibleTodoList
 