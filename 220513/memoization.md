## React 공식문서로 디테일 잡기 (고급)

## Ch .3

#### Memoization 메모이제이션

- 메모이제이션은 컴퓨터 프로그램이 **동일한 계산**을 **반복**해야 할 때, 이전에 계산한 값을 **메모리에 저장**함으로써 동인한 계산의 반복 수행의 제거하여 프로그램 실행 속도를 빠르게 하는 기술이다.
- https://ko.wikipedia.org/wiki/%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98

```js
// App.js
import "./App.css";
import Memo from "./components/3-8.Memoization/Memo";

function App() {
  return (
    <div className="App">
      <Memo />
    </div>
  );
}

export default App;
```

```jsx
// Memo.jsx
import React, { useState } from "react";
import Comments from "./Comments";

const commentList = [
  { title: "comment1", content: "message1", likes: 1 },
  { title: "comment2", content: "message2", likes: 1 },
  { title: "comment3", content: "message3", likes: 1 },
];

export default function Memo() {
  const [comments, setComments] = useState(commentList);
  return <Comments commentList={comments} />;
}
```

```jsx
// Comments.jsx
import React from "react";
import CommentsItem from "./CommentItem";

export default function Comments({ commentList }) {
  return (
    <div>
      {commentList.map((comment) => (
        <CommentsItem key={comment.title} title={comment.title} content={comment.content} likes={comment.likes} />
      ))}
    </div>
  );
}
```

```jsx
// CommentItem.jsx
import React from "react";
import "./CommentItem.css";

export default function CommentItem({ title, content, likes }) {
  return (
    <div className="CommentItem">
      <span>{title}</span>
      <br />
      <span>{content}</span>
      <br />
      <span>{likes}</span>
    </div>
  );
}
```

```css
/* CommentItem.css */
.CommentItem {
  border-bottom: 1px solid gray;
  padding: 10px;
  cursor: pointer;
  background-color: pink;
}
```

#### React.memo

- https://ko.reactjs.org/docs/react-api.html#reactmemo
  <img src="./img/memo.png">
- 동일한 props 로 렌더링을 한다면, React.memo를 사용하여 성능향상을 누릴 수 있다
- memo를 사용하면 React는 컴포넌트를 렌더링하지 않고 마지막으로 렌더링된 결과를 재사용 한다.

```jsx
// CommentItem.jsx
import React, { memo } from "react";
import "./CommentItem.css";
export default memo(CommentItem);
```

```jsx
// App.jsx 설정된 시간에 맞춰서 계속 comment 생성
export default function Memo() {
  const [comments, setComments] = useState(commentList);

  // 시간에 맞춰서 계속 생성
  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prevComments) => [
        ...prevComments,
        {
          title: `comment${prevComments.length + 1}`,
          content: `message${prevComments.length + 1}`,
          likes: 1,
        },
      ]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Comments commentList={comments} />;
}
```

#### Profiler

- https://ko.reactjs.org/docs/profiler.html
  > Profiler는 React 애플리케이션이 렌더링하는 빈도와 렌더링 “비용”을 측정합니다.
  > Profiler의 목적은 메모이제이션 같은 성능 최적화 방법을 활용할 수 있는 애플리케이션의 느린 부분들을 식별해내는 것입니다.

```jsx
// Memo.jsx
import React, { useEffect, useState } from "react";
import Comments from "./Comments";

const commentList = [
  { title: "comment1", content: "message1", likes: 1 },
  { title: "comment2", content: "message2", likes: 1 },
  { title: "comment3", content: "message3", likes: 1 },
];

export default function Memo() {
  const [comments, setComments] = useState(commentList);

  // 시간에 맞춰서 계속 생성
  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prevComments) => [
        ...prevComments,
        {
          title: `comment${prevComments.length + 1}`,
          content: `message${prevComments.length + 1}`,
          likes: 1,
        },
      ]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Comments commentList={comments} />;
}
```

```jsx
// Comments.jsx
import React, { useCallback } from "react";
import CommentsItem from "./CommentItem";

export default function Comments({ commentList }) {
  const handleClick = useCallback(() => {
    console.log("눌림");
  }, []);
  return (
    <div>
      {commentList.map((comment) => (
        <CommentsItem
          key={comment.title}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
```

```jsx
// CommentItem.jsx
import React, { Profiler, memo, useState, useMemo } from "react";
import "./CommentItem.css";

function CommentItem({ title, content, likes, onClick }) {
  const [clickCount, setClickCount] = useState(0);

  function onRenderCallback(
    id, // 방금 커밋된 Profiler 트리의 "id"
    phase, // "mount" (트리가 방금 마운트가 된 경우) 혹은 "update"(트리가 리렌더링된 경우)
    actualDuration, // 커밋된 업데이트를 렌더링하는데 걸린 시간
    baseDuration, // 메모이제이션 없이 하위 트리 전체를 렌더링하는데 걸리는 예상시간
    startTime, // React가 언제 해당 업데이트를 렌더링하기 시작했는지
    commitTime, // React가 해당 업데이트를 언제 커밋했는지
    interactions // 이 업데이트에 해당하는 상호작용들의 집합
  ) {
    // 렌더링 타이밍을 집합하거나 로그...
    console.log(`actualDuration(${title}: ${actualDuration})`);
  }

  const handleClick = () => {
    onClick();
    setClickCount((prev) => prev + 1);
    alert(`${title} 눌림`);
  };

  const rate = useMemo(() => {
    console.log("rate check");
    return likes > 10 ? "Good" : "Bad";
  }, [likes]);

  return (
    <Profiler id="CommentItem" onRender={onRenderCallback}>
      <div className="CommentItem" onClick={handleClick}>
        <span>{title}</span>
        <br />
        <span>{content}</span>
        <br />
        <span>{likes}</span>
        <br />
        <span>{rate}</span>
        <br />
        <span>{clickCount}</span>
      </div>
    </Profiler>
  );
}

export default memo(CommentItem);
```

- 정리

  - Memoization
  - React.memo: HOC / Props 비교하여 메모
  - Profiler: 리액트 성능 분석 도구
  - callback: useCallback
  - vaiue: useMemo

#### 중간 복습

> Composition
> Composition: 컴포넌트에 컴포넌트 담기
> 담는 방법: Childeren, Custom
> typeof: type check
> 확장성: 다양한 상황을 품을 수 있도록

> HOC
> HOC: 함수를 받아서 함수를 리턴

> Memoization
> React.memo: HOC / Props 비교하여 메모
> Profiler: 리액트 성능 분석 도구
> callback: useCallback
> vaiue: useMemo

<img src="./img/useCallback.png"><br/>
<img src="./img/useMemo.png">

- 무언가를 만들려면?
- 스타일링이 막연하다면?
  - 다른 사이트를 카피해라 (습작, 따라 그리기, 반복연습)
  - 개발자도구로 스타일을 다 들여다 볼 수 있다.
  - 동작도 카피해봐라
  - 검색하면 다 나온다 (까짓것 하면 되지~ 라는 마인드가 중요!)
