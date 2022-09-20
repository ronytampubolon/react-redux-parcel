import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import Button from "../../components/button"

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <section className="flex flex-row">
      <button className="px-5 py-2 rounded bg-blue-500 hover:bg-blue-600 transition text-white" onClick={() => dispatch(increment())}>+</button>
      <h2 className="mx-5">{count}</h2>
      <button className="px-5 py-2 rounded bg-blue-500 hover:bg-blue-600 transition text-white" onClick={() => dispatch(decrement())}>-</button>
    </section>
  );
}

export default Counter