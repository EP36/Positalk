import React from 'react';

const QuoteDisplay = props => {
  return (
    <div className='quotebox' id='quoteandauthor'>
      <h1>
      <span id='quote'>{props.quote}</span>
      <span id='author'>{props.author}</span>
      </h1>
    </div>
  )
}

export default QuoteDisplay