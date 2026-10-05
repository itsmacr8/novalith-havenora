import { PLACEMENT_CLASSES, TEAM_MEMBERS } from '@/lib/mock-data';
import Image from 'next/image';

function Team() {
  return (
    <>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-2'>
        {TEAM_MEMBERS.map((member) => (
          <article
            key={member.name}
            className={`flex min-w-0 flex-col items-center ${PLACEMENT_CLASSES[member.placement]}`}
          >
            <div className='grid w-full grid-cols-1 grid-rows-1'>
              <div className='col-start-1 row-start-1 aspect-130/158 overflow-hidden rounded-xl bg-neutral-200'>
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  width={260}
                  height={316}
                  sizes='(max-width: 512px) 26vw, 130px'
                  className='h-full w-full object-cover object-[50%_38%]'
                />
              </div>
            </div>

            <div
              className={
                'z-10 -mt-8 grid place-content-center min-h-8 rounded-lg px-2 py-2 bg-primary text-accent-lighter'
              }
            >
              <p className='m-0 uppercase'>{member.role}</p>
              <p className='mt-1 underline decoration-1 underline-offset-1'>
                {member.name}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export { Team };
