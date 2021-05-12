import styled from "styled-components";
import { ActionButton } from "./action-button";

export const AddExpenseButton = styled(ActionButton)`
  background: ${({ theme }) => theme.negative};
`;
