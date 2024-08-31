// components/Counter.js
'use client';
import { useRecoilState } from 'recoil';
import { counterState } from '../recoil/atoms';

function Counter() {
  const [count, setCount] = useRecoilState(counterState);
  
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
