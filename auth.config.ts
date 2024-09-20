import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    // @ts-ignore
    jwt: true,
    maxAge: 6 * 60 * 60
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;