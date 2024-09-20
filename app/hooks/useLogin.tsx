import { useState } from "react";
import { base_url } from "../lib/utils";
import { LoginResponse, UseLoginReturnType } from "../types/login-types";

export const useLogin = (): UseLoginReturnType => {
    const [userData, setUserData] = useState<LoginResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (email: string, password: string): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${base_url}/v1/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Failed to login');
            }

            const data: LoginResponse = await response.json();
            setUserData(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { login, userData, loading, error };
}