/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },
  images:{
    loader: 'akamai',
    path: "http://abdullahansari.me/"
  },
  basePath: "/AbdullahAnsari",
  assetPrefix: "/AbdullahAnsari"
}
