import * as TYPES from '../action-types';


let initalState = {
  testlist:[]
}

export default function testReducer (state =initalState,action) {
  state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case TYPES.TEST:
      state.testlist = action.payload;
      break;
    default:
      break;
  }
  return state;
}