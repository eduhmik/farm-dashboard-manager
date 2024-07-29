import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
            src="/final.png"
            width={100}
            height={100}
            className='hidden md:block'
            alt='Screenshots of the mobile showing desktop version'
          />
          <Image
            src="/final.png"
            width={50}
            height={50}
            className="block md:hidden"
            alt='Screenshots of the mobile showing desktop version'
          />
      <p className="text-[28px]">Mkulima Smart</p>
    </div>
  );
}
