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
import { Group41493Icon } from './Group41493Icon.js';
import { Icon_TypeMore } from './Icon_TypeMore/Icon_TypeMore.js';
import { Logo_CIBC_ColourFullPlatformOn } from './Logo_CIBC_ColourFullPlatformOn/Logo_CIBC_ColourFullPlatformOn.js';
import { MoreHorizontal } from './MoreHorizontal/MoreHorizontal.js';
import { MoveDown } from './MoveDown/MoveDown.js';
import { MoveUp } from './MoveUp/MoveUp.js';
import { StatusAlert_TypeGreenWithCTALi2 } from './StatusAlert_TypeGreenWithCTALi2/StatusAlert_TypeGreenWithCTALi2.js';
import { StatusAlert_TypeGreenWithCTALi } from './StatusAlert_TypeGreenWithCTALi/StatusAlert_TypeGreenWithCTALi.js';
import { SubtractIcon } from './SubtractIcon.js';
import { TertiaryButton_ColourWhite } from './TertiaryButton_ColourWhite/TertiaryButton_ColourWhite.js';
import { Vector213Icon } from './Vector213Icon.js';

interface Props {
  className?: string;
  hide?: {
    text?: boolean;
  };
}
/* @figmaId 1721:8469 */
export const _1200: FC<Props> = memo(function _1200(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.group41493}>
        <Group41493Icon className={classes.icon3} />
      </div>
      <div className={classes.shadow}></div>
      <div className={classes.main}></div>
      <div className={classes.flyingIPhone12MockupLeftViewLa}></div>
      <div className={classes.vector213}>
        <Vector213Icon className={classes.icon4} />
      </div>
      <div className={classes.screenShot2023613At12501}></div>
      <div className={classes.subtract}>
        <SubtractIcon className={classes.icon5} />
      </div>
      <div className={classes.frame41963}>
        <div className={classes.frame41964}>
          <div className={classes.kojodatchiV1}>Kojodatchi v1.0</div>
          <div className={classes.aSmartPlantPotForGrowingPotato}>
            A smart plant pot for growing potatoes at the comfort of your home with a Tamagotchi inspired twist.
          </div>
        </div>
        <div className={classes.frame2}>
          <div className={classes.KojoPlant}>
            <div className={classes.textBlock}>古城</div>
            <div className={classes.textBlock2}>Kojō</div>
            <div className={classes.textBlock3}>
              <p className={classes.labelWrapper}>
                <span className={classes.label}>Plant</span>
              </p>
            </div>
          </div>
          <div className={classes.unnamed}>+</div>
          <div className={classes.TomodachiFriend}>
            <div className={classes.textBlock4}>友達</div>
            <div className={classes.textBlock5}>Tomodachi</div>
            <div className={classes.textBlock6}>
              <p className={classes.labelWrapper2}>
                <span className={classes.label2}>Friend</span>
              </p>
            </div>
          </div>
        </div>
        <div className={classes.frame42}>
          <div className={classes.joinTheWaitlist}>Join the waitlist</div>
        </div>
      </div>
    </div>
  );
});
