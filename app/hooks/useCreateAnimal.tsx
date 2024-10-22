'use client';
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { AnimalResponse } from "../types/animal-types";
import { createAnimalData } from "../api/auth/[...nextauth]/createAnimal";
export const useCreateAnimalHook = () => {
    const useCreateAnimalQuery = () => {
        return useQuery<AnimalResponse, Error>({
            queryKey: ['CreateAnimal',],
            queryFn: createAnimalData,
            placeholderData: keepPreviousData
        });
    }

    return {
        useCreateAnimalQuery
    }
}