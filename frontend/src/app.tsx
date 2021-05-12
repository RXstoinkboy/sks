import React, { FC, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AddIncomeButton } from "./atoms/add-income-button";
import { ActionButtons } from "./molecules/action-buttons/action-buttons";
import { MainContent } from "./templates/main-content";
import { darkTheme, lightTheme } from "./theme";

const App: FC = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = (): void => {
    setTheme((prevState) => {
      return prevState === lightTheme ? darkTheme : lightTheme;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <MainContent>
        <AddIncomeButton onClick={toggleTheme} />
        <h1>hello world</h1>
        <ActionButtons />
      </MainContent>
    </ThemeProvider>
  );
};

export default App;
