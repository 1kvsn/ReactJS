
import { createStore } from 'redux';

export const store = createStore(counter);

 function counter(state = 0, action) {
	 switch (action.type) {
		 case 'INCREMENT':
		 return state + 1
		 case 'DECREMENT':
		 return state - 1
		 default: return state
	}
}