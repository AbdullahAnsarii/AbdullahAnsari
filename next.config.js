/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },
  images:{
    loader: 'akamai',
    path: "http://abdullahansari.me/AbdullahAnsari/"
  },
  basePath: "/AbdullahAnsari",
  assetPrefix: "/AbdullahAnsari"
}
