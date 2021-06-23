import * as React from 'react';

function SigIn(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 21 20" fill="none" {...props}>
      <path
        d="M13 2.5h3.333A1.666 1.666 0 0118 4.167v11.666a1.666 1.666 0 01-1.667 1.667H13M8.833 14.167L13 10 8.833 5.833M13 10H3"
        stroke="#FEFEFE"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoSigIn = React.memo(SigIn);
export default MemoSigIn;
