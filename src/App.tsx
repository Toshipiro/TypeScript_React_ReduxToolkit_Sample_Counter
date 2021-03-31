import { FC } from 'react';
import { Counter } from './features/counter/Counter';
import { CounterInput } from './features/counter/CounterInput';

export const App: FC = () => {
  return (
    <div>
      <header>
        { /** Display an input field to update the amount in the store. */}
        <CounterInput />
        { /** Display the amount in the store. */}
        <Counter />
      </header>
    </div>
  );
};
