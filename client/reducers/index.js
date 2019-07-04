import { combineReducers } from 'redux';

// import all reducers here
import quoteReducer from './quoteReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  reducedQuote: quoteReducer
});

// make the combined reducers available for import
export default reducers;
