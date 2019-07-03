import React from 'react';

const QuoteGenerator = props => {
  let quote = '"Just show up and java."';
  let author = "Andy";
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