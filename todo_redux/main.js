const form = document.querySelector('.todo-form');
const todoList = document.querySelector('.todo-list');
const input = document.querySelector('#todo');


const initialState = {
	todos: []
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "ADD_TODO": {
			return {
				todos: [...state.todos, action.value]
			}
		}
		default: return state;

		case "DELETE_TODO": {
			const newTodo = [...state.todos];
			newTodo.splice(action.value, 1);
			return {
				todos: newTodo
			}
		}
	}
}

const store = Redux.createStore(reducer);

// Showing the changes made by reducer to the Viewer. This is what Subscribe does.
store.subscribe(() => {
//  console.log(store.getState());
	const todos = store.getState().todos;
	// console.log(todos);
	const html = todos.map((todo, i) => 
		`<div>
			<p>${todo}</p>
			<button id=${i} class="delete">x</button>
		</div>
		`).join("");
	todoList.innerHTML = html;
	input.value = "";

}) 


//creates action which is an Object with type and payload as two keys.
function actionCreator(actionName, value) {
 return {
	 type: actionName, 
	 value: value, //payload
 }
}

// Adding todos
function addTodo(event) {
// console.log(event.target);
event.preventDefault();
store.dispatch(actionCreator("ADD_TODO", input.value))
}

// Deleting todos
const deleteTodo = (event) => {
	if(event.target.classList.contains("delete")) {
		const id = event.target.id;
		store.dispatch(actionCreator("DELETE_TODO", id))
	};
}


form.addEventListener('submit', addTodo)
todoList.addEventListener('click', deleteTodo);












