import * as types from '../constants/actionTypes';

// export actions

export const genQuote = (newQuote) => ({
  // this type property dictates how we plan to update state
  type: types.GEN_QUOTE,
  // this payload property is what we update state with
  payload: {
    quote: newQuote
  }
});

export const genAuthor = (newAuthor) => ({
  type: types.GEN_AUTHOR,
  payload: {
    author: newAuthor
  }
})

export const thunkGenQuote = () => {
  return ((dispatch) => {
    fetch("/api/quotes", { 
      method: 'GET',
      mode: 'no-cors',
      cache: 'default' 
  })
      .then(res => res.json())
      .then(quote => quote)
  })
}