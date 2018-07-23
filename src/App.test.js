import { store } from './store'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters}  from './actionTypes'

it ('initial state is no todos', () => {
  expect(store.getState().todos).toHaveLength(0);
});

it ('initial state is SHOW_ALL', () => {
  expect(store.getState().visibilityFilter).toBe(VisibilityFilters.SHOW_ALL);
});

it ('can add a todo item', ()=>{
  store.dispatch(addTodo('Added a task'));
  expect(store.getState().todos[0].text).toBe('Added a task');
});

it ('can toggle a task completed', ()=>{
  store.dispatch(toggleTodo(0));
  expect(store.getState().todos[0].completed).toBe(true);
});

it ('can set visibility to SHOW_COMPLETED', ()=>{
  store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
  expect(store.getState().visibilityFilter).toBe(VisibilityFilters.SHOW_COMPLETED);
});

it ('can set visibility to SHOW_ALL', ()=>{
  store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));
  expect(store.getState().visibilityFilter).toBe(VisibilityFilters.SHOW_ALL);
});

it ('can set visibility to SHOW_ACTIVE', ()=>{
  store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
  expect(store.getState().visibilityFilter).toBe(VisibilityFilters.SHOW_ACTIVE);
});

