import { withPayload } from "@payloadcms/next/withPayload"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "marty-three.vercel.app"
      },
      {
        protocol: "http",
        hostname: "localhost"
      }
    ],
    dangerouslyAllowLocalIP: true
  }
}

export default withPayload(nextConfig)
