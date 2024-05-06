import Pagination from '@/app/ui/reservations/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/reservations/table';
import { CreateReservations } from '@/app/ui/reservations/buttons';
import { lusitana } from '@/app/ui/fonts';
import { fetchReservationsPage, fetchLatestReservations } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchReservationsPage(query);
  // const latestReservations = await fetchLatestReservations(); 

  return (
    <div>
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className={`${lusitana.className} text-2xl`}>Reservations</h1>
        </div>
        <p>221712014</p>
        <p>Bernardus Ricard Justin Devon</p>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search Reservations..." />
          <CreateReservations />
        </div>
          <Table query={query} currentPage={currentPage} />
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}