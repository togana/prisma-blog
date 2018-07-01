import React from 'react';
import Header from '../components/Header';
import Post from '../components/Post';

export default props => (
  <div>
    <Header />
    <Post
      id={props.id}
    />
  </div>
);
