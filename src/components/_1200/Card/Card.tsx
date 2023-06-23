import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.scss';
import classes from './Card.module.scss';
import { CibcIcons201949Icon } from './CibcIcons201949Icon.js';

interface Props {
  className?: string;
  classes?: {
    cIBCICONS201949?: string;
    root?: string;
  };
  swap?: {
    cIBCICONS201949?: ReactNode;
  };
}
/* @figmaId 1721:6979 */
export const Card: FC<Props> = memo(function Card(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.cIBCICONS201949 || ''} ${classes.cIBCICONS201949}`}>
        {props.swap?.cIBCICONS201949 || <CibcIcons201949Icon className={classes.icon} />}
      </div>
    </div>
  );
});
