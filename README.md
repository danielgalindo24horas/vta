# VTA — Voice‑to‑Action (starter do Dia 1)

Este é o esqueleto mínimo (Next.js 14 + App Router + TS) para colocar o site no ar **hoje**.

## Requisitos
- Node.js 18+ (recomendado 20 LTS)
- PNPM ou NPM
- Conta no GitHub e Vercel

## Passo a passo (15–30 min)
1) **Instalar dependências**
   ```bash
   pnpm install
   # ou npm install
   ```

2) **Rodar local**
   ```bash
   pnpm dev
   # ou npm run dev
   ```
   Abra http://localhost:3000

3) **Commit inicial + GitHub**
   ```bash
   git init
   git add .
   git commit -m "chore: VTA starter Dia 1"
   gh repo create vta --public --source=. --remote=origin --push
   # (se não usa gh CLI, crie o repo manualmente e faça:
   # git remote add origin https://github.com/<seu-user>/vta.git
   # git push -u origin main)
   ```

4) **Deploy na Vercel**
   - Acesse https://vercel.com/import, escolha o repositório `vta` e finalize.
   - Depois de buildar, você terá um domínio `https://vta-<seu-user>.vercel.app`.

5) **Próximos passos (amanhã)**
   - PWA + `manifest.webmanifest`
   - Share Target (receber áudio via “Compartilhar” do WhatsApp)
   - Rotas de transcrição e parsing
   - Integração Google (login + Calendar/Tasks)

## Estrutura
```
app/
  layout.tsx
  page.tsx
  globals.css
next.config.mjs
package.json
tsconfig.json
```

---
© 2025 VTA — Voice‑to‑Action (MVP)
