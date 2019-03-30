
// const store = Redux.createStore(reducer);

// const counterButton = document.querySelector('#count');
// function reducer(state=0, action) {
// 		switch(action.type) {
// 			case 'INCREMENT':
// 		return state + 1
// 			case 'DECREMENT':
// 		return state - 1
// 		default:
// 		return state
// 	}
// } 

// console.log(store);

// store.subscribe(() => counterButton.innerText = store.getState())


// inc.addEventListener('click', () => store.dispatch({type: 'INCREMENT'}))
// dec.addEventListener('click', () => store.dispatch({type: 'DECREMENT'}))

// console.log(store.getState(), 'me');


// // ToDo Script
const store = Redux.createStore(addTodo);
const input = document.querySelector('input');

const ul = document.querySelector('ul');
const li = document.createElement('li');

// store
// reducer
// subscribe
// action


// Reducer
function addTodo(state=[], action) {
	switch(action.type) {
		case 'ADDTODO':
	return state.push(input.value);
	default:
	return state
	}
}

store.subscribe(() => li.innerText = store.getState());

input.addEventListener('keyup', () => store.dispatch({type: 'ADDTODO'}));

console.log(store.getState(), 'me');


