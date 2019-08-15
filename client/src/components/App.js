import React from "react";
import styled from "styled-components";

import AddPost from "./AddPost";
import Posts from "./PostList";

export default function App() {
  return (
    <Page>
      <AddPost />
      <Posts />
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  padding: 30px;
`;
