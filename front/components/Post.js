import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const POST = gql`
  query post($id: ID!) {
    post(id: $id) {
      id
      title
      content
    }
  }
`;

const Post = (props) => {
  const { id } = props;
  if (!id) {
    return (
      <aside>
        Error
      </aside>
    );
  }

  return (
    <Query query={POST} variables={{ id }}>
      {({ loading, error, data }) => {
        if (error) {
          return (
            <aside>
              Error
            </aside>
          );
        }

        if (loading) {
          return (
            <p>
              Loading...
            </p>
          );
        }

        const { post } = data;
        if (!post) {
          return (
            <aside>
              Error
            </aside>
          );
        }

        return (
          <div>
            <h1>
              {post.title}
            </h1>
            <div>
              {post.content}
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Post;
