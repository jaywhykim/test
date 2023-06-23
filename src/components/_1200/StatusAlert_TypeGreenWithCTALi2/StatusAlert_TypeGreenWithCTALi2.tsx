import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.scss';
import { Alert_StatusGreen } from '../Alert_StatusGreen/Alert_StatusGreen.js';
import classes from './StatusAlert_TypeGreenWithCTALi2.module.scss';

interface Props {
  className?: string;
  classes?: {
    vector?: string;
    confirmed?: string;
    alert?: string;
    root?: string;
  };
}
/* @figmaId 1721:6984 */
export const StatusAlert_TypeGreenWithCTALi2: FC<Props> = memo(function StatusAlert_TypeGreenWithCTALi2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Alert_StatusGreen
        className={`${props.classes?.alert || ''} ${classes.alert}`}
        classes={{ vector: props.classes?.vector || '', confirmed: props.classes?.confirmed || '' }}
        text={{
          statusGreenSuccessCompletionSt: (
            <div className={classes.statusGreenSuccessCompletionSt}>Success, Completion, Stability</div>
          ),
        }}
      />
    </div>
  );
});
