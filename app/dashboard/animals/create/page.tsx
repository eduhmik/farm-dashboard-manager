import Form from '@/app/ui/animals/create-form';
import Breadcrumbs from '@/app/ui/animals/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Animals', href: '/dashboard/animals' },
          {
            label: 'Create Animal',
            href: '/dashboard/animals/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}