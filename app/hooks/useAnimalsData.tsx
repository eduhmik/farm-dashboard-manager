'use client';
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { AnimalsResponse } from "../types/animal-types";
import fetchAnimalData from "../api/auth/[...nextauth]/fetchAnimalData";
export const useAnimalsHook  = () =>{
  const useAnimalsQuery = ()=>{
    return useQuery<AnimalsResponse, Error>({
      queryKey: ['GetAnimalsData',],
      queryFn: fetchAnimalData,
      placeholderData: keepPreviousData
    });
  }

  return {
    useAnimalsQuery
  }
}