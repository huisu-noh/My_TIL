## React 맛보기 (Ch. 01)

- 라이브러리는 개발 편의를 위한 도구의 모음 (= 공구)
- 프레임워크는 기반 구조까지 잡혀있음 (= 공장)

- React
  - 생태계 (구글링) 크다
  - 해당 기술에 대한 관심도/ 실제 사용 빈도/ 사용자수
  - 관련 라이브러리(도구)가 많고,
  - 문제 해결할 방법을 찾기 쉽고,
  - 나와 같은 고민을 한 혹은 했던 사람이 많고,
  - 실무에서 사용할 확률이 높다.
  - 새로운 기술을 배우는 시작점으로 좋다
  - 기술적으로 확실한 장점이 있다.
  - 생태계가 점점 성숙해지면서

> Wappalyzer
> 해당 사이트가 사용하는 기술을 알 수 있음.

### DOM (Document Object Model)

- 문서를 논리 트리로 표현한다.

  > https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model

- 순수 자바스크립
  - 특정 라이브러리나 프레임워크를 사용하지 않은 그 자체의 자바스크립트
    > https://www.w3schools.com/ > https://codesandbox.io/
    > 프론트 엔드 코드를 작성하고 이것 저것 시도해볼 수 잇는 모래상자(놀이도구)
    > React 등 다양한 환경에 대한 기본 설정이 되어있음
- Content Delivery Network

  - 웹에서 사용된는 다양한 컨텐츠(리소스)를 저장하여 제공하는 시스템
    > https://ko.reactjs.org/docs/cdn-links.html

- 샌드박스에서 React 사용시
  `<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>`
  `<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>`

### JSX 과 Babel, JSX 다루기

```html
<body>
  <div id="root"></div>
  <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
  <script>
    const rootElement = document.querySelector("#root");
    const element = React.createElement(
      "h1",
      {
        className: "title",
        children: ["Hello, world!", "It's me!"],
      },
      "Hello, world!"
    );
    ReactDOM.render(element, rootElement);
  </script>
</body>
```

#### JSX

- 문자도 HTML도 아닌 JavaScript의 확장 문법
- React.createElement 표현식
  `const element = <h1>Hello, world!</h1>;`

#### Babel

- JavaScript Complier
- 컴파일러: 언어 해석시, 특정 언어를 다른 프로그랭 언어로 옮기는 프로그램
  > https://babeljs.io/ > https://unpkg.com/@babel/standalone/babel.min.js.
