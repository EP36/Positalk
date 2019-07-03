import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components..
import QuoteDisplay from '../components/QuoteDisplay';
import QuoteGenerator from '../components/QuoteGenerator';
// import action creators
import { genQuote } from '../actions/actions';
import { genAuthor } from '../actions/actions';
import { thunkGenQuote } from '../actions/actions'

const mapStateToProps = state => {
  console.log(state,'inside of mapstatetoprops')
  return ({
  // add pertinent state here
  quote: state.quotes.quote,
  author: state.quotes.author
});
};

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  genQuote: (quote) => {console.log(quote); dispatch(genQuote(quote))},
  genAuthor: (author) => {console.log(author); dispatch(genAuthor(author))},
  thunkGenQuote: () => {console.log("HI");
  thunkGenQuote()}
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <QuoteDisplay quote={this.props.quote} />
          <QuoteDisplay author={this.props.author} />
          <QuoteGenerator onClick={(quote, author) => {
            this.props.genQuote(quote);
            this.props.genAuthor(author);
            this.props.thunkGenQuote();
          }} />

        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);