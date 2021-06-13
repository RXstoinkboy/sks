import React, { FC } from "react";
import { Button, ButtonVariant } from "../../atoms/button/button";
import { ActionButtonsWrapper } from "./action-buttons-wrapper";

export const ActionButtons: FC = () => {
  const handleClick = (): void => {
    console.log("hello world");
  };
  return (
    <ActionButtonsWrapper>
      <Button onClick={handleClick} round variant={ButtonVariant.PRIMARY}>
        -
      </Button>
      <Button onClick={handleClick} round variant={ButtonVariant.PRIMARY}>
        +
      </Button>
    </ActionButtonsWrapper>
  );
};
