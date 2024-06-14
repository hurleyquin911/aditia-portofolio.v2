/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/aditia-portofolio.v2/" : "",
  basePath:
    process.env.NODE_ENV === "production" ? "/aditia-portofolio.v2" : "",
};

export default nextConfig;
