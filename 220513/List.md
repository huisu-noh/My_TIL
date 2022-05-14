## React 공식문서로 디테일 잡기 (초급)

## Ch .2

#### 리스트(List and Key)

[React list and key(공식문서)](https://ko.reactjs.org/docs/lists-and-keys.html#rendering-multiple-components)

- 아래는 map()함수를 이용하여 numbers 배열의 값을 두배로 만든 후 map()에서 반환하는 새 배열을 doubled 변수에 할당하고 로그를 확인하는 코드이다.

```
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
이 코드는 콘솔에 [2, 4, 6, 8, 10]을 출력합니다.
```

- React에서 배열을 엘리먼트 리스트로 만드는 방식은 이와 거의 동일하다.

- 이 코드를 실행하면 리스트의 각 항목에 key를 넣어야 한다는 경고가 표시된다.
- <strong><span style='color:red'>“key”는 엘리먼트 리스트를 만들 때 포함해야 하는 특수한 문자열 어트리뷰트이다.</strong>

```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

---

#### key

- Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다.
- <strong><span style='color:red'> key는 엘리먼트에 안정적인 고유성을(유일해야하며,바뀌지 않아야한다) 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.

- Key를 선택하는 가장 좋은 방법은 리스트의 다른 항목들 사이에서 해당 항목을 고유하게 식별할 수 있는 문자열을 사용하는 것입니다.

- 항목의 순서가 바뀔 수 있는 경우 key에 인덱스를 사용하는 것은 권장하지 않습니다. </strong>

---

#### Key로 컴포넌트 추출하기

- 예시: 잘못된 Key 사용법

```
function ListItem(props) {
const value = props.value;
return (
  // 틀렸습니다! 여기에는 key를 지정할 필요가 없습니다.
  <li key={value.toString()}>
    {value}
  </li>
);
}

function NumberList(props) {
const numbers = props.numbers;
const listItems = numbers.map((number) =>
  // 틀렸습니다! 여기에 key를 지정해야 합니다.
  <ListItem value={number} />
);
return (
  <ul>
    {listItems}
  </ul>
);
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
<NumberList numbers={numbers} />,
document.getElementById('root')
);
```

- 예시: 올바른 Key 사용법

```
function ListItem(props) {
// 맞습니다! 여기에는 key를 지정할 필요가 없습니다.
return <li>{props.value}</li>;
}

function NumberList(props) {
const numbers = props.numbers;
const listItems = numbers.map((number) =>
  // 맞습니다! 배열 안에 key를 지정해야 합니다.
  <ListItem key={number.toString()} value={number} />
);
return (
  <ul>
    {listItems}
  </ul>
);
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
<NumberList numbers={numbers} />,
document.getElementById('root')
);
```

---

#### Key는 형제 사이에서만 고유한 값이어야 한다.

- Key는 배열 안에서 형제 사이에서 고유해야 하고 전체 범위에서 고유할 필요는 없습니다.
- 두 개의 다른 배열을 만들 때 동일한 key를 사용할 수 있습니다.

---

![](https://velog.velcdn.com/images/lyl117/post/91a2be95-99ea-411f-ac53-e9ecfdb9e100/image.png)
