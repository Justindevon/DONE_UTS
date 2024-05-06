import Pagination from '@/app/ui/reservation/pagination';
import { lusitana } from '@/app/ui/fonts';
import { fetchFilteredCustomers, fetchCustomerPages } from '@/app/lib/data';
import { CreateCustomer } from '@/app/ui/customers/buttons';
import CustomersTable from '@/app/ui/customers/table';
import Search from '@/app/ui/search';

export default async function Page({

  searchParams,
}: {
  searchParams?: {
    page?: string;
    query?: string;
  };
}) {

  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);
  const totalPages = await fetchCustomerPages(query);


  return (
    <div className="w-full">
      <h1 className={`mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>

      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
        <CreateCustomer/>
      </div>

      <CustomersTable customers={customers}/>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages}/>
      </div>
    </div>
  );
}