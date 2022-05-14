## React 공식문서로 디테일 잡기 (초급)

## Ch .2

#### 이벤트(Event)

---

> React 이벤트 처리하기(공식문서)
> https://ko.reactjs.org/docs/handling-events.html

리액트 엘리먼트에서 이벤트 처리하는 방식은 DOM 엘리먼트에서 이벤트를 처리하는 방식과 매우 유사하다.

- React의 이벤트는 소문자 대신 <strong>카멜 케이스(camelCase)</strong>를 사용한다.
- JSX를 사용하여 문자열이 아닌 함수로 <strong>이벤트 핸들러를</strong> 전달한다.

```
//HTML
<button onclick="activateLasers()">
	Active Lasers
</button>
//React
<button onclick={activateLasers}>
	Activate Lasers
</button>
```

1. 카멜 케이스 방식으로 만든다.(onClick)
2. 브레이스를({}) 이용해 자바스크립트 함수 자체를 전달한다.

---

- 또 다른 차이점으로, <strong><span style='color:red'>React에서는 false를 반환해도 기본 동작을 방지할 수 없다. 반드시 preventDefault를 명시적으로 호출해야 한다. </strong><span>

```
function Form() {
function handleSubmit(e) {
  e.preventDefault();
  console.log('You clicked submit.');
}

return (
  <form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
  </form>
);
}
```

- React를 사용할 때 DOM 엘리먼트가 생성된 후 리스너를 추가하기 위해 addEventListener를 호출할 필요가 없다.
- <strong><span style='color:red'>대신, 엘리먼트가 처음 렌더링될 때 리스너를 제공하면 된다.</strong><span>

---

- ES6 클래스를 사용하여 컴포넌트를 정의할 때, 일반적인 패턴은 이벤트 핸들러를 클래스의 메서드로 만드는 것입니다.

```
class Toggle extends React.Component {
constructor(props) {
  super(props);
  this.state = {isToggleOn: true};

  // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
  }));
}

render() {
  return (
    <button onClick={this.handleClick}>
      {this.state.isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
}
}

ReactDOM.render(
<Toggle />,
document.getElementById('root')
);
```

- 예를 들어, 다음 Toggle 컴포넌트는 사용자가 “ON”과 “OFF” 상태를 토글 할 수 있는 버튼을 렌더링합니다.

- JSX 콜백 안에서 <span style='color:blue'>this의 의미에 대해 주의해야 합니다.
- JavaScript에서 클래스 메서드는 기본적으로 바인딩되어 있지 않습니다.
- this.handleClick을 바인딩하지 않고 onClick에 전달하였다면, 함수가 실제 호출될 때 this는 undefined가 됩니다.

- 이는 React만의 특수한 동작이 아니며, JavaScript에서 함수가 작동하는 방식의 일부입니다.
- 일반적으로 onClick={this.handleClick}과 같이 뒤에 ()를 사용하지 않고 메서드를 참조할 경우, 해당 메서드를 바인딩 해야 합니다.

- 실험적인 퍼블릭 클래스 필드 문법을 사용하고 있다면, 클래스 필드를 사용하여 콜백을 올바르게 바인딩할 수 있습니다.

**클래스 필드 문법을 사용하고 있지 않다면, 콜백에 화살표 함수를 사용하는 방법**

```
class LoggingButton extends React.Component {
handleClick() {
  console.log('this is:', this);
}

render() {
  // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
  return (
    <button onClick={() => this.handleClick()}>
      Click me
    </button>
  );
}
}
```

- 이 문법의 문제점은 LoggingButton이 렌더링될 때마다 다른 콜백이 생성된다는 것입니다.
- 대부분의 경우 문제가 되지 않으나, 콜백이 하위 컴포넌트에 props로서 전달된다면 그 컴포넌트들은 추가로 다시 렌더링을 수행할 수도 있습니다.
- 이러한 종류의 성능 문제를 피하고자, 생성자 안에서 바인딩하거나 클래스 필드 문법을 사용하는 것을 권장합니다.

---

#### 이벤트 핸들러에 인자 전달하기

```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

- 함수만 전달하면 이벤트만 들어오거나, 아예 직접 인자를 주입해 줄 수도 있다.
- 위 두 줄은 동등하며 각각 화살표 함수와 Function.prototype.bind를 사용합니다.
- 두 경우 모두 React 이벤트를 나타내는 <strong>e 인자가 ID 뒤에 두 번째 인자로 전달됩니다. 화살표 함수를 사용하면 명시적으로 인자를 전달해야 하지만 bind를 사용할 경우 추가 인자가 자동으로 전달됩니다.</strong>

---

[React 지원하는 이벤트 (공식문서)](https://ko.reactjs.org/docs/events.html#supported-events)

#### 지원하는 이벤트

- 다음 이벤트 핸들러는 이벤트 버블링 단계에서 호출된다.
- 캡처 단계에 이벤트 핸들러를 등록하기 위해서는 이벤트 이름에 Capture를 덧붙인다.
- <strong><span style='color:blue'>예를 들어 onClick 대신 onClickCapture를 사용해서 캡처 단계에서 클릭 이벤트 핸들러를 사용할 수 있다.</strong>

> 버블링
>
> > 컴포넌트를 클릭하면 부모로 이벤트를 전파
> > 캡처링이후 자체 타겟이 fire되고 나서 버블링이됨.
> > 자식보다 부모가 먼저 클릭을 인지게끔 만들고 싶을 때 사용

> 캡처링
>
> > 부모가 자식들에게 누가 클릭이 되었는가 확인하기 위한 체크 과정
> > 캡처링 이후에 버블링이 일어남.

---

![](https://velog.velcdn.com/images/lyl117/post/49fbfefa-eda8-4e85-b8a0-545ff0854af0/image.png)
