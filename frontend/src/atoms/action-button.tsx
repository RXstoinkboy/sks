import styled from "styled-components";

export const ActionButton = styled.button`
  height: 4em;
  width: 4em;
  border-radius: 50%;
  border: none;
  box-shadow: 0 1em 2em rgba(0, 0, 0, 0.274);
  color: ${({ theme }) => theme.background};
  font-size: 2em;
`;
