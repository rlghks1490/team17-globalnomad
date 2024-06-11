/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["sprint-fe-project.s3.ap-northeast-2.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/globalnomad/activity_registration_image/**",
      },
    ],
  },
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: { not: /components/ },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: /components/,
        use: ["@svgr/webpack"],
      },
    );

    return config;
  },
};

export default nextConfig;
