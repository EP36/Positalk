/* eslint-disable no-case-declarations */
import * as types from '../constants/actionTypes';

const initialState = {
  // state goes here
  quote: '"New day, same grind."',
  author: 'EP'
}

const quoteReducer = (state=initialState, action) => {
  switch(action.type){
    // this is where the cases for each action type occurs
    case types.GEN_QUOTE:
      let { quote } = state;
      let newQuote = action.payload.quote;
      // quote = action.payload.newQuote;
      quote = newQuote;
      return {
        ...state,
        quote
      };

    case types.GEN_AUTHOR:
      let { author } = state;
      let newAuthor = action.payload.author;
      console.log(newAuthor);
      author = newAuthor;
      return {
        ...state,
        author
      };

      case types

    default: return state;
  }
};

export default quoteReducer;