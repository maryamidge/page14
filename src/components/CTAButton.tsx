import React, { useState } from 'react';

interface CTAButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  onClick, 
  disabled = false, 
  loading = false 
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <button
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      disabled={disabled || loading}
      className={`
        flex w-[396px] h-12 justify-center items-center gap-2 shrink-0 
        shadow-[0_4px_4px_0_rgba(190,92,85,0.42)] absolute cursor-pointer 
        bg-[#B5453D] rounded-[8px] left-4 top-[816px] 
        max-md:w-[calc(100%_-_32px)] max-md:left-4 
        max-sm:w-[calc(100%_-_24px)] max-sm:left-3
        transition-all duration-150 ease-in-out
        hover:bg-[#A03D36] hover:shadow-[0_6px_6px_0_rgba(190,92,85,0.5)]
        active:bg-[#8F3530] active:shadow-[0_2px_2px_0_rgba(190,92,85,0.3)]
        focus:outline-none focus:ring-2 focus:ring-[#B5453D] focus:ring-opacity-50 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#B5453D]
        ${isPressed ? 'transform translate-y-0.5' : ''}
      `}
      style={{ padding: '16px 162px' }}
      aria-label="Create account and start building"
    >
      <span className="text-[#F8F1EC] text-center text-base font-semibold leading-6 uppercase relative max-sm:text-sm">
        {loading ? 'BUILDING...' : 'LET\'S BUILD!'}
      </span>
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#F8F1EC]" />
      )}
    </button>
  );
};
