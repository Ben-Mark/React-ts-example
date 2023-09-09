/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    serverIp: process.env.SERVER_IP,
    serverPort: process.env.SERVER_PORT,
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
}


module.exports = nextConfig
