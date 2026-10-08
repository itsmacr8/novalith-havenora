// 'use client';

// import { useState } from 'react';
// import ServiceCard from './ServiceCard';
// import { SERVICES } from '@/lib/mock-data';

// function ServicesSection() {
//   const [visibleCards, setVisibleCards] = useState(
//     new Set(SERVICES.map((s) => s.id)),
//   );

//   const handleClose = (id: string) => {
//     const updated = new Set(visibleCards);
//     updated.delete(id);
//     setVisibleCards(updated);
//   };

//   return (
//     <section className='py-12'>
//       <div className='flex flex-wrap gap-6 justify-center'>
//         {SERVICES.map(
//           (service) =>
//             visibleCards.has(service.id) && (
//               <ServiceCard
//                 key={service.id}
//                 title={service.title}
//                 imageSrc={service.imageSrc}
//                 imageAlt={service.imageAlt}
//                 onClose={() => handleClose(service.id)}
//               />
//             ),
//         )}
//       </div>
//     </section>
//   );
// }

// export { ServicesSection };
