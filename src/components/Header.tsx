import React from 'react';

interface HeaderProps {
  onClose?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      // Default behavior - could navigate back or close modal
      console.log('Close button clicked');
    }
  };

  return (
    <header className="flex w-[428px] h-11 items-center shrink-0 absolute px-4 py-0 left-0 top-[72px]">
      <div className="flex flex-col items-start relative left-5">
        <div className="flex w-5 h-11 flex-col items-start relative" />
      </div>
      <button
        onClick={handleClose}
        className="w-10 h-10 shrink-0 relative focus:outline-none focus:ring-2 focus:ring-[#205B3D] focus:ring-opacity-50 rounded-lg"
        aria-label="Close"
      >
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 18 18" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="cross-svg" 
          style={{width: '17px', height: '17px', flexShrink: 0, fill: '#205B3D', position: 'absolute', left: '12px', top: '12px'}}
        >
          <path d="M3.51214 16.8439C2.86125 17.4945 1.80551 17.4947 1.15472 16.8439C0.504315 16.1932 0.504517 15.1383 1.15472 14.4874L3.51214 16.8439ZM14.4887 1.15346C15.1395 0.503007 16.1944 0.502973 16.8451 1.15346C17.496 1.80434 17.496 2.86001 16.8451 3.51089L11.3569 8.99819L16.8461 14.4874C17.4964 15.1383 17.4966 16.1932 16.8461 16.8439C16.1953 17.4947 15.1396 17.4946 14.4887 16.8439L9.00042 11.3556L3.51214 16.8439L2.33343 15.6652L1.15472 14.4874L6.643 8.99819L1.1557 3.51089L2.33441 2.33217L3.51214 1.15346L9.00042 6.64174L14.4887 1.15346ZM1.1557 1.15346C1.80648 0.502933 2.86132 0.502994 3.51214 1.15346L1.1557 3.51089C0.504824 2.86001 0.504824 1.80434 1.1557 1.15346Z" fill="#205B3D"></path>
        </svg>
      </button>
    </header>
  );
};
