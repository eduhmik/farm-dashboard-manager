'use client';
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { FarmResponse } from "../types/farm-types";
import fetchFarmData from "../api/auth/[...nextauth]/fetchFarmData";
export const useFarmsHook  = () =>{
  const useFarmsQuery = ()=>{
    return useQuery<FarmResponse, Error>({
      queryKey: ['GetFarmsData',],
      queryFn: fetchFarmData,
      placeholderData: keepPreviousData
    });
  }

  return {
    useFarmsQuery
  }
}