// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // output: "export",
//   // basePath: "/testing/childrens",
//   // assetPrefix: "/testing/childrens/",
//   // trailingSlash: true,
//   // images: {
//   //   unoptimized: true,
//   //   localPatterns: [
//   //     {
//   //       pathname: "/testing/childrens/**",
//   //       search: "",
//   //     },
//   //   ],
//   // },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/children-publications",
  assetPrefix: "/children-publications",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

