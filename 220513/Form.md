## React 공식문서로 디테일 잡기 (초급)

## Ch .2

### 폼(Form)

[React form(공식문서)](https://ko.reactjs.org/docs/forms.html#gatsby-focus-wrapper)

- <span style='color:red'> HTML 폼 엘리먼트는 폼 엘리먼트 자체가 내부 상태를 가지기 때문에,(= 인풋에 value를 따로 주지 않아도 그 자체로 입력된 값을 알고 있음) </span>
- React의 다른 DOM 엘리먼트와 다르게 동작한다.
- 순수한 HTML에서 이 폼은 name을 입력받는다.

---

#### 제어 컴포넌트 (Controlled Component)

```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
// value는 빈값
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    // submit을 누르면 submit 동작을(=페이지 이동) 막는다.
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

---

#### textarea 태그

- React에서 `<textarea>`는 value 어트리뷰트를 대신 사용한다.
- 이렇게하면 `<textarea>`를 사용하는 폼은 한 줄 입력을 사용하는 폼과 비슷하게 작성할 수 있다.

```
class EssayForm extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    value: 'Please write an essay about your favorite DOM element.'
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('An essay was submitted: ' + this.state.value);
  event.preventDefault();
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Essay:
        <textarea value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
}
```

---

#### Select 태그

```
class FlavorForm extends React.Component {
constructor(props) {
  super(props);
  this.state = {value: 'coconut'};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('Your favorite flavor is: ' + this.state.value);
  event.preventDefault();
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Pick your favorite flavor:
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
}

```

- React에서는 selected 어트리뷰트를 사용하는 대신 최상단 <span style='color:red'> select태그에 value 어트리뷰트를 사용한다. </spna>
- 한 곳에서 업데이트만 하면되기 때문에 제어 컴포넌트에서 사용하기 더 편하다.

---

#### file input 태그

```
<input type="file" />
```

- 값이 읽기 전용이기 때문에 React에서는 비제어 컴포넌트이다.
- 문서 뒷부분에서 다른 비제어 컴포넌트와 함께 설명하고 있다.

---

#### 다중 입력 제어하기

- 여러 input 엘리먼트를 제어해야할 때, 각 엘리먼트에 name 어트리뷰트를 추가하고 event.target.name 값을 통해 핸들러가 어떤 작업을 할 지 선택할 수 있게 해준다.

```
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```

- `setState()`는 자동적으로 현재 `state`에 일부 `state`를 병합하기 때문에 바뀐 부분에 대해서만 호출하면 된다
  **병합**
- 클래스 컴포넌트는 `state`를 여러개의 상태로 관리하는데, `useState`는 훅을 개별로 줄 수 있기 때문에 있던것을 삭제하고 새로업데이트한다는 것으로 생각하면 됨.

---

#### 제어되는 Input Null 값

- 제어 컴포넌트에 value prop을 지정하면 의도하지 않는 한 사용자가 변경할 수 없다.
- value를 설정했는데 여전히 수정할 수 있다면 <strong> 실수로 value를 undefined나 null로 설정했을 수 있다.</strong>

```
ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function() {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
```

**사용자가 입력하는 인풋에 따라 값이 바뀔수도 있으니 주의하자!**

---

#### 비제어 컴포넌트

##### 기본 값

- 비제어 컴포넌트를 사용하면 React 초깃값을 지정하지만, 그 이후의 업데이트는 제어하지 않는 것이 좋습니다.
- <strong>이러한 경우에 value 어트리뷰트 대신 defaultValue를 지정할 수 있습니다.</strong>
- 컴포넌트가 마운트된 후에 defaultValue 어트리뷰트를 변경해도 DOM의 값이 업데이트되지 않습니다.

```
render() {
 return (
   <form onSubmit={this.handleSubmit}>
     <label>
       Name:
       <input
         defaultValue="Bob"
         type="text"
         ref={this.input} />
     </label>
     <input type="submit" value="Submit" />
   </form>
 );
}
```

---

![](https://velog.velcdn.com/images/lyl117/post/7bf91f2a-9aa2-4813-a6d7-186809e86cf9/image.png)
