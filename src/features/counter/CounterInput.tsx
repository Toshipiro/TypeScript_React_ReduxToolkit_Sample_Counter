import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { incrementByAmount } from './counterSlice';

/**
 * This component shows an inpt field to update amount in store.
 * @returns 
 */
export const CounterInput: FC = () => {
  /** Root dispach */
  const dispatch = useDispatch<AppDispatch>();

  /** State in the input field. This is component level state.  */
  const [incrementAmount, setIncrementAmount] = useState('0');

  return (
    <div>
      <p>CounterInput Component</p>
      <div>
        { /** Update component level state. */}
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        { /** Update state in store with component level state using counter slice. */}
        <button
          type="button"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
      </div>
    </div>
  );
};
