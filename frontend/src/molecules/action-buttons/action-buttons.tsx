import React, { FC } from "react"
import { AddExpenseButton } from "../../atoms/add-expense-button"
import { AddIncomeButton } from "../../atoms/add-income-button"
import { ActionButtonsWrapper } from "./action-buttons-wrapper"

export const ActionButtons: FC = () => {
  return (
  <ActionButtonsWrapper>
    <AddExpenseButton>-</AddExpenseButton>
    <AddIncomeButton>+</AddIncomeButton>
  </ActionButtonsWrapper>

  )}
