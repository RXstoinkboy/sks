import React, { FC, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "./atoms/button/button";
import { ActionButtons } from "./molecules/action-buttons/action-buttons";
import { MainContent } from "./templates/main-content";
import { darkTheme, lightTheme } from "./theme";
import { useTranslation } from "react-i18next";

const App: FC = () => {
  const [theme, setTheme] = useState(lightTheme);
  const { t, i18n } = useTranslation();

  const toggleTheme = (): void => {
    setTheme((prevState) => {
      return prevState === lightTheme ? darkTheme : lightTheme;
    });
  };

  const toggleLanguage = (): void => {
    i18n.changeLanguage(i18n.language === "pl" ? "en" : "pl");
  };

  return (
    <ThemeProvider theme={theme}>
      <MainContent>
        <Button onClick={toggleTheme}>{t("common:theme")}</Button>
        <Button onClick={toggleLanguage}>{t("common:language")}</Button>
        <h1>{t("texts:helloWorld")}</h1>
        <ActionButtons />
      </MainContent>
    </ThemeProvider>
  );
};

export default App;
