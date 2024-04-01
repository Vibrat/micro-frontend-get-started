import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/counter";

export const Basic = () => {
  const counter = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="bg-green-50 text-black-500 p-4 space-x-2">
      <span>App3: Mode {process.env.MODE} Counter {counter}</span>
      <button className="d-flex px-3 py-1 bg-green-700 text-white rounded-sm" onClick={() => dispatch(increment())}>Click</button>
    </div>
  );
};

export default Basic;
