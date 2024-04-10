/** @type {import('next').NextConfig} */
const nextConfig = {
    // Specify the output configuration
    output: 'export',
    
    // Configure images to disable the Image Optimization API
    images: {
      unoptimized: true
    }
  };
  
  module.exports = nextConfig;
  