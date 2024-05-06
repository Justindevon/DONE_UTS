import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightCircleIcon, ArrowRightIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { inter, lusitana, anton, kanit } from '@/app/ui/fonts';
import Image from 'next/image';
import { UsersIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 relative">
      <Image
        src="/bg_hero.png"
        fill
        sizes="{100}"
        style={{
          objectFit: "cover"
        }}
        alt="Screenshots of the dashboard project"
      />

      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row z-10">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20 bg-opacity-0">
          <p className={`text-3xl text-slate-50 md:text-3xl md:leading-normal ${kanit.className}`}>
            221712014 - Bernardus Ricard Justin Devon
          </p>
          <p className={`text-4xl text-slate-50 md:text-5xl md:leading-normal ${anton.className}`}>
            <strong>Our Barbershop Admin Dashboard</strong>
          </p>
          <Link href='/dashboard'>
            <h1 className={`${kanit.className} antialised flex text-white text-[20px] hover:text-teal-500`}>
              Go to Dashboard
              <ArrowRightCircleIcon className='w-6 mx-2' />
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 relative">
          <div className="text-container absolute top-1/4 left-0 right-0 z-10">
          </div>
        </div>
      </div>
      <header className="w-full">
        <div className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 shadow-md border-slate-500 bg-transparent transition duration-700 ease-out">
          <div className="flex items-center p-4">
            <div>
              <Image
                src="/logo_hero.png"
                alt="Atma Barbershop Logo"
                width={40}
                height={0}
              />
            </div>
            <a className={`text-xl text-slate-50 md:text-3xl md:leading-normal ${kanit.className}`}>
              Atma Barbershop
            </a>
            <div className="flex items-center space-x-4 text-lg font-semibold tracking-tight border-slate-500 ml-auto">
              <UserIcon className="text-white w-5 h-5 md:hidden" />
              <button className="px-6 py-2 text-white transition duration-500 ease-out border border-white rounded-lg hover:bg-transparent hover:ease-in hover:underline hidden md:block">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
