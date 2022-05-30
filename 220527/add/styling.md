## 추가 학습

## React Styling

- 삼항 연산자를 이용해서 조건에 맞게 스타일링을 줄 수 있다.
- 조건부 스타일링
- inline 은 우선순위가 높기 때문에 선호하지 않는다.

```js
<form onSubmit={formSubmitHandler}>
  <div className="form-control">
    <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
    <input
      style={{
        borderColor: !isValid ? "red" : "black",
        background: !isValid ? "salmon" : "transparent",
      }}
      type="text"
      onChange={goalInputChangeHandler}
    />
  </div>
  <Button type="submit">Add Goal</Button>
</form>
```

## 동적으로 CSS 클래스 설정하기

- CSS 에 필요한 스타일을 만들고

```css
.form-control.invalid input {
  border-color: red;
  background-color: rgb(212, 174, 174);
}

.form-control.invalid label {
  color: red;
}
```

- 조건식을 이용해서, 조건에 맞는 className 을 추가하는 형식으로 동적인 스타일링으로 한다

```js
<div className={`form-control ${!isValid ? 'invalid' : ''}`}>
```

### 정적인 Styled Components

- 스타일이 적용된 컴포넌트에만 스타일이 적용된다.
- 다른 컴포넌트에는 영향을 끼치지 않는다.
- 설치하기 `npm install --save styled-components`

```js
import styled from "styled-components";

// 템플릿 리터럴
const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
```

### 동적인 Styled Components

```css
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    background-color: rgb(212, 174, 174);
  }

  &.invalid label {
    color: red;
  }
`;
```

- 해당 컴포넌트에 styled.div 를 만들고, 필요한 css 를 넣어준다

```js
<FormControl className={!isValid && "invalid"}>
  <label>Course Goal</label>
  <input type="text" onChange={goalInputChangeHandler} />
</FormControl>
```

- 필요한 부분에 넣은 후, `className={!isValid && 'invalid'}` 를 이용해서 해당하는 경우에 따라 스타일링을 바꿔준다.

- `` 안에서도 props 를 사용할 수 있다.

```js
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    background: ${(props) => (props.invalid ? "red" : "transparent")}
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

<FormControl invalid={!isValid}>
  <label>Course Goal</label>
  <input type="text" onChange={goalInputChangeHandler} />
</FormControl>;
```
