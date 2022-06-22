import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    user{
      _id
      username
      email
      savedPost {
        postId
      }
    }
  }
`;