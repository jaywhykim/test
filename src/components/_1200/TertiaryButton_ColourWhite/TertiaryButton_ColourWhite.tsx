import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.scss';
import { Add } from '../Add/Add.js';
import { CombinedShapeIcon } from './CombinedShapeIcon.js';
import classes from './TertiaryButton_ColourWhite.module.scss';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    add?: ReactNode;
  };
  hide?: {
    text?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1721:6976 */
export const TertiaryButton_ColourWhite: FC<Props> = memo(function TertiaryButton_ColourWhite(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.add || (
        <Add
          swap={{
            combinedShape: <CombinedShapeIcon className={classes.icon} />,
          }}
        />
      )}
      {!props.hide?.text && (props.text?.text != null ? props.text?.text : <div className={classes.text}>Button</div>)}
    </button>
  );
});
