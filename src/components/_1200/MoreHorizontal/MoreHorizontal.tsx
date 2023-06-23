import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.scss';
import { CombinedShapeIcon } from './CombinedShapeIcon.js';
import classes from './MoreHorizontal.module.scss';

interface Props {
  className?: string;
  classes?: {
    combinedShape?: string;
    root?: string;
  };
  swap?: {
    combinedShape?: ReactNode;
  };
}
/* @figmaId 1721:6981 */
export const MoreHorizontal: FC<Props> = memo(function MoreHorizontal(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.combinedShape || ''} ${classes.combinedShape}`}>
        {props.swap?.combinedShape || <CombinedShapeIcon className={classes.icon} />}
      </div>
    </div>
  );
});
