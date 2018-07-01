import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { GRAPHQL_URL } from '../configs';

export default withApollo(() => (
  new ApolloClient({ uri: GRAPHQL_URL })
));
