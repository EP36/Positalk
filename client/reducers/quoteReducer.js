/* eslint-disable no-case-declarations */
import * as types from '../constants/actionTypes';

const initialState = {
  // state goes here
  // quote: '"New day, same grind."',
  // author: 'EP'
  quotes: {}
}

const quoteReducer = (state=initialState, action) => {
  let newQuotes;
  switch(action.type){
    // this is where the cases for each action type occurs
    // case types.GEN_QUOTE:
    //   let { quote } = state;
    //   let newQuote = action.payload.quote;
    //   // quote = action.payload.newQuote;
    //   quote = newQuote;
    //   return {
    //     ...state,
    //     quote
    //   };

    // case types.GEN_AUTHOR:
    //   let { author } = state;
    //   let newAuthor = action.payload.author;
    //   console.log(newAuthor);
    //   author = newAuthor;
    //   return {
    //     ...state,
    //     author
    //   };

      case types.GEN_QUOTES:
        let stateClone = { ...state };
        // console.log('this is stateClone', stateClone);
        newQuotes = action.payload.newQuotes;
        // console.log('this is newQuotes', newQuotes);
        let index = Math.floor(Math.random() * 15)
        // console.log(index)
        stateClone.quotes = newQuotes.api[index];
        // console.log('this is stateClone.quotes', stateClone.quotes);
        return stateClone;

      default: return state;
  }
};

export default quoteReducer;