import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Turbopack scoped to this repo even if another package-lock.json exists
  // higher in the user's Windows home directory.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
