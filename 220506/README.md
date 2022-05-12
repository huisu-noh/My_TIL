## Ch 01. React 맛보기

##### DOM 다루기 / Element 생성하기 정리

- CodeSandBox : 리액트 맛보기 동안 사용할 도구
- Vanilla js Dom : W3Schools / createElement
- CDN : unpkg
- React / React-dom : element 생성 / appendChild

##### JSX 와 Babel / JSX 다루기

- JSX: React.createElement 표현식
- Babel: JavaScript Complier
- JSX 다루기: spread 연산자

##### 멀티 Element 생성하기

- Fragment: React.Frament or <></>

##### Element 찍어내기

- Founction: 재사용이 가능한 Element
- Custom Element: Upper case
- Children 제한: 없음

##### JS 와 JSX 섞어쓰기

- Interpolation: 이미 HTML에서 쓰고 있었다.

###### 프론트엔드 개발의 장점?

- 눈에 보인다.
- 눈으로 **바로 확인**할 수 있다

### Key 와 리렌더링 알아보기

- Key는 Value 를 **특정**하는 **이름**

```jsx
const todos = [
  { id: 1, value: "Wash dishes" },
  { id: 2, value: "Clean the bed" },
  { id: 3, value: "Running" },
  { id: 4, value: "Learnind" },
];

const App = () => {
  const [items, setItems] = React.useState(todos);

  const handleDoneClick = (todos) => {
    setItems((items) => items.filter((items) => item !== todo));
  };
};

const handleRetoreClick = () => {
  setItems((items) => [...items, todos.find((item) => !items.includes(item))]);
  return (
    <>
      {items.map((todo) => (
        <div>
          <span>{todo.value}</span>
          <button onclick={() => handleDoneClick(todo)}>Done</button>
        </div>
      ))}
      <button onclick={handleRetoreClick}>Restore</button>
    </>
  );
};

React.render(<App />, footElement);
```

> React Reconciliation 재조정
> https://ko.reactjs.org/docs/reconciliation.html //
> <img src="./img/1.PNG"> //
> <img src="./img/2.PNG">

- 재사용: key를 제대로 줘야 재사용 가능
- 제대로 준다: 중복없고, 바뀌지 않는

### 상태 끌어올리기

- 로그인 폼
- ID, PASSWORD, BUTTON
- 단, id 와 password **모두입력** 되어 있을때만 button이 enabled 되도록 한다

```jsx
const rootElement = document.getElementById("root");

const ID = (handleIdChange) => {
  return (
    <>
      <label>ID: </label>
      <input onchange={handleIdChange}></input>
    </>
  );
};
const Password = (handlePasswordChange) => {
  return (
    <>
      <label>Password: </label>
      <input type="password" onchange={handlePasswordChange}></input>
    </>
  );
};

const App = () => {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    alert(`id: ${id}, pw: ${password}`);
  };

  return (
    <>
      <ID handleIdChange={handleIdChange}></ID>
      <br />
      <Password handlePasswordChange={handlePasswordChange}></Password>
      <button disabled={id.length === 0 || password.length === 0} onClick={handleLoginClick}>
        Login
      </button>
    </>
  );
};

React.render(<App />, rootElement);
```

- 형제 컴포넌트의 상태 궁금: 필요하면 부모로 lifting up
- Props drilling: 과도한 lifting은 drilling을 야기

### 데이터 Fetch 해보기

> 네트워크 통신
> Fecth API
> https://developer.mozilla.org/ko/docs/Web/API/Fetch_API

- Fetch api: 네트워크 통신 도구
- 상황별 핸들링: 로딩/ 데이터/ 에러
