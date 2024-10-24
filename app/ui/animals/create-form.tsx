'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import Link from 'next/link';
import {
  BugAntIcon,
  CalendarIcon,
  MapIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { FireIcon } from '@heroicons/react/20/solid';
import { useFarmsHook } from '@/app/hooks/useFarmData';
import { CreateAnimalPayload } from '@/app/types/createAnimalPayload';
import { createAnimalData } from '@/app/api/auth/[...nextauth]/createAnimal';

const CreateAnimalForm = () => {
  const router = useRouter();
  const { useFarmsQuery } = useFarmsHook();
  const { data: farmsData, isLoading: loadingFarms, error } = useFarmsQuery();
  const farms = farmsData?.data.farms;
  const [formData, setFormData] = useState<CreateAnimalPayload>({
    name: '',
    type: 'cow',
    breed: '',
    birthDate: '',
    gender: '',
    farm: '',
    milkProductions: [],
    healthRecords: [],
    breedingHistory: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response  = await createAnimalData(formData)
    console.log(response.status)
    if (response?.status === 201) {
      router.push('/dashboard/animals')
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Farm Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose farm
          </label>
          <div className="relative">
            <select
              id="farm"
              name="farm"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              value={formData.farm}
              onChange={handleChange}
              aria-describedby='farm-error'
            >
              <option value="" disabled>
                Select a farm
              </option>
              {farms?.map((farm) => (
                <option key={farm._id} value={farm._id}>
                  {farm.name}
                </option>
              ))}
            </select>
            <MapIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="farm-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {error?.message}
            </p>
          </div>
        </div>

        {/* Animal Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Enter the name of the animal
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter animal name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby='name-error'
              />
              <BugAntIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {/* <div id="name-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.amount &&
                  state.errors.amount.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div> */}
          </div>
        </div>

        {/* Animal Breed */}
        <div className="mb-4">
          <label htmlFor="breed" className="mb-2 block text-sm font-medium">
            Enter the breed of the animal
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="breed"
                name="breed"
                type="text"
                value={formData.breed}
                onChange={handleChange}
                placeholder="Enter animal breed"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby='breed-error'
              />
              <FireIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {/* <div id="breed-error" aria-live="polite" aria-atomic="true">
                {state?.errors?.amount &&
                  state.errors.amount.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div> */}
          </div>
        </div>

        {/* Animal Gender */}
        <div className="mb-4">
          <label htmlFor="gender" className="mb-2 block text-sm font-medium">
            Select animal gender
          </label>
          <div className="relative">
            <select
              id="gender"
              name="gender"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              value={formData.gender}
              onChange={handleChange}
              aria-describedby='sex-error'
            >
              <option value="" disabled>
                Select animal gender
              </option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            <MapIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          {/* <div id="customer-error" aria-live="polite" aria-atomic="true">
              {state?.errors?.customerId &&
                state.errors.customerId.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div> */}
        </div>

        {/* Birth Date */}
        <div className="mb-4">
          <label htmlFor="birth-date" className="mb-2 block text-sm font-medium">
            Enter the birth date of the animal
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="birthDate"
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
                placeholder="Enter birth date"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby='birth-date-error'
                max={new Date().toISOString().split("T")[0]}
              />
              <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Invoice Status
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby='status-error'
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Paid <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
            <div id="status-error" aria-live="polite" aria-atomic="true">
              {state?.errors?.status &&
                state.errors.status.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </fieldset> */}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/animals"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Animal</Button>
      </div>
    </form>
  );
};

export default CreateAnimalForm;
