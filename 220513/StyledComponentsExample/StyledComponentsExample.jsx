import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// 밖에 놔라~! (재사용성과 속도를 위해)

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.borderColor};
`;

// Define what props.theme will look like
const defaultTheme = {
  color: 'green',
  borderColor: 'green',
};

const redTheme = {
  color: 'red',
  borderColor: 'red',
};

export default function StyledComponentsExample() {
  const [theme, setTheme] = useState(defaultTheme);
  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <>
      <div>
        <button
          onClick={() => {
            setTheme(redTheme);
          }}
        >
          red
        </button>
        <button
          onClick={() => {
            setTheme(defaultTheme);
          }}
        >
          green
        </button>
        <ThemeProvider theme={theme}>
          <Button>Normal</Button>
          <Button>Themed</Button>
        </ThemeProvider>
      </div>
    </>
  );
}
