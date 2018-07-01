import React from 'react';
import { withRouter } from 'next/router';
import Header from '../components/Header';
import Post from '../components/Post';

export default withRouter(props => (
  <div>
    <Header />
    <Post
      id={props.router.query.id}
    />
  </div>
));
