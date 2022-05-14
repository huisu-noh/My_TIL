## React 공식문서로 디테일 잡기 (고급)

## Ch .3

#### Hook

##### Side Effect

- Side Effect 는 리액트 컴포넌트가 화면에 1차로 렌더링 된 이후에 비동기로 처리되어야 하는 부수적 효과들을 뜻한다.
- 예를 들어 데이터를 가져오려고 외부 API를 호출 할 때 일단 화면에 렌더링 할수 있는 것은 1차로 먼저 렌더링 하고 실제 데이터는 비동기로 가져오는 것이 권장된다.
- 그 이유는 연동된 API가 응답이 없거나 늦어질 상황이 발생할 수 있기 때문이다.
- 이때 Hook이 Side Effect 를 수행하는 역할을 한다.

---

##### Hook 은 무엇인가?

- hook은 리액트 16.8 버전부터 새로 추가된 요소이다.
- 함수형 컴포넌트가 클래스형 컴포넌트의 기능을 사용할수 있도록 해주는 몇가지 기술을 Hook 이라고 한다.

---

#### Hook의 종류

##### State Hook

- 상태관리를 할수 있는 `useState`
- 함수형 컴포넌트 에서는 클래스형 컴포넌트와 같이 state를 사용할 수 없기 때문에, Hook을 사용해서 state 와 같은 기능을 할 수 있다.

```javascript
const [num, setNum] = useState(0); // 구조분해할당, num 이라는 변수와 num을 변경할 수 있는 setNum 이라는 변경함수.
setNum(num + 1);
console.log(num); // 1
```

---

##### Effect Hook

- Effect Hook : 렌더링 직후 작업을 설정하는 `useEffect`
- 클래스형 컴포넌트와 다르게 Effect Hook 은 side Effect를 수행할때 , `componentDidMount(){}` 와 `componentWillUnmount(){}` 처럼 나눌 필요 없이 `return` 명령어를 사용해 한번에 처리할 수 있다.

##### 클래스형 컴포넌트 lifeCycle Hook.

```js
class ClassC extends React.Component {
  componentDidMount() {
    //ClassC 컴포넌트가 Mount 되고나서 실행할 코드 (첫 등장 후 실행할 코드)
  }
  componentWillUnmount() {
    //ClassC 컴포넌트가 Unmount 되기전에 실행할 코드(다른 페이지로 넘어간다든지 등의 사유로 컴포넌트가 사라지기 전 실행할 코드 )
  }
}
```

##### 함수형 컴포넌트 Effect Hook.

```js
function FuncC() {
  useEffect(() => {
    /* FuncC 컴포넌트가 mount 되기 전에 실행할 코드 */
    return function toDO() {
      /* FuncC 컴포넌트가 Unmount 되기전에 실행할 코드 */
    };
  });
}
```

##### `useEffect` 여러개 사용하기.

- `useEffect` 는 한번에 여러개도 사용 가능하며 위치에 따라 순차적으로 실행된다.

```js
import React, { useState, useEffect } from "react";

function Func() {
  useEffect(() => {
    //첫번째로 실행할 코드
  });
  useEffect(() => {
    //그 다음으로 실행할 코드
  });
}
```

---

#### Hook 사용 규칙

1.  최상위 에서만 Hook을 호출해야 한다. 반복문,조건문,중첩된 함수 내에서 Hook을 실행할 수 없다.
2.  함수형 컴포넌트 내에서만 Hook을 호출해야 한다. 일반 JS 함수 에서는 Hook을 호출해서는 안된다. (custom Hook 내 에서는 호출 가능.)
