'use client';
import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/animals/buttons';
import InvoiceStatus from '@/app/ui/animals/status';
import { useAnimalsHook } from '@/app/hooks/useAnimalsData';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
// import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function AnimalsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const { useAnimalsQuery } = useAnimalsHook();
  const { data: animalsData, isLoading: loading, error } = useAnimalsQuery();

  if (error) return <div className='text-red-500'>{error.message}</div>;

  if (loading) return <div>Loading...</div>;

  const animals = animalsData?.data.animals;

  return (
    <div className='mt-6 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='rounded-lg bg-gray-50 p-2 md:pt-0'>
          <div className='md:hidden'>
            {animals?.map((animal) => (
              <div
                key={animal._id}
                className='mb-2 w-full rounded-md bg-white p-4'
              >
                <div className='flex items-center justify-between border-b pb-4'>
                  <div>
                    <div className='mb-2 flex items-center'>
                      {/* <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      /> */}
                      <p>{animal.name}</p>
                    </div>
                    <p className='text-sm text-gray-500'>{animal.type}</p>
                  </div>
                  <InvoiceStatus status={animal.breed} />
                </div>
                <div className='flex w-full items-center justify-between pt-4'>
                  <div>
                    <p className='text-xl font-medium'>{animal.gender}</p>
                    <p>{formatDateToLocal(animal.birthDate)}</p>
                  </div>
                  <div className='flex justify-end gap-2'>
                    <UpdateInvoice id={animal._id} />
                    <DeleteInvoice id={animal._id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className='hidden min-w-full text-gray-900 md:table'>
            <thead className='rounded-lg text-left text-sm font-normal'>
              <tr>
                <th scope='col' className='px-4 py-5 font-medium sm:pl-6'>
                  Name
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Type
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Breed
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Birth Date
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Gender
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Farm
                </th>
                <th scope='col' className='relative py-3 pl-6 pr-3'>
                  <span className='sr-only'>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              {animals?.map((animal) => (
                <tr
                  key={animal._id}
                  className='w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg'
                >
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    {animal.name}
                  </td>
                  <td className='whitespace-nowrap px-3 py-3'>{animal.type}</td>
                  <td className='whitespace-nowrap px-3 py-3'>
                    {animal.breed}
                  </td>
                  <td className='whitespace-nowrap px-3 py-3'>
                    {new Date(animal.birthDate).toLocaleDateString()}
                  </td>
                  <td className='whitespace-nowrap px-3 py-3'>
                    {animal.gender}
                  </td>
                  <td className='whitespace-nowrap px-3 py-3'>
                    {animal.farm ? animal.farm : 'N/A'}
                  </td>
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    <div className='flex justify-end gap-3'>
                      <UpdateInvoice id={animal._id} />
                      <DeleteInvoice id={animal._id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
