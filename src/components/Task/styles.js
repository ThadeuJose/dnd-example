import styled from "styled-components";

export const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  background-color: ${(props) => defineBackgroundColor(props)};
`;

const defineBackgroundColor = (props) => {
  if (props.isDragDisabled) {
    return "lightgrey";
  }
  if (props.isDragging) {
    return "lightgreen";
  }
  return "white";
};
