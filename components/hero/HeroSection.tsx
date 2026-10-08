import Card from './Card';
import TrustBar from './TrustBar';

interface IHeroSectionProps {
  readonly backgroundImageSrc: string;
  readonly backgroundImageAlt?: string;
  readonly badgeText?: string;
  readonly headline?: string;
  readonly subtext?: string;
}

function HeroSection({
  badgeText = 'Verified Properties & Group Land Investment',
  headline = 'Own Your Ready Home Today, Or Build Big Together Tomorrow.',
  subtext = 'Discover turnkey flats ready for handover, or join vetted group land-share opportunities to construct your dream home at cost.',
}: IHeroSectionProps) {
  return (
    <section className='bg-[color:var(--bg-menu)] text-[color:var(--text-inverse)] hero-bg'>
      {/* Content Container */}
      <div className='mx-auto flex max-w-7xl flex-col px-4 py-8 lg:px-8'>
        {/* Main Content Area */}
        <div className='my-auto flex max-w-4xl flex-col items-start gap-4 mt-12'>
          {/* Badge */}
          <div className='inline-flex items-center rounded-full border border-[color:var(--border-glass)] bg-[color:var(--bg-card-glass)] px-4 py-1.5 text-xs font-medium tracking-wide text-[color:var(--text-inverse)] backdrop-blur-md'>
            <span className='mr-2 inline-block h-2 w-2 rounded-full bg-[color:var(--accent)]' />
            {badgeText}
          </div>

          {/* Heading & Subtext */}
          <div className='space-y-4'>
            <h1 className='text-h1 font-extrabold tracking-tight text-[color:var(--text-inverse)] sm:text-5xl lg:text-6xl'>
              {headline}
            </h1>
            <p className='max-w-2xl text-lg text-[color:var(--text-muted-inverse)] sm:text-xl'>
              {subtext}
            </p>
          </div>

          {/* Dual Action Cards */}
          <div className='grid w-full grid-cols-1 gap-2 sm:grid-cols-2'>
            <Card
              emoji='🏢'
              title='Ready Flats & Houses'
              description='Move in immediately with guaranteed titles & top amenities.'
              linkText='Browse Available Flats'
              linkHref='/properties/flats'
            />
            <Card
              emoji='📐'
              title='Group Land Share'
              description='Buy land in shares with partners and build at up to 30% lower cost.'
              linkText='Explore Active Shares'
              linkHref='/properties/land-shares'
            />
          </div>
        </div>
        <TrustBar
          projectNumber='100+'
          landNumber='1000+'
          verifiedMember='RAJUK'
        />
      </div>
    </section>
  );
}

export { HeroSection };

// Not in use in the current design, but can be used for future enhancements
