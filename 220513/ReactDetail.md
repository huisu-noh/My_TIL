## React 공식문서로 디테일 잡기 (고급)

## Ch .3

#### Context

[Context](https://ko.reactjs.org/docs/context.html)

- context : 컴포넌트 트리를 넘어 데이터를 공유할 수 있는 방법

- context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있다

- **언제 context를 써야 할까**

  - context는 React 컴포넌트 트리 안에서 전역적(global)이라고 볼 수 있는 데이터를 공유할 수 있도록 고안된 방법
  - 그러한 데이터로는 현재 로그인한 유저, `테마`, 선호하는 언어 등이 있습니다.

- 여러 레벨에 걸쳐 props 넘기는 걸 대체하는 데에 context보다 컴포넌트 합성이 더 간단한 해결책일 수도 있습니다.

> 단축키
>
> > rcc 탭 (react class compononet)
> > rfc 탭 (react functional component)

> 컴포넌트 트리 제약 > props drilling의 한계 해소  
> 재사용성 > context를 사용하면 재사용하기 어려움  
> API > createContext / Provider / Consumer  
> userContext > Consumer 대체

#### Portal

- DOM 게층 구조 바깥에 있는 DOM 노드로 자식을 렌더링하는 최고의 방법

[Portal](https://ko.reactjs.org/docs/portals.html)

- Portals
  - createPortal > 부모 컴포넌트 DOM 트리로부터 벗어나기
  - 이벤트 > portal에 있더라도 Event는 트리로 전파

#### Render Props

- 재사용의 한 방법(composition / HOC / render props)

[Render Props](https://ko.reactjs.org/docs/render-props.html)

- React 컴포넌트 간에 코드를 공유하기 위해 함수 props를 이용하는 간단한 테크닉입니다.

> render props > 무엇을 렌더링할 지 알려주는 함수  
> render일 필요 없음, children도 되고 뭐든 됨  
> PureComponent > props, state와 비교하여 성능 최적화

#### 중간복습

> Context
>
> > 컴포넌트 트리 제약 - props drilling 한계 해소
> > 재사용성 : Context를 사용하면 재사용하기 어려움
> > API : createContext / Provider / Consumer  
> >  useContext : Consumer 대체

> Portals
>
> > createPortal > 부모 컴포넌트 DOM 트리로부터 벗어나기  
> > 이벤트 > Portal에 있더라도 Event는 트리로 전파

> Render Props
>
> > render props : 무엇을 렌더링할 지 알려주는 함수  
> > render일 필요는 없다. children도 되고 뭐든 됨  
> > PureComponent > props, state 비교하여 성능 최적화

> 주변에 개발을 잘하는 사람의 특징은?
>
> > 개발을 진짜 좋아한다. (새로운 것에 대한 추구)  
> > 책임감이 강하다.  
> > 센스가 좋다.(게으름+일머리)  
> > 근본을 파고든다.(Why에 대한 답을 확실하게 알고 넘어간다.)

**제일 잘하는 사람은 `책임감`을 갖고 `근본`을 파고드는 사람**

---

[React propTypes와 함께 하는 타입검사](https://ko.reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper)

#### propTypes

- props의 타입을 확인하기 위한 도구 (like, flow, typescript 같은 정적 타이핑 도구)
- 개발 모드에서만 동작 => 유효하지 않은 prop에 대한 경고
- custom => RegExp등으로 사용자 정의 가능
- children 제한 => 원래 제약 없던 갯수 제약 가능

---

###### 타입을 체크하고, 버그를 미리 잡게 해준다.

```jsx
import PropTypes from "prop-types";

MyComponent.propTypes = {
  // prop가 특정 JS 형식임을 선언할 수 있다.
  // 이것들은 기본적으로 모두 선택 사항이다.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // 랜더링 될 수 있는 것들은 다음과 같다.
  // 숫자(numbers), 문자(strings), 엘리먼트(elements), 또는 이러한 타입들(types)을 포함하고 있는 배열(array) (혹은 배열의 fragment)
  optionalNode: PropTypes.node,

  // React 엘리먼트.
  optionalElement: PropTypes.element,

  // React 엘리먼트 타입 (ie. MyComponent)
  optionalElementType: PropTypes.elementType,

  // prop가 클래스의 인스턴스임을 선언할 수 있다.
  // 이 경우 JavaScript의 instanceof 연산자를 사용한다.
  optionalMessage: PropTypes.instanceOf(Message),

  // 열거형(enum)으로 처리하여 prop가 특정 값들로 제한되도록 할 수 있다.
  optionalEnum: PropTypes.oneOf(["News", "Photos"]),
  // News와 photos 둘중 하나여야 한다.

  // 여러 종류중 하나의 종류가 될 수 있는 객체
  optionalUnion: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Message)]),

  // 특정 타입의 행렬
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // 특정 타입의 프로퍼티 값들을 갖는 객체
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // 특정 형태를 갖는 객체
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  }),

  // 추가 프로퍼티에 대한 경고가 있는 객체
  optionalObjectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number,
  }),

  // 위에 있는 것 모두 `isRequired`와 연결하여 prop가 제공되지 않았을 때
  // 경고가 보이도록 할 수 있다.
  requiredFunc: PropTypes.func.isRequired,

  // 모든 데이터 타입이 가능한 필수값
  requiredAny: PropTypes.any.isRequired,

  // 사용자 정의 유효성 검사기를 지정할 수도 있다.
  // 검사 실패 시에는 에러(Error) 객체를 반환해야 한다.
  // `oneOfType`안에서는 작동하지 않으므로 `console.warn` 혹은 throw 하지 말기.
  customProp: function (props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error("Invalid prop `" + propName + "` supplied to" + " `" + componentName + "`. Validation failed.");
    }
  },

  // `arrayOf` 와 `objectOf 에 사용자 정의 유효성 검사기를 적용할 수 있다.
  // 검사 실패 시에는 에러(Error) 객체를 반환해야 한다.
  // 유효성 검사기는 배열(array) 혹은 객체의 각 키(key)에 대하여 호출될 것이다.
  // 유효성 검사기의 첫 두 개의 변수는 배열 혹은 객체 자신과 현재 아이템의 키다.

  customArrayProp: PropTypes.arrayOf(function (propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        "Invalid prop `" + propFullName + "` supplied to" + " `" + componentName + "`. Validation failed."
      );
    }
  }),
};
```

---

#### 하나의 자식만 요구하기

- PropTypes.element를 이용하여 컴포넌트의 자식들(Children)에 단 하나의 자식(Child)만이 전달될 수 있도록 명시할 수 있다.

```jsx
import PropTypes from "prop-types";

class MyComponent extends React.Component {
  render() {
    // 이것은 반드시 하나의 엘리먼트여야 한다. 아니라면, 경고(warn)가 일어날 것이다.
    const children = this.props.children;
    return <div>{children}</div>;
  }
}

MyComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
```

---

#### 초기 prop값

- defaultProps 프로퍼티를 할당함으로써 props의 초깃값을 정의할 수 있다.

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// props의 초깃값을 정의한다.
Greeting.defaultProps = {
  name: "Stranger",
};

// "Hello, Stranger"를 랜더링 한다.
ReactDOM.render(<Greeting />, document.getElementById("example"));
```

---

```jsx
class Greeting extends React.Component {
  static defaultProps = {
    name: "stranger",
  };

  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}
```

- defaultProps는 this.props.name의 값이 부모 컴포넌트에 의해 명시되지 않았을 때 값을 갖도록 할 것입니다.
- propTypes의 타입 검사는 defaultProps에도 적용되게 하기 위하여 defaultProps가 처리된 뒤에 일어날 것입니다.

---

#### Function Components

- 함수 컴포넌트를 사용해서 개발한다면,
- PropTypes를 적절히 적용할 수 있도록 몇 가지 작은 변경사항을 만들어낼 수도 있습니다.

```jsx
import PropTypes from "prop-types";

function HelloWorldComponent({ name }) {
  return <div>Hello, {name}</div>;
}

HelloWorldComponent.propTypes = {
  name: PropTypes.string,
};

export default HelloWorldComponent;
```

- PropTypes를 추가하려면 아래처럼 컴포넌트를 외부에 노출시키기 전에 별도의 함수로 컴포넌트를 선언할 수 있습니다.
- 그러면, HelloWorldComponent에 직접 PropTypes를 추가할 수 있습니다.

---

[React reconciliation](https://ko.reactjs.org/docs/reconciliation.html#gatsby-focus-wrapper)

#### Reconciliation

- 실제 Dom과 virtual dom의 동기화를 하는것이 재조정이라고 한다.

---

##### 비교 알고리즘(Diffing algorithm)

- 두 개의 트리를 비교할 때, React는 두 엘리먼트의 루트(root) 엘리먼트부터 비교합니다.
- 이후의 동작은 루트 엘리먼트의 타입에 따라 달라집니다.

##### 엘리먼트 타입이 다른 경우

- 두 루트 엘리먼트의 타입이 다르면, React는 이전 트리를 버리고 완전히 새로운 트리를 구축합니다.

##### DOM 엘리먼트의 타입이 같은 경우

- 같은 타입의 두 React DOM 엘리먼트를 비교할 때, React는 두 엘리먼트의 속성을 확인하여, 동일한 내역은 유지하고 변경된 속성들만 갱신합니다.

  1.클래스가 바뀌는 경우

```jsx
<div className="before" title="stuff" />

<div className="after" title="stuff" />
```

2. 스타일이 바뀌는 경우

```jsx
<div style={{color: 'red', fontWeight: 'bold'}} />

<div style={{color: 'green', fontWeight: 'bold'}} />
```

- DOM 노드의 처리가 끝나면, React는 이어서 해당 노드의 자식들을 재귀적으로 처리합니다.

##### 같은 타입의 컴포넌트 엘리먼트

- 컴포넌트가 갱신되면 인스턴스는 동일하게 유지되어 렌더링 간 state가 유지됩니다.
- React는 새로운 엘리먼트의 내용을 반영하기 위해 현재 컴포넌트 인스턴스의 props를 갱신합니다.
- 이때 해당 인스턴스의 UNSAFE_componentWillReceiveProps(), UNSAFE_componentWillUpdate(), componentDidUpdate를 호출합니다.

- 다음으로 render() 메서드가 호출되고 비교 알고리즘이 이전 결과와 새로운 결과를 재귀적으로 처리합니다.

---

##### 자식에 대한 재귀적 처리

- DOM 노드의 자식들을 재귀적으로 처리할 때, React는 기본적으로 동시에 두 리스트를 순회하고 차이점이 있으면 변경을 생성합니다.

---

##### key

```html
<ul>
  <li>first</li>
  <li>second</li>
</ul>

<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
```

1. React는 두 트리에서 `<li>first</li>`가 일치하는 것을 확인하고,
1. `<li>second</li>`가 일치하는 것을 확인합니다.
1. 그리고 마지막으로 `<li>third</li>`를 트리에 추가합니다.

- 하지만 위와 같이 단순하게 구현하면, 리스트의 맨 앞에 엘리먼트를 추가하는 경우 성능이 좋지 않습니다.
- 예를 들어, 아래의 두 트리 변환은 형편없이 작동합니다.

```html
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```

- React는 `<li>Duke</li>`와 `<li>Villanova</li>` 종속 트리를 그대로 유지하는 대신 모든 자식을 변경합니다.
- 이러한 비효율은 문제가 될 수 있습니다.

---

#### keys

```html
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

- 이러한 문제를 해결하기 위해, React는 key 속성을 지원합니다.
- 자식들이 key를 가지고 있다면, React는 key를 통해 기존 트리와 이후 트리의 자식들이 일치하는지 확인합니다.
- 위 비효율적인 예시에 key를 추가하여 트리의 변환 작업이 효율적으로 수행되도록 수정할 수 있습니다.
- `children`까지 보지 않아도 다른것을 파악하고 빨리 바꿀 수 있다.

- 엘리먼트는 일반적으로 식별자를 가지고 있을 것이고, 그대로 해당 데이터를 key로 사용할 수 있습니다.

```html
<li key="{item.id}">{item.name}</li>
```

- 이러한 상황에 해당하지 않는다면, 여러분의 데이터 구조에 ID라는 속성을 추가해주거나 데이터 일부에 해시를 적용해서 key를 생성할 수 있습니다.
- 해당 key는 오로지 형제 사이에서만 유일하면 되고, 전역에서 유일할 필요는 없습니다.

- 최후의 수단으로 배열의 인덱스를 key로 사용할 수 있습니다.
- 항목들이 재배열되지 않는다면 이 방법도 잘 동작할 것이지만, 재배열되는 경우 비효율적으로 동작할 것입니다.

- 인덱스를 key로 사용 중 배열이 재배열되면 컴포넌트의 state와 관련된 문제가 발생할 수 있습니다.
- 컴포넌트 인스턴스는 key를 기반으로 갱신되고 재사용됩니다.
- 인덱스를 key로 사용하면, 항목의 순서가 바뀌었을 때 key 또한 바뀔 것입니다.
- 그 결과로, 컴포넌트의 state가 엉망이 되거나 의도하지 않은 방식으로 바뀔 수도 있습니다.

---

## Virtual Dom

#### Virtual Dom이란?

> Virtual DOM (VDOM)은 UI의 이상적인 또는 “가상”적인 표현을 메모리에 저장하고 ReactDOM과 같은 라이브러리에 의해 “실제” DOM과 동기화하는 프로그래밍 개념입니다. 이 과정을 재조정이라고 합니다.

> 그러나 React는 컴포넌트 트리에 대한 추가 정보를 포함하기 위해 “fibers”라는 내부 객체를 사용합니다. 또한 React에서 “virtual DOM” 구현의 일부로 간주할 수 있습니다.

---

## Design Principle

### 합성

- React의 핵심 기능은 <strong>컴포넌트의 합성입니다.</strong>

- <strong><span style='color:red'>컴포넌트에서 state나 생명주기 메서드를 사용하는 것에 대해 “나쁜 것”은 없습니다. </strong>
- 다른 강력한 기능과 마찬가지로 적당히 사용해야 할 필요가 있지만, 우리는 그것들을 제거할 생각은 없습니다.
- 오히려 우리는 그것들이 React를 유용하게 만드는 데에 매우 중요한 부분이라고 생각합니다.
- <strong>장래에 보다 함수적인 패턴을 사용 가능하게 할 지도 모르겠습니다만,</strong>
- 로컬 state와 생명주기 메서드는 모두 그 모델의 일부가 될 것입니다

### 스케줄링

- 컴포넌트가 함수로 기술되어 있어도 React를 사용할 때 그것을 직접 호출하지는 마세요.
- 모든 컴포넌트는 무엇을 렌더링할 필요가 있는 것인지에 대한 설명을 반환하고 <LikeButton>과 같은 사용자가 정의한 컴포넌트와 <div>와 같은 플랫폼 고유의 컴포넌트를 모두 포함할 수 있습니다.

총정리
![](https://velog.velcdn.com/images/lyl117/post/098e08b3-ecdb-4a4a-8223-764ae2d8d856/image.png)
