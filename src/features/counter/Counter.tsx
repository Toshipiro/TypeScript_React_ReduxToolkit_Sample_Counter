import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

/**
 * This componet shows the amount in store.
 * @returns
 */
export const Counter: FC = () => {
  /** The amount in counter slice of store. */
  const counter: number = useSelector(
    (state: RootState) => state.counter.value
  );

  return (
    <div>
      <p>Counter Component</p>
      <div>
        { /** The amount in counter slice of store. */}
        <span>Amount : {counter} </span>
      </div>
    </div>
  );
};
