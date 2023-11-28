/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    images: {
        domains: ['res.cloudinary.com', 'lh3.googleusercontent.com', 'beforeigosolutions.com', 'firebasestorage.googleapis.com']
    },
}

module.exports = nextConfig;
