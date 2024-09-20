/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    },
    experimental: {
        ppr: 'incremental',
    },
};

export default nextConfig;
