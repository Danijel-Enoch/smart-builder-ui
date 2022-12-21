import styled from "styled-components";

export const TokenHomeContainer = styled.div`
  width: 50%;
  height: 80%;
  padding: 3%;
  margin: auto;
  margin-top: 5%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  & > img {
    width: 70%;
    height: 50%;
    margin: auto;
    object-fit: cover;
  }
`;

export const TokenHomeContent = styled.div`
  width: 100%;
  height: 50%;
  padding-top: 10%;
`;
