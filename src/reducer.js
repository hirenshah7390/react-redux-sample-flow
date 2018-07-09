
const defaultCounter = {counter:0}
export default function userReducer(state= defaultCounter, action){
  if(action.type == "INCREMENT_COUNTER_VALUE")     
      return {
              ...state,
              counter : action.data.counter
            }
  else
      return state;
  
}
