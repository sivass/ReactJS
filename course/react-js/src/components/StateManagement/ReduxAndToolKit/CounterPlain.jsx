import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../reduxPlain/action";

export default function CounterPlain() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Plain Redux Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
