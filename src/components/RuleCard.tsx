import React from 'react';

interface RuleCardProps {
  emoji: string;
  title: string;
  description: string;
  borderColor: string;
  className?: string;
  style?: React.CSSProperties;
}

export const RuleCard: React.FC<RuleCardProps> = ({ 
  emoji, 
  title, 
  description, 
  borderColor, 
  className = '',
  style
}) => {
  return (
    <article 
      className={`flex w-[382px] flex-col items-start gap-2.5 shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] h-[79px] border bg-white p-4 rounded-3xl border-solid max-md:w-[calc(100%_-_32px)] max-sm:w-[calc(100%_-_24px)] ${className}`}
      style={{ borderColor, ...style }}
    >
      <div className="flex h-[47px] items-center self-stretch relative">
        <div className="flex h-[47px] items-center gap-1 flex-[1_0_0] relative pl-4">
          <div className="flex items-center flex-[1_0_0] self-stretch relative">
            <div className="flex h-[47px] flex-col justify-center items-start gap-[-4px] flex-[1_0_0] relative">
              <div className="flex h-[47px] flex-col justify-center shrink-0 self-stretch text-[#0A3149] text-sm font-normal leading-6 tracking-[-0.43px] relative max-sm:text-[13px]">
                <span className="text-lg mb-1" role="img" aria-label={title}>
                  {emoji}
                </span>
                <div className="font-bold text-sm max-sm:text-[13px]">
                  {title}
                </div>
                <div className="text-xs font-normal max-sm:text-[11px]">
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
