import { combineReducers } from 'redux';
import benches from './benches_reducer';

const entitiesReducer = combineReducers({ benches });

export default entitiesReducer;
