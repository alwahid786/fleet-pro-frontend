import React from "react";

const PricingIcon = ({ isActivePage }) => {
  const stroke = isActivePage === 'plans' ? '#000' : '#fff';
  return (
    <>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.84277 6.81756C9.44515 6.43913 8.99815 6.19757 8.54661 6.08169V5.30306C8.54661 4.90647 8.27085 4.58496 7.93066 4.58496C7.59046 4.58496 7.31469 4.90647 7.31469 5.30306V6.07474C6.65947 6.24268 6.055 6.69948 5.75037 7.45205C5.43669 8.22702 5.45473 9.0272 5.84886 9.73691C6.21422 10.3948 6.85872 10.8951 7.65367 11.2796C8.37888 11.6304 8.7675 12.0035 8.94793 12.3268C9.10694 12.6117 9.13764 12.9146 9.01531 13.2981C8.90538 13.6426 8.57798 13.9086 8.02059 13.9317C7.46954 13.9545 6.87388 13.715 6.50119 13.2997C6.25529 13.0256 5.86539 13.0359 5.63031 13.3225C5.39524 13.6091 5.40402 14.0637 5.64992 14.3378C6.10529 14.8453 6.70553 15.1674 7.31469 15.3V15.9877C7.31469 16.3843 7.59046 16.7058 7.93066 16.7058C8.27085 16.7058 8.54661 16.3843 8.54661 15.9877V15.3015C9.22814 15.142 9.88636 14.6874 10.1699 13.7989C10.4138 13.0344 10.3741 12.2488 9.98056 11.5436C9.60842 10.8767 8.96233 10.3577 8.12568 9.953C7.4305 9.61682 7.05207 9.26086 6.88294 8.95639C6.74258 8.70362 6.71458 8.43527 6.86448 8.06495C6.98584 7.76513 7.27994 7.51378 7.71195 7.45085C8.13639 7.38902 8.63806 7.52496 9.06364 7.93006C9.32717 8.18084 9.71522 8.13521 9.93033 7.82794C10.1454 7.52073 10.1062 7.06836 9.84277 6.81756Z"
          fill={stroke}
          stroke={stroke}
          strokeWidth="0.4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 17.6041C1 19.221 2.12431 20.5317 3.5112 20.5317H12.2598C13.6466 20.5317 14.771 19.221 14.771 17.6041V3.6874C14.771 2.07051 13.6466 0.759766 12.2598 0.759766H3.5112C2.1243 0.759766 1 2.07051 1 3.6874V17.6041ZM3.5112 19.0955C2.80467 19.0955 2.23191 18.4278 2.23191 17.6041V3.6874C2.23191 2.8637 2.80466 2.19597 3.5112 2.19597L12.2598 2.19595C12.9663 2.19595 13.539 2.8637 13.539 3.6874V17.6041C13.539 18.4278 12.9663 19.0955 12.2598 19.0955H3.5112Z"
          fill={stroke}
          stroke={stroke}
          strokeWidth="0.4"
        />
        <path
          d="M19.0001 7.77599C19.0001 6.76925 18.3001 5.95312 17.4365 5.95312H16.5652C16.225 5.95312 15.9492 6.27462 15.9492 6.67122C15.9492 7.06781 16.225 7.38932 16.5652 7.38932H17.4365C17.6197 7.38932 17.7682 7.56244 17.7682 7.77599V16.626C17.7682 16.8395 17.6197 17.0126 17.4365 17.0126H16.5652C16.225 17.0126 15.9492 17.3341 15.9492 17.7307C15.9492 18.1273 16.225 18.4488 16.5652 18.4488H17.4365C18.3001 18.4488 19.0001 17.6327 19.0001 16.626V7.77599Z"
          fill={stroke}
          stroke={stroke}
          strokeWidth="0.4"
        />
      </svg>
    </>
  );
};

export default PricingIcon;
