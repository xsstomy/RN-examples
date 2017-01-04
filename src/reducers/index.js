import { combineReducers } from 'redux';
import HomeState from './Home.reducer';
const rootReducer = combineReducers({
     homeState: HomeState
});

export default rootReducer;