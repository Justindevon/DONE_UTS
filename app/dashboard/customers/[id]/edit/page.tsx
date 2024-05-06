import Form from '@/app/ui/customers/edit-form';
import Breadcrumbs from '@/app/ui/customers/breadcrumbs';
import { fetchCustomersById, fetchCustomers } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {

    const id = params.id;
    const [Customer] = await Promise.all([fetchCustomersById(id)]);
    
    return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Edit Customer',
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form customers={Customer} />
    </main>
  );
}