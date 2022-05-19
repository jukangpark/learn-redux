import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./exercise";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
// 리덕스 개발자 도구

// 리엑트 프로젝트에 리덕스를 적용하려면
// npm i react-redux 를 해야합니다.

const store = createStore(rootReducer, composeWithDevTools());
// 스토어를 만듭니다.
// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화

// console.log(store.getState());
// 스토어의 상태를 확인해봅시다

const root = ReactDOM.createRoot(document.getElementById("root"));

//Provider로 store 를 넣어서 App 을 감싸게 되면
// 우리가 렌더링 하는 그 어떤 컴포넌트 라던지 리덕스 스토어에 접근할 수 있습니다.
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
