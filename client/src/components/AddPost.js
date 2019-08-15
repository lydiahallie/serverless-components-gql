import React, { useState } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { GRADIENTS } from "../../styles/gradients";

export default function addPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createPost] = useMutation(CREATE_POST, {
    variables: { input: { title, body } },
    update(
      cache,
      {
        data: { createPost }
      }
    ) {
      const { posts } = cache.readQuery({ query: GET_POSTS });
      cache.writeQuery({
        query: GET_POSTS,
        data: { posts: posts.concat([createPost]) }
      });
    }
  });

  return (
    <PostItemForm
      onSubmit={e => {
        e.preventDefault();
        createPost();
        setTitle("");
        setBody("");
      }}
    >
      <PostTitleInput
        onChange={e => setTitle(e.target.value)}
        value={title}
        placeholder="New Title"
      />
      <PostBodyInput
        onChange={e => setBody(e.target.value)}
        value={body}
        placeholder="New"
      />
      <Button type="submit">Add Post</Button>
    </PostItemForm>
  );
}

const PostItemForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;

  height: 50px;
  width: 400px;
  padding: 20px;

  background: ${GRADIENTS[1]};
  box-shadow: 0px 10px 25px -10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const PostTitleInput = styled.input`
  margin: 0px;

  font-size: 20px;
  font-family: "Lato", sans-serif;
  font-weight: bold;

  background: transparent;
  border: none;
  outline: none;
`;

const PostBodyInput = styled.input`
  margin: 13px 0px;

  font-size: 13px;
  font-family: "Lato", sans-serif;

  background: transparent;
  border: none;
  outline: none;
`;

const Button = styled.button`
  position: absolute;

  right: 5px;
  bottom: 5px;

  letter-spacing: 1px;
  text-transform: uppercase;
  background-color: transparent;
  outline: none;
  border: none;
`;

const CREATE_POST = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

const GET_POSTS = gql`
  query Posts {
    posts {
      id
      title
      body
    }
  }
`;
