import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_SAVEDPOST = gql`
  mutation savePost($postInput: PostInput!) {
    savePost(postInput: $postInput) {
      _id
      username
      email
      savedposts {
        postId
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($userId: ID!, $postId: ID!) {
    deletePost(userId: $userId, postId: $postId) {
      _id
      username
      email
      savedPost {
        description
        postId
        comments
        likes
        title
      }
    }
  }
`;