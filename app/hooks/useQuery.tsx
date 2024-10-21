import { useState, useEffect } from 'react';
import axios from 'axios';
import { getSession } from 'next-auth/react';

type FetchStatus = 'idle' | 'loading' | 'success' | 'error';

function useQuery<T>(endpoint: string) {
    const [data, setData] = useState<ApiResponse<T> | null>(null);
    const [status, setStatus] = useState<FetchStatus>('idle');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setStatus('loading');
            setError(null);

            try {
                const session = await getSession();
                const response = await axios.get<ApiResponse<T>>(endpoint, {
                    headers: {
                        // @ts-ignore
                        Authorization: `Bearer ${session?.accessToken}`,
                    },
                });

                setData(response.data);
                setStatus('success');
            } catch (err: any) {
                setError(err.message || 'An error occurred');
                setStatus('error');
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, status, error };
}

export default useQuery;
