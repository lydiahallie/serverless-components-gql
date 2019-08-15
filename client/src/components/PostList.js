import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import PostItem from "./PostItem";

const Posts = () => {
  const { data } = useQuery(GET_POSTS);

  return data && data.posts
    ? data.posts.map(({ id, title, body }, i) => (
        <PostItem key={id} title={title} body={body} i={i} />
      ))
    : null;
};

const GET_POSTS = gql`
  query Posts {
    posts {
      id
      title
      body
    }
  }
`;

export default Posts;
