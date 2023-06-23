import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.scss';
import { Confirmed } from '../Confirmed/Confirmed.js';
import classes from './Alert_StatusGreen.module.scss';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    vector?: string;
    confirmed?: string;
  };
  text?: {
    statusGreenSuccessCompletionSt?: ReactNode;
  };
}
/* @figmaId 1721:7025 */
export const Alert_StatusGreen: FC<Props> = memo(function Alert_StatusGreen(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Confirmed
        className={`${props.classes?.confirmed || ''} ${classes.confirmed}`}
        classes={{ vector: props.classes?.vector || '' }}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
      {props.text?.statusGreenSuccessCompletionSt != null ? (
        props.text?.statusGreenSuccessCompletionSt
      ) : (
        <div className={classes.statusGreenSuccessCompletionSt}>Status Green: Success, Completion, Stability</div>
      )}
    </div>
  );
});
