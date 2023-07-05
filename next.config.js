// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
	swcMinify: true,
	experimental: { appDir: true },
	output: 'export'
};

module.exports = nextConfig;
