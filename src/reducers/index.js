import {combineReducers} from 'redux';
import clockReducer from './clock-reducer';

export default combineReducers(
  {
    clock: clockReducer
  }
)
