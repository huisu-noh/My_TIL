// 리덕스 로직을 저장할 위치, 리덕스와 리액트를 연결함!
import { createSlice, configureStore } from '@reduxjs/toolkit';

// 초기상태 ( 보기 좋게 상수 처리 )
const initialState = { counter: 0, showCounter: true };

// 함수를 이용해서 전역 상태의 slice를 미리 만들어야 한다. (초기상태 아래에 작성)
// 초기 상태는 변하지 않으면서, 상태를 변화 시킬수 있다.
const counterSlice = createSlice({
  // 상태마다 식별자가 필요함
  name: 'counter',
  // key: value 같아서 한번만 작성
  initialState,
  // reducers : 객체 혹은 맵 , 메서드를 추가한다.
  reducers: {
    increment(state) {
      // Redux toolkit은 내부적으로 immer 이라는 다른 패키지를 사용하는데,
      // 이런 코드를 감지하고 자동으로 원래 있는 상태를 복제 한다.
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // payload 가 필요함 (추가 데이터가 필요하다)
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// 저장소 생성
// configureStore : 객체를 전달한다.
const store = configureStore({
  reducer: counterSlice.reducer,
});

// 액션 메소드 액션 객체 생성을 해준다
export const counterActios = counterSlice.actions;

export default store;
