import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "host", value: "support.joinbacktobasics.com" }],
          destination: "/support",
        },
      ],
    };
  },
};

export default nextConfig;
