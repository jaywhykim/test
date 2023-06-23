import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.scss';
import classes from './Add.module.scss';
import { CombinedShapeIcon } from './CombinedShapeIcon.js';

interface Props {
  className?: string;
  swap?: {
    combinedShape?: ReactNode;
  };
}
/* @figmaId 1247:1643 */
export const Add: FC<Props> = memo(function Add(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.combinedShape}>
        {props.swap?.combinedShape || <CombinedShapeIcon className={classes.icon} />}
      </div>
    </div>
  );
});
