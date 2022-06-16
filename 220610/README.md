# 220610 ~ 220616

## 미니 프로젝트 기간

### 프로젝트 외 학습한 내용

#### React Props 복습

```jsx
// App.jsx

import React, { useState } from "react";

import Home from "./component/Home";
import Clip from "./component/Clip";

function App() {
  const [news, setNews] = useState([]);

  //{"status":"OK",

  console.log("handler up news:", news);

  const fecthNewsHandler = async () => {
    const response = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=trSbmSW4LczL0n7jtUVEYGEaGjne1QQn`
    );
    const data = await response.json();
    const transformedNews = data.response.docs.map((newsData) => {
      return {
        id: newsData._id,
        title: newsData.abstract,
        date: newsData.pub_date,
      };
    });
    setNews(transformedNews);
    console.log(transformedNews);
    console.log("handler down news:", news);
    console.log("news[0]", news[0]);
  };

  const person = [
    {
      name: "huisu",
      age: 31,
    },
  ];

  return (
    <>
      <section>
        <button onClick={fecthNewsHandler}>Search</button>
      </section>

      {/* 반복문을 사용해서 props 안에 있는 데이터를 꺼내서 뿌려야한다.  */}
      <Home person={person} />
      <Clip />
    </>
  );
}

export default App;

// map 의 retrun을 아예 <Home news={news[i]} 이런식으로는 안되는건가 ? />
```

```jsx
// Home.jsx
import React from "react";

import Age from "./Age";

const Home = (props) => {
  console.log(props.person[0].age);
  const age = props.person[0].age;

  return (
    <div>
      <h1>Home</h1>

      <ul>
        <li>name: {props.person[0].name}</li>
        <Age age={age} />
        <li>ID: {}</li>
        <li>Title: {}</li>
        <li>Date: {}</li>
        <li>
          <button>Clip</button>
        </li>
      </ul>
    </div>
  );
};

export default Home;
```

```jsx
// Age.jsx
import React from "react";

const Age = (props) => {
  console.log(props.age);
  return (
    <div>
      <li>{props.age}</li>
    </div>
  );
};

export default Age;
```

#### React useEffect 복습

- 리액트의 메인 업무는 UI를 렌더링 하는 것인데, side effects는 그외 모든 일들을 말한다.

- `useEffect(()⇒}{}, [dependencies]);`

```jsx
import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
```

#### 종속성으로 추가할 항목 및 추가하지 않을 항목

- effect 함수에서 사용하는 "모든 것"을 종속성으로 추가해야 함을 배웠습니다. 즉, 거기에서 사용하는 모든 상태 변수와 함수를 포함합니다.

- 맞는 말이지만 **몇 가지 예외**가 있습니다. 다음 사항을 알고 있어야 합니다.

- 여러분은 **상태 업데이트 기능을 추가할 필요가 없습니다.** (지난 강의에서 했던 것처럼 `setFormIsValid` 사용): React는 해당 함수가 절대 변경되지 않도록 보장하므로 종속성으로 추가할 필요가 없습니다.
- 여러분은 또한 **"내장" API 또는 함수를 추가할 필요가 없습니다** `fetch()`, 나 `localStorage` 같은 것들 말이죠 (브라우저에 내장된 함수 및 기능, 따라서 전역적으로 사용 가능): 이러한 브라우저 API/전역 기능은 React 구성 요소 렌더링 주기와 관련이 없으며 변경되지 않습니다.
- 여러분은 또한 **변수나 함수를 추가할 필요가 없습니다.** 아마도 **구성 요소 외부에서 정의했을 겁니다** (예: 별도의 파일에 새 도우미 함수를 만드는 경우): 이러한 함수 또는 변수도 구성 요소 함수 내부에서 생성되지 않으므로 변경해도 구성 요소에 영향을 주지 않습니다 (해당 변수가 변경되는 경우, 또는 그 반대의 경우에도 구성 요소는 재평가 되지 않습니다)

- 간단히 말해서: effect 함수에서 사용하는 모든 "것들"을 추가해야 합니다. **구성 요소(또는 일부 상위 구성 요소)가 다시 렌더링 되어 이러한 "것들"이 변경될 수 있는 경우.**그렇기 때문에 컴포넌트 함수에 정의된 변수나 상태, 컴포넌트 함수에 정의된 props 또는 함수는 종속성으로 추가되어야 합니다!

- 예시

```jsx

1. import { useEffect, useState } from 'react';
2.  
3. let myTimer;
4.  
5. const MyComponent = (props) => {
6.   const [timerIsActive, setTimerIsActive] = useState(false);
7.  
8.   const { timerDuration } = props; // using destructuring to pull out specific props values
9.  
10.   useEffect(() => {
11.     if (!timerIsActive) {
12.       setTimerIsActive(true);
13.       myTimer = setTimeout(() => {
14.         setTimerIsActive(false);
15.       }, timerDuration);
16.     }
17.   }, [timerIsActive, timerDuration]);
18. };
```

이 예에서:

- `timerIsActive` 는 **종속성으로 추가되었습니다.** 왜냐하면 구성 요소가 변경될 때 변경될 수 있는 구성 요소 상태이기 때문이죠(예: 상태가 업데이트 되었기 때문에)
- `timerDuration` 은 **종속성으로 추가되었습니다.** 왜냐하면 해당 구성 요소의 prop 값이기 때문입니다 - 따라서 상위 구성 요소가 해당 값을 변경하면 변경될 수 있습니다(이 MyComponent 구성 요소도 다시 렌더링 되도록 함).
- `setTimerIsActive` 는 **종속성으로 추가되지 않습니다.** 왜냐하면 **예외 조건**이기 때문입니다: 상태 업데이트 기능을 추가할 수 있지만 React는 기능 자체가 절대 변경되지 않음을 보장하므로 추가할 필요가 없습니다.
- `myTimer` 는 **종속성으로 추가되지 않습니다.** 왜냐하면 그것은 **구성 요소 내부 변수가 아니기 때문이죠.** (즉, 어떤 상태나 prop 값이 아님) - 구성 요소 외부에서 정의되고 이를 변경합니다(어디 에서 든). **구성 요소가 다시 평가되도록 하지 않습니다.**
- `setTimeout` 은 **종속성으로 추가되지 않습니다** 왜냐하면 그것은 **내장 API이기 때문입니다.** (브라우저에 내장) - React 및 구성 요소와 독립적이며 변경되지 않습니다.
