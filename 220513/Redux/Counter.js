// 리액트 리덕스 팀이 만든 커스텀 훅 을 이용해서 데이터 가져오기
import { useSelector, useDispatch } from 'react-redux';

import { counterActios } from '../store/index';
import classes from './Counter.module.css';

// useSelector : 자동으로 상태의 일부를 선택하게 해준다
// 어떤 데이터를 스토어에서 추출할지 결정한다.
// 리액트 리덕스가 자동으로 서브스크립션(독자)를 설정한다.
// useState 대신 사용
// 만약 클래스형 컴포넌트면 connect 를 사용할 수 있다

// useDispatch : action을 다루는 훅!

const Counter = () => {
  // Redux store에 대한 action을 보냄
  const dispatch = useDispatch();
  // 리액트 리덕스에 의해 실행
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActios.increment());
  };

  // payload (전송되는 데이터) 연결
  const increaseHandler = () => {
    // { type : SOME_UNIQUE_IDENTIFIER, playload: 5 }
    dispatch(counterActios.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActios.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActios.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
