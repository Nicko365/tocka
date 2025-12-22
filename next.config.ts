import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Gera uma aplicação estática para fácil hospedagem
  trailingSlash: true, // Garante que todos os caminhos tenham barra final
  images: {
    unoptimized: true, // Desativa a otimização de imagens do Next.js quando usando export estático
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
};

export default nextConfig;
