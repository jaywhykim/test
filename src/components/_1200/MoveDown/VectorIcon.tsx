import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 1C11.7941 0.990119 13.5507 1.51374 15.0466 2.50435C16.5425 3.49497 17.7102 4.90786 18.4014 6.56356C19.0926 8.21926 19.276 10.043 18.9284 11.8032C18.5808 13.5634 17.7178 15.1805 16.4492 16.4492C15.1805 17.7178 13.5634 18.5808 11.8032 18.9284C10.043 19.276 8.21925 19.0926 6.56356 18.4014C4.90786 17.7102 3.49496 16.5425 2.50435 15.0466C1.51374 13.5507 0.990115 11.7941 1 10C1.01572 7.61791 1.96898 5.33785 3.65342 3.65342C5.33785 1.96899 7.61791 1.01573 10 1ZM10 20C11.9778 20 13.9112 19.4135 15.5557 18.3147C17.2002 17.2159 18.4819 15.6541 19.2388 13.8268C19.9957 11.9996 20.1937 9.98891 19.8079 8.0491C19.422 6.10929 18.4696 4.32746 17.0711 2.92894C15.6725 1.53041 13.8907 0.578004 11.9509 0.192152C10.0111 -0.193701 8.00043 0.00433284 6.17317 0.761209C4.3459 1.51809 2.78412 2.79981 1.6853 4.4443C0.58649 6.08879 0 8.02219 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7363 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20Z'
      fill='#C41F3E'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14 11.07L10.45 14.45V4.45C10.45 4.3174 10.3973 4.19022 10.3036 4.09645C10.2098 4.00268 10.0826 3.95 9.95 3.95C9.81739 3.95 9.69022 4.00268 9.59645 4.09645C9.50268 4.19022 9.45 4.3174 9.45 4.45V14.45L6 11.07C5.90619 10.9973 5.78876 10.9619 5.6704 10.9707C5.55203 10.9795 5.44112 11.0318 5.35908 11.1176C5.27704 11.2034 5.22969 11.3165 5.22616 11.4351C5.22264 11.5538 5.26319 11.6695 5.34 11.76L9.7 15.9C9.73692 15.9359 9.78131 15.9632 9.83 15.98C9.88625 16.0067 9.94774 16.0205 10.01 16.0205C10.0723 16.0205 10.1337 16.0067 10.19 15.98C10.2387 15.9632 10.2831 15.9359 10.32 15.9L14.68 11.76C14.7568 11.6695 14.7974 11.5538 14.7938 11.4351C14.7903 11.3165 14.743 11.2034 14.6609 11.1176C14.5789 11.0318 14.468 10.9795 14.3496 10.9707C14.2312 10.9619 14.1138 10.9973 14.02 11.07'
      fill='#C41F3E'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
