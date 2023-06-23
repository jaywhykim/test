import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.scss';
import { Alert_StatusGreen } from '../Alert_StatusGreen/Alert_StatusGreen.js';
import classes from './StatusAlert_TypeGreenWithCTALi.module.scss';

interface Props {
  className?: string;
  classes?: {
    vector?: string;
    confirmed?: string;
    alert?: string;
    textLinks?: string;
    cTALink?: string;
    root?: string;
  };
}
/* @figmaId 1721:6986 */
export const StatusAlert_TypeGreenWithCTALi: FC<Props> = memo(function StatusAlert_TypeGreenWithCTALi(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Alert_StatusGreen
        className={`${props.classes?.alert || ''} ${classes.alert}`}
        classes={{ vector: props.classes?.vector || '', confirmed: props.classes?.confirmed || '' }}
        text={{
          statusGreenSuccessCompletionSt: (
            <div className={classes.statusGreenSuccessCompletionSt}>
              Success, Completion, Stability - Proin blandit ipsum vitae odio semper vulputate.{' '}
            </div>
          ),
        }}
      />
      <div className={`${props.classes?.cTALink || ''} ${classes.cTALink}`}>
        <div className={`${props.classes?.textLinks || ''} ${classes.textLinks}`}>
          <div className={classes.cTA1}>Links</div>
          <div className={classes.cTA2}>Links</div>
        </div>
      </div>
    </div>
  );
});
