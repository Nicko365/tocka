# Implantação em Produção

Este documento fornece instruções para implantar o projeto em produção.

## Pré-requisitos

- Node.js (versão 18.x ou superior)
- npm ou yarn

## Estrutura de Arquivos

Após a compilação para produção, o diretório `out/` contém todos os arquivos estáticos prontos para implantação.

## Compilando para Produção

Execute o seguinte comando para compilar o projeto para produção:

```bash
npm run production
```

ou

```bash
npm run build
```

Isso irá gerar os arquivos estáticos no diretório `out/`.

## Otimizações para Produção

- O projeto está configurado para gerar uma exportação estática (`output: 'export'`)
- O modo de barra final (`trailingSlash: true`) está habilitado
- A otimização de imagens do Next.js está desativada para compatibilidade com exportação estática
- As imagens devem estar localizadas na pasta `public/` para serem servidas corretamente

## Hospedagem Estática

Os arquivos gerados na pasta `out/` podem ser hospedados em qualquer servidor de arquivos estáticos como:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Servidor Apache/Nginx

### Exemplo de configuração para Nginx

```nginx
server {
    listen 80;
    server_name seu-dominio.com;
    root /path/to/seu/projeto/out;
    index index.html;

    # Garante que todas as rotas sejam direcionadas para index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cabeçalhos de segurança opcionais
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
}
```

### Exemplo de hospedagem no GitHub Pages

1. Faça o build do projeto (`npm run build`)
2. Copie todos os arquivos do diretório `out/` para o branch `gh-pages`
3. Configure o GitHub Pages para servir a partir do branch `gh-pages`

## Variáveis de Ambiente

- `NEXT_PUBLIC_SITE_URL`: URL do site em produção (padrão: http://localhost:3000)

## Considerações Importantes

- O arquivo `promo.mp4` está sendo gerenciado pelo Git LFS devido ao seu tamanho
- O arquivo `promo2.mp4` foi excluído do repositório devido ao seu tamanho exceder o limite de 100MB do GitHub
- Se necessário, faça o upload de arquivos grandes para um serviço de armazenamento externo e referencie-os via URL
- A pasta `.next/` e `node_modules/` são ignoradas no versionamento