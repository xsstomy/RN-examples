import { combineReducers } from 'redux';
import HomeState from './Home.reducer';
const rootReducer = combineReducers({
     HomeState: HomeState
});

export default rootReducer;