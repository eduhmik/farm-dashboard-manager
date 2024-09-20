import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { base_url } from './app/lib/utils';
import axios from 'axios';

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (!parsedCredentials.success) {
                    console.log('Invalid credentials format');
                    return null;
                }

                const { email, password } = parsedCredentials.data;

                try {
                    // Replace with your API endpoint
                    const response = await axios.post(`${base_url}/v1/auth/login`, { email, password });

                    if (response.status === 200 && response.data.status === 200) {
                        const { user, token } = response.data.data;
                        return {
                            user: {
                                id: user._id,
                                email: user.email,
                                firstName: user.firstName,
                                lastName: user.lastName,
                            },
                            token: token
                        };
                    } else {
                        console.log('Invalid credentials. Failed to authenticate');
                        return null;
                    }
                } catch (error) {
                    console.error('Failed to authenticate using API:', error);
                    return null;
                }
            },
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.token = (user as any).token as string;
                token.accessToken = (user as any).token
            }
            console.log("Token", token)
            console.log("User", user)
            return token;
        },
        async session({ session, token }) {
            console.log("HERRRRREEEEE")
            console.log('SESSION', session)
            console.log('TOKEN', token)

            // (session as any).accessToken = token.accessToken;

            // console.log('Session returned:', session);
            session.data.token = token.token as string;
            // @ts-ignore
            session.accessToken = token.accessToken
            return session;
        }
    }
});