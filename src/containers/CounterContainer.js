import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";

const CounterContainer = () => {
  // useSelector 는 리덕스 스토어의 상태를 조회하는 Hook 입니다.
  // 기본적으로, useSelector 를 사용해서 리덕스 스토어의 상태를 조회할 땐
  // 만약 상태가 바뀌지 않았으면 리렌더링 하지 않습니다.

  // state 의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.

  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용할 수 있게 해주는 hook 입니다.
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSelfDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
