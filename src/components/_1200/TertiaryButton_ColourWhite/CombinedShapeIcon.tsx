import { memo, SVGProps } from 'react';

const CombinedShapeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.5 9.51H13.5C13.7723 9.50995 13.9946 9.72777 14 10C14 10.2761 13.7761 10.5 13.5 10.5H10.5V13.5C10.5 13.7761 10.2761 14 10 14C9.72386 14 9.5 13.7761 9.5 13.5V10.5H6.5C6.22386 10.5 6 10.2761 6 10C6 9.72386 6.22386 9.5 6.5 9.5H9.5V6.5C9.5 6.22386 9.72386 6 10 6C10.1344 5.99997 10.2631 6.05402 10.3571 6.14996C10.4512 6.24591 10.5027 6.37567 10.5 6.51V9.51Z'
      fill='#383B3E'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19Z'
      fill='#383B3E'
    />
  </svg>
);

const Memo = memo(CombinedShapeIcon);
export { Memo as CombinedShapeIcon };
