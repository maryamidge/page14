import React from 'react';

export const WelcomeSection: React.FC = () => {
  return (
    <section className="flex w-[430px] flex-col items-start gap-4 absolute px-6 py-2 left-0 top-[154px] max-md:w-full">
      <div className="flex w-[382px] items-start relative">
        <h1 className="flex-[1_0_0] text-[#0A3149] text-[32px] font-[590] leading-9 tracking-[-0.481px] relative max-sm:text-[28px] max-sm:leading-8">
          Welcome to BizzKnit!
        </h1>
      </div>
      <div className="flex w-[430px] h-11 flex-col items-start shrink-0 px-6 py-0 -left-px top-[56px] max-md:w-full">
        <div className="flex h-11 items-start gap-2 shrink-0 self-stretch relative px-0 py-2">
          <p className="w-[378px] h-[21px] text-[#0A3149] text-[15px] font-[510] leading-6 relative max-sm:text-sm max-sm:w-full">
            Let's make this space work for all curious minds.
          </p>
        </div>
      </div>
    </section>
  );
};
