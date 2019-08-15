import React from "react";
import styled from "styled-components";

import { GRADIENTS } from "../../styles/gradients";

const PostItem = ({ body, title, i }) => (
  <PostItemBox i={i}>
    <PostTitle>{title}</PostTitle>
    <PostBody>{body}</PostBody>
  </PostItemBox>
);

const PostItemBox = styled.div`
  display: flex;
  flex-direction: column;

  height: 50px;
  width: 400px;
  margin: 10px 0px;
  padding: 20px;

  background: ${props => GRADIENTS[props.i % GRADIENTS.length]};
  box-shadow: 0px 10px 25px -10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const PostTitle = styled.h1`
  margin: 0px;

  font-size: 20px;
  font-family: "Lato", sans-serif;
`;

const PostBody = styled.p`
  font-size: 13px;
  font-family: "Lato", sans-serif;
`;

export default PostItem;
