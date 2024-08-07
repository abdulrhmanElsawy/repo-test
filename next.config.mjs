/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
    output: "export",
    distDir: 'build',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    reactStrictMode: true,
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
            use: 'file-loader',
        });

        return config;
    },

};

export default nextConfig;
