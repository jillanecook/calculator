//set the initial state
const INITIAL_STATE = {
	firstNumber: 0,
    secondNumber: 0,
    result: 0
}; 
  
export default function (state = INITIAL_STATE, action) { 
    switch (action.type) { 
    	case "FIRST_NUMBER_CHANGE":
    		return firstNumberChange(state, action.event);
            
        default: 
            return state; 
    } 
}

function firstNumberChange(state, event) {
	let firstNumber = event.target.value;

    return Object.assign({}, state, {
    	firstNumber: firstNumber
	});
}