import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Link from 'next/link';

const FEED = gql`
  query {
    feed {
      id
      title
    }
  }
`;

export default function Feed() {
  return (
    <Query query={FEED}>
      {({ loading, error, data }) => {
        if (loading) {
          return (
            <aside>
              is loading.
            </aside>
          );
        }

        if (error) {
          return (
            <aside>
              Error loading feed.
            </aside>
          );
        }

        const { feed } = data;
        return (
          <div>
            <h1>
              Feed
            </h1>
            {feed.map(post => (
              <div key={post.id}>
                <Link
                  href={{
                    pathname: '/post',
                    query: { id: post.id },
                  }}
                >
                  <a>
                    { post.title }
                  </a>
                </Link>
              </div>
            ))}
          </div>
        );
      }}
    </Query>
  );
}
