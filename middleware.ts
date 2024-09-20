import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers'
import { getToken } from "next-auth/jwt";

export default NextAuth(authConfig).auth;

// 1. Specify protected and public routes
// const protectedRoutes = ['/dashboard']
// const publicRoutes = ['/login', '/signup', '/']
 
// export async function middleware(req: NextRequest) {
//   // 2. Check if the current route is protected or public
//   const path = req.nextUrl.pathname
//   const isProtectedRoute = protectedRoutes.includes(path)
//   const isPublicRoute = publicRoutes.includes(path)
 
//   // 3. Decrypt the session from the cookie
//   const cookie = cookies().get('session')?.value
//   // const session = await decrypt(cookie)

//   const secret = process.env.AUTH_SECRET;

//   if (!secret) {
//     throw new Error('NEXTAUTH_SECRET is not defined');
//   }

//   const salt = process.env.AUTH_SALT;

//   if (!salt) {
//     throw new Error('NEXTAUTH_SALT is not defined');
//   }

//   const token = await getToken({ req, secret, salt });
 
//   // 5. Redirect to /login if the user is not authenticated
//   if (isProtectedRoute && !token) {
//     return NextResponse.redirect(new URL('/login', req.nextUrl))
//   }
 
//   // 6. Redirect to /dashboard if the user is authenticated
//   if (
//     isPublicRoute &&
//     token &&
//     !req.nextUrl.pathname.startsWith('/dashboard')
//   ) {
//     req.headers.set('Authorization', `Bearer ${token}`);
//     return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
//   }
 
//   return NextResponse.next()
// }
// export async function middleware(req: NextRequest) {
  // const secret = process.env.AUTH_SECRET;

  // if (!secret) {
  //   throw new Error('NEXTAUTH_SECRET is not defined');
  // }

  // const salt = process.env.AUTH_SALT;

  // if (!salt) {
  //   throw new Error('NEXTAUTH_SALT is not defined');
  // }

  // const token = await getToken({ req, secret, salt });

  // const loginUrl = new URL('/login', req.url);

  // // Avoid infinite redirect loop
  // if (token) {
  //   console.log("token: " + token);
  //   req.headers.set('Authorization', `Bearer ${token}`);
  //   return NextResponse.next();
  // } else if (req.nextUrl.pathname !== loginUrl.pathname) {
  //   return NextResponse.redirect(loginUrl);
  // }

  // // If already on login page, let the request pass through
  // return NextResponse.next();
// }

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};