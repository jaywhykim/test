import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.scss';
import classes from './_1200.module.scss';
import { Card } from './Card/Card.js';
import { CibcIcons201949Icon } from './CibcIcons201949Icon.js';
import { CombinedShapeIcon } from './CombinedShapeIcon.js';
import { Ellipse424Icon2 } from './Ellipse424Icon2.js';
import { Ellipse424Icon3 } from './Ellipse424Icon3.js';
import { Ellipse424Icon4 } from './Ellipse424Icon4.js';
import { Ellipse424Icon } from './Ellipse424Icon.js';
import { Icon_TypeMore } from './Icon_TypeMore/Icon_TypeMore.js';
import { Logo_CIBC_ColourFullPlatformOn } from './Logo_CIBC_ColourFullPlatformOn/Logo_CIBC_ColourFullPlatformOn.js';
import { MoreHorizontal } from './MoreHorizontal/MoreHorizontal.js';
import { MoveDown } from './MoveDown/MoveDown.js';
import { MoveUp } from './MoveUp/MoveUp.js';
import { StatusAlert_TypeGreenWithCTALi2 } from './StatusAlert_TypeGreenWithCTALi2/StatusAlert_TypeGreenWithCTALi2.js';
import { StatusAlert_TypeGreenWithCTALi } from './StatusAlert_TypeGreenWithCTALi/StatusAlert_TypeGreenWithCTALi.js';
import { TertiaryButton_ColourWhite } from './TertiaryButton_ColourWhite/TertiaryButton_ColourWhite.js';

interface Props {
  className?: string;
  hide?: {
    text?: boolean;
  };
}
/* @figmaId 1722:6984 */
export const _1200: FC<Props> = memo(function _1200(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame41967}>
        <div className={classes.frame41966}>
          <div className={classes.group41492}>
            <div className={classes.rectangle2603}></div>
            <div className={classes.rectangle2604}></div>
          </div>
          <div className={classes.rectangle2605}></div>
        </div>
        <div className={classes.rectangle2602}></div>
      </div>
    </div>
  );
});
