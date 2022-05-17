## React 라이브러리

## Part 2 - ch 02. 스타일링 라이브러리

[CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js)

> CSS의 문제점
>
> > Global Namespace: 글로벌 변수를 지양해하는 JS와 대치
> > Dependencies: CSS간의 의존관리
> > Dead Code Elimination: 안쓰는 CSS 인지 어려움
> > Minification: 클래스 이름 최소화
> > Sharing Constants: JS의 코드와 값을 공유하고 싶음
> > Non-deterministic Resolution: CSS 파일 로드 타이밍 이슈
> > Isolation: 격리

> 스타일 컴포넌트 Styled-components
>
> > https://styled-components.com  
> > https://styled-components.com/docs/basics

- 설치하기
- `npm install --save styled-components`
- `yarn add styled-components`

```jsx
// StyledComponentsExample.jsx
import React from 'react';

// 설치하고 사용하기 위해서 import
import styled from 'styled-components';

export default function StyledComponentsExample() {
  // Create a Title component that'll render an <h1> tag with some styles
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  const Button = styled.button`
    /* Adapt the colors based on primary prop */
    // 조건식도 넣을수 있다
    background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  // A new component based on Button, but with some override styles
  const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
  `;

  // Component 를 확장하면서 사용가능하다.
  const ReversedButton = (props) => (
    <Button {...props} children={props.children.split('').reverse()} />
  );

  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <Button onClick={() => alert('nomal')}>Normal</Button>
      <Button primary onClick={() => alert('primary')}>
        Primary
      </Button>
      <TomatoButton>Tomato</TomatoButton>
      <br />
      <Button as='a' href='#'>
        Link with Button styles
      </Button>
      <TomatoButton as='a' href='#'>
        Link with Tomato Button styles
      </TomatoButton>
      <br />
      <Button as={ReversedButton}>
        Custom Button with Normal Button styles
      </Button>
    </>
  );
}
```

> 스타일 컴포넌트 (styled-components)
>
> > Automatioc critical CSS: 자동 style injects & 코드 스플릿
> > No class name bugs: unique, overlap X , misspellings
> > Easier deletion of CSS: tied to a specific component
> > Simple dynamic styling: props /global theme
> > Painless maintenance: styling affecting your component
> > Automatic vendor prefixing: corrent standard only

| 정리                      |                            |
| ------------------------- | -------------------------- |
| CSS in JS                 | CSS의 문제점을 해소        |
| 해결책                    | 스타일을 style 태그로 분리 |
| 사용법(Template literals) | styled.{element}``         |
| styled(스타일드컴포넌트)  | 상속                       |

[Basic](https://styled-components.com/docs/basics)

#### 재사용성과 속도를 생각해서 style은 렌더링 되는 부분의 밖에 선언한다.

```jsx
import React from 'react';
import styled from 'styled-components';

// 밖에 놔라~! (재사용성과 속도를 위해)

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// Component 를 확장하면서 사용가능하다.
const ReversedButton = (props) => (
  <Button {...props} children={props.children.split('').reverse()} />
);

export default function StyledComponentsExample() {
  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <Button onClick={() => alert('nomal')}>Normal</Button>
      <Button primary onClick={() => alert('primary')}>
        Primary
      </Button>
      <TomatoButton>Tomato</TomatoButton>
      <br />
      <Button as='a' href='#'>
        Link with Button styles
      </Button>
      <TomatoButton as='a' href='#'>
        Link with Tomato Button styles
      </TomatoButton>
      <br />
      <Button as={ReversedButton}>
        Custom Button with Normal Button styles
      </Button>
    </>
  );
}
```

#### 위치에 따라 CSS 적용예시

```jsx
const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;

render(
  <React.Fragment>
    <Thing>Hello world!</Thing>
    <Thing>How ya doing?</Thing>
    <Thing className='something'>The sun is shining...</Thing>
    <div>Pretty nice day today.</div>
    <Thing>Don't you think?</Thing>
    <div className='something-else'>
      <Thing>Splendid.</Thing>
    </div>
  </React.Fragment>
);
```

#### input CSS 적용예시

```jsx
const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: 'text',

  // or we can define dynamic ones
  size: props.size || '1em',
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

render(
  <div>
    <Input placeholder='A small text input' />
    <br />
    <Input placeholder='A bigger text input' size='2em' />
  </div>
);
```

#### 애니메이션

```jsx
import styled, { keyframes } from 'styled-components';
// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

render(<Rotate>&lt; 😍 &gt;</Rotate>);
```

#### Theming

```jsx
import styled, { ThemeProvider } from 'styled-components';
// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
};

// Define what props.theme will look like
const theme = {
  main: 'mediumseagreen',
};

render(
  <div>
    <Button>Normal</Button>

    <ThemeProvider theme={theme}>
      <Button>Themed</Button>
    </ThemeProvider>
  </div>
);
```

#### toggle 을 이용해서 Theming

```jsx
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

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
```

#### Helpers

- `createGlobalStyle`
- 모든 페이지에 공통으로 적용시킬 때 유용함
- 포함된 div 뿐만 아니라 그 밖의 영역까지 적용됨

```jsx
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`

// later in your app

<React.Fragment>
  <GlobalStyle whiteColor />
  <Navigation /> {/* example of other top-level stuff */}
</React.Fragment>
```

| styled-components |                            |
| ----------------- | -------------------------- |
| &                 | 가상 엘리먼트/ 가상 선택자 |
| Global Style      | 전역스타일                 |
| attrs             | props addition             |
| keyframes         | Animation                  |
| ThemeProvider     | Theme                      |
