## React 공식문서로 디테일 잡기 (고급)

## Ch .3

#### Composition

- component 안에서 component를 모아서 출력하는 것

> composition(합성) vs inheritance(상속)
> https://ko.reactjs.org/docs/composition-vs-inheritance.html
> 컴포넌트에서 다른 컴포넌트를 담기
> 어떤 컴포넌트들은 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우가 있다
> 범용적인 ‘박스’ 역할을 하는 Sidebar 혹은 Dialog와 같은 컴포넌트에서 특히 자주 볼 수 있다
> 이러한 컴포넌트에서는 특수한 children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋다

```js
function FancyBorder(props) {
  return <div className={"FancyBorder FancyBorder-" + props.color}>{props.children}</div>;
}
```

- 이러한 방식으로 다른 컴포넌트에서 JSX를 중첩하여 임의의 자식을 전달할 수 있음

```js
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}
```

- 특수화
  - 때로는 어떤 컴포넌트의 “특수한 경우”인 컴포넌트를 고려해야 하는 경우
    - 예를 들어, WelcomeDialog는 Dialog의 특수한 경우
- React에서는 이 역시 합성을 통해 해결
- 더 “구체적인” 컴포넌트가 “일반적인” 컴포넌트를 렌더링하고 props를 통해 내용을 구성
- 컴포넌트에 다른 컴포넌트를 담기

  - 담는방법 (children / custom)

- 상속

  - Facebook에서는 수천 개의 React 컴포넌트를 사용
  - 컴포넌트를 상속 계층 구조로 작성을 권장할만한 사례를 아직 찾지 못 함

- props와 합성

  - 명시적이고 안전한 방법
  - 컴포넌트의 모양과 동작을 커스터마이징하는데 필요한 모든 유연성을 제공
  - 컴포넌트가 원시 타입의 값, React 엘리먼트 혹은 함수 등 어떠한 props도 받을 수 있다는 것을 기억!!

- UI가 아닌 기능을 여러 컴포넌트에서 재사용하기를 원할 때
  - 별도의 JavaScript 모듈로 분리하는 것이 좋음
  - 컴포넌트에서 해당 함수, 객체, 클래스 등을 import 하여 사용 가능
  - 상속받을 필요가 없다

---

typeof > type check  
확장성 > 다양한 상황을 품을 수 있도록

---

#### HOC

> 인자로 컴포넌트를 받고 아웃풋으로 새로운 컴포넌트를 출력하는 컴포넌트
> Higher Order Component
> https://ko.reactjs.org/docs/higher-order-components.html
> 재사용성, 효율을 높여준다

- `고차 컴포넌트`(HOC, Higher Order Component)
  - 컴포넌트 로직을 재사용하기 위한 React의 고급 기술입
  - 고차 컴포넌트(HOC)는 React API의 일부가 아니다
  - `React의 구성적 특성에서 나오는 패턴`
  - `고차 컴포넌트는 컴포넌트를 가져와 새 컴포넌트를 반환하는 함수`

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

- **원본 컴포넌트를 변경 X !!**
- 조합(Composition)을 해야한다
- 고차 컴포넌트 내부에서 컴포넌트의 프로토타입을 수정(또는 변경)하지 않도록 한다

> 컨벤션
> 간단한 디버깅을 위한 디스플레이 네임 작성 방법
> 다른 구성 요소와 마찬가지로 HOC로 만든 컨테이너 구성 요소도 React Developer Tools에 표시
> 디버깅을 쉽게 하려면 HOC의 결과임을 알리는 디스플레이 네임을 작성

> 가장 일반적인 방법
> **HOC의 이름으로 내부 컴포넌트명을 감싸는 것**
> 따라서 HOC의 이름이 withSubscription이고, HOC 내부의 컴포넌트의 이름이 CommentList 인 경우, 디스플레이 네임은 WithSubscription(CommentList)을 사용합니다.

###### render 메서드 안에서 고차 컴포넌트를 사용 X

> ref는 전달되지 않는다
> 문제의 해결 방법은 React.forwardRef API를 사용하는 것
> HOC는 함수를 받아서 함수를 리턴한다.
