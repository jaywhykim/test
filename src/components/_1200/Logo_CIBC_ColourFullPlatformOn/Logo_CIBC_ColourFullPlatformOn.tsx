import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.scss';
import classes from './Logo_CIBC_ColourFullPlatformOn.module.scss';
import { LogoFullIcon } from './LogoFullIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1721:6910 */
export const Logo_CIBC_ColourFullPlatformOn: FC<Props> = memo(function Logo_CIBC_ColourFullPlatformOn(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.logoFull}>
        <LogoFullIcon className={classes.icon} />
      </div>
    </div>
  );
});
