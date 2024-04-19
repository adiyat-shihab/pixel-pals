/** @type {import('next').NextConfig} */
const nextConfig = {
// image domain set
    images : {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.igdb.com',
            },
        ],
    }
};

export default nextConfig;
