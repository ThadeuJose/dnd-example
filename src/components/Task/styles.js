import styled from "styled-components";

export const Container = styled.div`
  margin-right: 8px;
  border: 3px solid lightgrey;
  border-radius: 50%;
  padding: 8px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
    border-color: red;
  }
`;
