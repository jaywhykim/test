import { memo, SVGProps } from 'react';

const Vector213Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 497 97' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M492.904 28.3763L496.203 0.332886L0 36.9542L61.0356 97L453.973 47.1818L483.666 36.9542L492.904 28.3763Z'
      fill='url(#paint0_linear_1726_7355)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_1726_7355'
        x1={767.069}
        y1={-135.595}
        x2={-211.48}
        y2={97.0001}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopOpacity={0.98} />
        <stop offset={0.619084} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Vector213Icon);
export { Memo as Vector213Icon };
