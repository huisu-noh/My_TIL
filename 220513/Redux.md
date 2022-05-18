## React 라이브러리

## ch.5 Redux

[Redux](https://react-redux.js.org)

- One way data flow
  - multiple components issue
  - Lifting state up
  - Extract shared state from the component tree
- Immutable
  - object / array
  - ...spread
- Terminology
  - action {type, payload}
  - reducer (state, action) => newState
  - store (state lives) created by passing reducer
  - dispatch only way to update state (pass in an action object)
  - selectors extract specific pieces of information from a store state
- Initial setup
  - store created by using reducer function
  - store calls root reducer once save initial state
  - UI first renedered
- Updates
  - Something happend / dispatch action
  - stroe run reducer with prev state & current action save new state
  - notifies all parts store has been updated / Each UI check update
  - need to changed UI re-render

| Redux                    |                                  |
| ------------------------ | -------------------------------- |
| 전역 상태 관리           | vs 지역 상태 관리                |
| 단 방향 데이터(상태)흐름 | Flux                             |
| 구성요소                 | Store, Reducer, Action, Selector |

- 설치하기
- `npm install react-redux`
- `yarn add react-redux`

[Connect API](https://react-redux.js.org/tutorials/connect)

```jsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';

import { Provider } from 'react-redux';
import store from './redux/store';

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
);
```

[Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)

- 설치하기
- `npm install @reduxjs/toolkit`
- `yarn add @reduxjs/toolkit`

| Redux 2         |                              |
| --------------- | ---------------------------- |
| RTK             | Redux 라이브러리들 조합      |
| 라이브러리들    | immer, saga, thunk, reselect |
| Redux Dev Tools | Chrome extension             |

[Hooks](https://react-redux.js.org/api/hooks)

- `useSelector()`
- `npm install axios`

<img src="https://redux.js.org/assets/images/ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif">

| Redux3      |                                       |
| ----------- | ------------------------------------- |
| Hooks       | useSelector , useDispatch             |
| API 통신    | 비동기 작업(RTK-Query)                |
| Redux-Thunk | Action으로 API 요청/결과 Store에 반영 |
