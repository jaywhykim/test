import { memo, SVGProps } from 'react';

const CombinedShapeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3 1.98999C3 2.81842 2.32843 3.48999 1.5 3.48999C0.671573 3.48999 0 2.81842 0 1.98999C0 1.16156 0.671573 0.48999 1.5 0.48999C2.32843 0.48999 3 1.16156 3 1.98999Z'
      fill='#383B3E'
    />
    <path
      d='M11.5 1.98999C11.5 2.81842 10.8284 3.48999 10 3.48999C9.17157 3.48999 8.5 2.81842 8.5 1.98999C8.5 1.16156 9.17157 0.48999 10 0.48999C10.8284 0.48999 11.5 1.16156 11.5 1.98999Z'
      fill='#383B3E'
    />
    <path
      d='M18.5 3.48999C19.3284 3.48999 20 2.81842 20 1.98999C20 1.16156 19.3284 0.48999 18.5 0.48999C17.6716 0.48999 17 1.16156 17 1.98999C17 2.81842 17.6716 3.48999 18.5 3.48999Z'
      fill='#383B3E'
    />
  </svg>
);

const Memo = memo(CombinedShapeIcon);
export { Memo as CombinedShapeIcon };
