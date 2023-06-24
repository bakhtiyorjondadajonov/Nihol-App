import styled from "styled-components";

export const ButtonMore = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  transition: background-color 0.3s ease 0s;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;
