## React 라이브러리

## ch.4 데이터 모킹 라이브러리

> Mock Service Worker
> 모킹 (Mocking) 이란?
>
> > Mock(모의 데이터)을 만들어서 활용하는 방식
> > 통상적으로 data fetch를 해야하는 경우 통신을 통해 응답을 내려주는 서버가 있어야 함

> 서버가 없는경우
>
> > api 요청으로 내려올 데이터를 프론트에서 모킹하거나
> > 서버의 역할을 해주는 무언가(데이터 fetch 해보기 강의에서는 github)가 필요

> msw
>
> > https://mswjs.io/
> > Interception on the network level
> > Service Worker API
> > REST API & GraphQL support

| msw                |                     |
| ------------------ | ------------------- |
| Mocking            | 모의 데이터 활용    |
| Browser            | Service worker 활용 |
| REST API / GraphQL | 모두 모킹이 가능    |

### Browser

<img src="https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG5cdEJyb3dzZXIgLT4-IFNlcnZpY2UgV29ya2VyOiAxLiByZXF1ZXN0XG4gIFNlcnZpY2UgV29ya2VyIC0tPj4gbXN3OiAyLiByZXF1ZXN0IGNsb25lXG4gIG1zdyAtLT4-IG1zdzogMy4gbWF0Y2ggYWdhaW5zdCBtb2Nrc1xuICBtc3cgLS0-PiBTZXJ2aWNlIFdvcmtlcjogNC4gTW9ja2VkIHJlc3BvbnNlXG4gIFNlcnZpY2UgV29ya2VyIC0-PiBCcm93c2VyOiA1LiByZXNwb25kV2l0aChtb2NrZWRSZXNwb25zZSlcblx0XHRcdFx0XHQiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ">

### 설치하기

- `npm install msw --save-dev`
- `yarn add msw --dev`
- `npx msw init <PUBLIC_DIR> --save`

```js
// index.js 에 추가를 해줘야 사용가능하다.
// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}
```

```jsx
import React, { useState } from 'react';

const Item = ({ name, age }) => {
  return (
    <li>
      name: {name} / age: {age}
    </li>
  );
};

const url =
  'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json';

export default function TestMoking() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    fetch(url)
      .then((Response) => {
        return Response.json();
      })
      .then((json) => {
        setData(json.data);
      })
      .catch((error) => {
        setError(`Something Wrong: ${error}`);
      });
  };

  if (error) return <p>{error}</p>;

  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
      {data && (
        <ul>
          {data.people.map((person) => {
            <Item
              key={`${person.name}-${person.age}`}
              name={person.name}
              age={person.age}
            />;
          })}
        </ul>
      )}
    </div>
  );
}
```

> Query parameters
>
> > https://mswjs.io/docs/recipes/query-parameters

> Response patching
>
> > https://mswjs.io/docs/recipes/response-patching

> Mocking error responses
>
> > https://mswjs.io/docs/recipes/mocking-error-responses

> Context status
>
> > https://mswjs.io/docs/api/context/status

| msw         |                                  |
| ----------- | -------------------------------- |
| mock        | handler / browser 만 있어도 동작 |
| public      | npx msw init<PUBLIC_PATH>        |
| 기타 커스텀 | query, patching, error           |
