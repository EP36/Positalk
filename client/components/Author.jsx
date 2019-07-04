import React from 'react';

const Author = props => {
  console.log('props in Author component', props.authorkey.author);
  return (
    <section>
      <h1>
        <span id='author'>{props.authorkey.author}</span>
      </h1>
    </section>
  )
}

export default Author;