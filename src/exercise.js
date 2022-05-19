import { createStore } from "redux";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

const increase = () => {
  return {
    type: INCREASE, // 액션 객체에는 type 값이 필수적입니다.
  };
};

const decrease = (text) => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text, // 액션안에는 type 외에 추가적인 필드를 만음대로 넣을 수 있다.
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

// 리듀서 만들기
// 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여
// 새로운 상태를 만드는 함수를 만들어보자.
// 주의  : 리듀서에서는 불변성을 꼭 지켜줘야 한다.

const reducer = (state = initialState, action) => {
  // state 의 초기값을 initialState 로 지정했다.
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회합니다.

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// 구독을 해제하고싶을 때는 unsubscribe() 를 호출하면 됩니다.

store.dispatch(increase());
// reducer 함수는
