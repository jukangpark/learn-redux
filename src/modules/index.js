import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;

// 한 프로젝트에 여러개의 리듀서가 있을 때는
// 이를 한 리듀서로 합쳐서 사용합니다.
// 합쳐진 리듀서를 우리는 루트 리듀서 라고 합니다.

// 리듀서를 합치는 작업은 리덕스에 내장되어 있는 combineReducers 라는 함수를 사용합니다.
