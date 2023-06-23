import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.scss';
import { _1200 } from './components/_1200/_1200.js';
import resets from './components/_resets.module.scss';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <_1200 />
    </div>
  );
});
