

const DEFAULT_STATE = {time : new Date().toLocaleTimeString()};

export default(state = DEFAULT_STATE, action)=>{
    switch(action.type){
      case 'UPDATE_TIME':
        return {
          time: action.payload
        };
      default:
        return state;
    }
}
