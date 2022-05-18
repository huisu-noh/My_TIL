## React 라이브러리

## ch.5 Mobx

[Mobx](https://mobx.js.org/README.html)

- Simple, scalable
- 설치하기
- `npm install --save mobx`
- `yarn add mobx`
- CDN: `https://cdnjs.com/libraries/mobx / https://unpkg.com/mobx/dist/mobx.umd.production.min.js`

<img src="https://mobx.js.org/assets/flow2.png">

- 예제

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

// 애플리케이션 상태를 모델링합니다.
class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.secondsPassed += 1;
  }

  reset() {
    this.secondsPassed = 0;
  }
}

const myTimer = new Timer();

// observable state를 사용하는 사용자 인터페이스를 구축합니다.
const TimerView = observer(({ timer }) => (
  <button onClick={() => timer.reset()}>
    Seconds passed: {timer.secondsPassed}
  </button>
));

ReactDOM.render(<TimerView timer={myTimer} />, document.body);

// 매초마다 Seconds passed: X를 업데이트 합니다.
setInterval(() => {
  myTimer.increase();
}, 1000);
```

- Core Idea
- Actions => State => Derivation / Reactions
- autorun: make Reaction
- Observable
- Computed
- Observer

| Mobx                 |                                  |
| -------------------- | -------------------------------- |
| Simple               | No Boilerplate                   |
| Action               | Derivative 를 바꾸는 유일한 수단 |
| Reactive Programming | Observable / Observer            |

[About Mobx](https://mobx.js.org/about-this-documentation.html)
[React integration](https://mobx.js.org/react-integration.html)

- mobx-react-lite

```jsx
import { observer } from 'mobx-react-lite'; // Or "mobx-react".

const MyComponent = observer((props) => ReactElement);
import React from 'react';
import ReactDOM from 'react-dom';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }
}

const myTimer = new Timer();

// A function component wrapped with `observer` will react
// to any future change in an observable it used before.
const TimerView = observer(({ timer }) => (
  <span>Seconds passed: {timer.secondsPassed}</span>
));

ReactDOM.render(<TimerView timer={myTimer} />, document.body);

setInterval(() => {
  myTimer.increaseTimer();
}, 1000);
```

| Mobx               |                                   |
| ------------------ | --------------------------------- |
| with React         | re-render issue (small component) |
| makeAutoObservable | makeObservable을 보다 쉽게        |
| actions            | runlnAction / flow                |

[computed](https://mobx.js.org/computeds.html)

```jsx
import { makeObservable, observable, computed, autorun } from 'mobx';

class OrderLine {
  price = 0;
  amount = 1;

  constructor(price) {
    makeObservable(this, {
      price: observable,
      amount: observable,
      total: computed,
    });
    this.price = price;
  }

  get total() {
    console.log('Computing...');
    return this.price * this.amount;
  }
}

const order = new OrderLine(0);

const stop = autorun(() => {
  console.log('Total: ' + order.total);
});
// Computing...
// Total: 0

console.log(order.total);
// (No recomputing!)
// 0

order.amount = 5;
// Computing...
// (No autorun)

order.price = 2;
// Computing...
// Total: 10

stop();

order.price = 3;
// Neither the computation nor autorun will be recomputed.
```

<img src="https://mobx.js.org/assets/computed-example.png">

| Mobx     |                           |
| -------- | ------------------------- |
| Computed | getter pure               |
| reaction | side effect               |
| reactive | observable 인 것이 바뀔때 |

[npm trend](https://www.npmtrends.com/redux-vs-mobx)

> Context API: 리액트 자체에서 제공

> Redux: 전역 상태관리 (action, dispatch, reducer)
>
> > 단점: 보일러플레이트가 많다

> Mobx: observable reactive programming
>
> > 장점: 간편하다
