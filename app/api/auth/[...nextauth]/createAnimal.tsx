import axios from 'axios';
import { base_url } from '../../../lib/utils';
import { getSession } from 'next-auth/react';

export const createAnimalData = async (animalData: any) => {
    const session = await getSession()

    try {
        const response = await axios.post(`${base_url}/v1/animals`,
            animalData,
            {
                headers: {
                    // @ts-ignore
                    Authorization: `Bearer ${session?.accessToken}`,
                },
            });    
        return response.data;
    } catch (err) {
        console.error('Error creating animal:', err);
        throw err;
    }
};