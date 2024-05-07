import Form from '@/app/ui/reservations/edit-form';
import Breadcrumbs from '@/app/ui/reservations/breadcrumbs';
import { fetchReservationById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [reservation, customers] = await Promise.all([
        fetchReservationById(id),
        fetchCustomers(),
    ]);

    if (!reservation) {
        notFound();
    }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Reservations', href: '/dashboard/reservations' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/reservations/${id}/edit`,
            active: true,
          },
        ]}
      />  
      <Form reservations={reservation} customers={customers} />
    </main>
  );
}