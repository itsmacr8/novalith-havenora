interface TrustBarProps {
  readonly projectNumber?: string;
  readonly landNumber?: string;
  readonly verifiedMember?: string;
}

function TrustBar({
  projectNumber = '50+',
  landNumber = '1,200+',
  verifiedMember = 'REHAB',
}: TrustBarProps) {
  return (
    <div className='mt-6 border-t border-[color:var(--border-glass)] pt-4'>
      <div className='flex flex-wrap items-center justify-around gap-6 text-center text-sm font-medium text-[color:var(--text-muted-inverse)] sm:justify-between'>
        <div className='flex items-center gap-2'>
          <span className='font-bold text-[color:var(--text-inverse)]'>
            {projectNumber}
          </span>
          <span>Projects Handover</span>
        </div>
        <div className='hidden h-4 w-px bg-[color:var(--border-glass)] sm:block' />
        <div className='flex items-center gap-2'>
          <span className='font-bold text-[color:var(--text-inverse)]'>
            {landNumber}
          </span>
          <span>Land Shareholders</span>
        </div>
        <div className='hidden h-4 w-px bg-[color:var(--border-glass)] sm:block' />
        <div className='flex items-center gap-2'>
          <span className='rounded bg-[color:var(--bg-card-glass)] px-2 py-0.5 font-bold tracking-wider text-[color:var(--text-inverse)]'>
            {verifiedMember}
          </span>
          <span>Verified Member</span>
        </div>
      </div>
    </div>
  );
}
export { TrustBar };
