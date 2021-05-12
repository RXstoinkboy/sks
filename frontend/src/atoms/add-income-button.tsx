import styled from "styled-components";
import { ActionButton } from "./action-button";

export const AddIncomeButton = styled(ActionButton)`
  background: ${({ theme }) => theme.positive};
`;
