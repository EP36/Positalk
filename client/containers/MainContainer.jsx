// const React = require ('react');
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components..
// import QuoteDisplay from '../components/QuoteDisplay';
import QuoteGenerator from '../components/QuoteGenerator';
import Quote from '../components/Quote.jsx'
import Author from '../components/Author.jsx'

// import constants
import * as types from '../constants/actionTypes';

// import action creators
// import { genQuote } from '../actions/actions';
// import { genAuthor } from '../actions/actions';
import { genQuotes } from '../actions/actions';
import { thunkGenQuote } from '../actions/actions';

const mapStateToProps = state => {
  // console.log(state,'inside of mapstatetoprops')
  return ({
  // add pertinent state here
  quote: state.reducedQuote.quotes
});
};

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  genQuotes: () => dispatch(thunkGenQuote())
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.genQuotes();
    console.log('will mount', this.props)
  }

  render() {
    console.log('this props quotes', this.props)
    // const quotes = [];
    // quotes.push(this.props.quotes[0][quote])
    return (
      <div className='container'>
        <div className='outerbox'>
          <Quote quoteskey={this.props.quote} />
          <Author authorkey={this.props.quote} />
        <QuoteGenerator onClick={() => this.props.genQuotes} />
        </div>
      </div>
      
    )

    // return(
    //   <div className="container">
    //     <div className="outerBox">
    //       <QuoteDisplay quote={this.props.quote} />
    //       <QuoteDisplay author={this.props.author} />
    //       <QuoteGenerator onClick={(quote, author) => {
    //         this.props.genQuote(quote);
    //         this.props.genAuthor(author);
    //         this.props.thunkGenQuote();
    //       }} />

    //     </div>
    //   </div>
    // )
  // }

}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);