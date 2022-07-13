/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },
  images:{
    loader: 'akamai',
    path: "/public"
  },
  basePath: "/AbdullahAnsari",
  assetPrefix: "/AbdullahAnsari"
}
