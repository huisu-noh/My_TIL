## React 라이브러리

## Part 2 - ch 03 ~ 04. Emotion

- emotion.js는 CSS-in-JS의 종류 중 하나로 JavaScript 안에서 스타일을 작성할 수 있게 해준다.

- emotion.js는 주로 Framework Agnostic(\*쉽게 말하면 프레임워크를 사용하지 않는 것)과 React 두 가지 방식으로 사용된다.

#### CSS-in-JS 사용하는 이유

- component로 만들어서 재사용 용이
- 중복되는 className 해결(Global namespace)
- JS에서 쓰이는 상수, props, 함수 공유하기
- 상속에 의한 영향이 없도록 격리 (Isolation)
- 미사용 코드 처리(Deard Code Elimination)

#### 설치

```
# Framework Agnostic
$ npm install @emotion/css

# React
$ npm install @emotion/react
```

#### import

```js
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

# create-react-app 으로 생성한 프로젝트일 경우
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
```

#### 기본 구조

- 공식 문서의 예제

```js
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const color = "white";

const divStyle = css`
  background-color: orange;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  &:hover {
    color: ${color};
    font-size: 30px;
    padding: 28px;
  }
`;

export default function Emotion() {
  return <div css={divStyle}>Hover to change color & size.</div>;
}
```

#### Composition

- CSS 내에서 CSS 사용

```js
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const base = css`
  color: hotpink;
`;

render(
  <div
    css={css`
      ${base};
      background-color: #eee;
    `}
  >
    This is hotpink.
  </div>
);
```

#### Object Styles

- Camel Case 로 작성.

```js
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

render(
  <div
    css={{
      color: "darkorchid",
      backgroundColor: "lightgray",
    }}
  >
    This is darkorchid.
  </div>
);
```

#### Child Selectors

```js
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

render(
  <div
    css={{
      color: "darkorchid",
      "& .name": {
        color: "orange",
      },
    }}
  >
    This is darkorchid.
    <div className="name">This is orange</div>
  </div>
);
```

#### Nested Selectors

- 명시적으로 클래스 선택.

```js
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const paragraph = css`
  color: turquoise;

  a {
    border-bottom: 1px solid red;
    cursor: pointer;
  }
`;
render(
  <p css={paragraph}>
    Some text.
    <a>A link with a bottom border.</a>
  </p>
);
```

#### MediaQuery

```js
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

render(
  <p
    css={css`
      font-size: 30px;
      @media (min-width: 420px) {
        font-size: 50px;
      }
    `}
  >
    Some text!
  </p>
);
```

#### Global Styles

- 전역으로 적용할 스타일

```js
import { Global, css } from "@emotion/react";

render(
  <div>
    <Global
      styles={css`
        .some-class {
          color: hotpink !important;
        }
      `}
    />
    <Global
      styles={{
        ".some-class": {
          fontSize: 50,
          textAlign: "center",
        },
      }}
    />
    <div className="some-class">This is hotpink now!</div>
  </div>
);
```

#### keyframes

- keyframes를 통하여 기존 CSS에서 사용하였던 애니메이션 keyframe을 그대로 사용할 수 있다.

```js
import { css, keyframes } from "@emotion/react";

function Animation1() {
  return (
    <div>
      <h2>emotion Animation</h2>
      <div className="wrap">
        <div className="box" css={boxStyle}></div>
      </div>
    </div>
  );
}

const floating = keyframes`
    0 {
        transform: translateY(0);    
    }
    50% {
        transform: translateY(-15px);
    }
    100% {
        transform: translateY(0);
    }
`;

const boxStyle = css`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: #a951bf;
  animation: ${floating} 2s ease infinite;
`;

export default Animation1;
```
