import { BadgeText } from './BadgeText';
import { SectionHeading } from './SectionHeading';

interface SectionIntroProps {
  badgeText: string;
  headingText: string;
}

function SectionIntro({ badgeText, headingText }: SectionIntroProps) {
  return (
    <header className='flex flex-col items-center mb-4'>
      <BadgeText badgeText={badgeText} />
      <SectionHeading headingText={headingText} />
    </header>
  );
}

export { SectionIntro };
