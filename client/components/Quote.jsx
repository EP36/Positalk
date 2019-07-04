import React from 'react';

// class Quote extends React.Component {
//   componentDidUpdate() {
//     console.log('Quote component props.quotes', this.props)
//   }

//   render(){
//     return (
//     <div className='quote'>
//       {this.props.quotes}
//     </div>
//     )
//   }
// }

const Quote = props => {
  console.log('props in Quote component', props.quoteskey.quote);
  return (
    <section>
      <h1>
        <span id='quote'>{props.quoteskey.quote}</span>
      </h1>
    </section>
  )
}

export default Quote;