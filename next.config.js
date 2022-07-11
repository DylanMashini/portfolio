/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});
const withPreact = require("next-plugin-preact");

module.exports = withBundleAnalyzer(
	withPreact({
		async rewrites() {
			return [
				{
					source: "/api/:path*",
					destination: "https://api.example.com/:path*",
				},
			];
		},
		experimental: {
			modern: true,
			esmExternals: false,
		},
	})
);
