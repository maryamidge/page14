import React from 'react';
import { RuleCard } from './RuleCard';

const rules = [
  {
    emoji: '🧠',
    title: 'Own your spark.',
    description: 'Share your thoughts, not someone else\'s.',
    borderColor: '#FBC345',
    top: '5px'
  },
  {
    emoji: '🤝',
    title: 'Build with kindness.',
    description: 'Feedback is gold — give it with heart, receive it with openness.',
    borderColor: '#205B3D',
    top: '115px'
  },
  {
    emoji: '🔒',
    title: 'Keep it safe.',
    description: 'No spam, no pressure. Respect others\' ideas and space.',
    borderColor: '#B5453D',
    top: '210px'
  },
  {
    emoji: '🧭',
    title: 'Be a good co-builder.',
    description: 'We\'re here to grow together. If something feels off, tell us.',
    borderColor: '#405E71',
    top: '305px'
  }
];

export const RulesSection: React.FC = () => {
  return (
    <section 
      className="inline-flex flex-col items-start gap-4 absolute w-[428px] h-[509px] pl-6 pr-[22px] pt-5 pb-[125px] left-0 top-[274px] max-md:w-full max-md:pt-5 max-md:pb-[125px] max-md:px-4 max-sm:pt-5 max-sm:pb-[125px] max-sm:px-3"
      aria-labelledby="rules-heading"
    >
      <h2 id="rules-heading" className="sr-only">Community Rules</h2>
      {rules.map((rule, index) => (
        <RuleCard
          key={index}
          emoji={rule.emoji}
          title={rule.title}
          description={rule.description}
          borderColor={rule.borderColor}
          className={`absolute left-6 max-sm:left-3`}
          style={{ top: rule.top }}
        />
      ))}
    </section>
  );
};
