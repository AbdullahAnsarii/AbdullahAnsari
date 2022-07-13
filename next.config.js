/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },
  images:{
    loader: 'akamai',
    path: "http://abdullahansari.me/",
    domains: ['img.icons8.com']
  },
  // basePath: "/AbdullahAnsari",
  // assetPrefix: "/AbdullahAnsari"
}
