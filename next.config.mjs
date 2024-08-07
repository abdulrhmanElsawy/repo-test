const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: isProd ? '/repo-test' : '',
    assetPrefix: isProd ? '/repo-test' : '',
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
    output: "export",
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
