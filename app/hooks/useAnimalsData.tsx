import { base_url } from "../lib/utils";
import { useState, useEffect } from "react";
import axios from "axios";
import { ApiResponse, UseAnimalsReturnType } from "../types/animal-types";
import { getSession, useSession } from "next-auth/react";

export const useAnimalsData = (): UseAnimalsReturnType => {
  const [animalsData, setAnimals] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { data: session } = useSession()
  console.log('session', session);

  // useEffect(() => {
  const fetchAnimalData = async (): Promise<void> => {
    const session = await getSession()
    console.log(">>>>>>>>", session);
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${base_url}/v1/animals`, {
          headers: {
            Authorization: `Bearer ${session?.data.token}`,
          },
        }
      );
      console.log(response);
      setAnimals(response.data.data.animals);
    } catch (error: any) {
      console.error('Error fetching animals', error);
      setError(error.message);
    }
    finally {
      setLoading(false);
    }
  };

  // fetchAnimalData();
  // }, []);

  return { fetchAnimalData, animalsData, loading, error };
}