/** @type {import('next').NextConfig} */
const nextConfig = {
// image domain set
    images : {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.rawg.io',
            },
        ],
    }
};

export default nextConfig;
