import React from 'react';

const QuoteGenerator = props => {
  // have database data in here
  // functionality for random is here
  // on click will be where random occurs
  return (
    <section>
      <button onClick={() => {
        props.onClick(quote, author)
        }}> New Quote </button>
    </section>
  )
}

export default QuoteGenerator;