import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import themes from "./utils/themes";

const Flexbox = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: ${props => props.theme.bodygradient};
`;

const Box1 = styled.div`
  width: 200px;
  height: 200px;
  background: ${props => props.theme.primary};
`;

const Box2 = styled.div`
  width: 200px;
  height: 200px;
  background: ${props => props.theme.secondary};
`;

const Box3 = styled.div`
  width: 200px;
  height: 200px;
  background: ${props => props.theme.tertiary};
`;

const ThemeSwitch = styled.button`
  width: 200px;
  height: 50px;
`;

function App() {
  const [theme, setTheme] = React.useState(themes.default);

  function handleClick() {
    if (theme === themes.default) {
      setTheme(themes.special);
    } else {
      setTheme(themes.default);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Flexbox>
        <Box1></Box1>
        <Box2></Box2>
        <Box3></Box3>
        <ThemeSwitch onClick={handleClick}>switch that theme!</ThemeSwitch>
      </Flexbox>
    </ThemeProvider>
  );
}

export default App;
