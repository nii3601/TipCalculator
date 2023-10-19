/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    env:{
      TEST_ENV:process.env.TEST_ENV
    }
  },
}

module.exports = nextConfig
