# Dia 2 — PWA + Share Target (patch pronto)

Arquivos prontos para tornar o site instalável (PWA) e receber áudio via **Compartilhar** (Android).

## Como aplicar (sem programar)
1) Entre no seu repositório no GitHub (`vta`) → guia **Code**.
2) Clique **Add file** → **Upload files** (ou “…or upload an existing file”).
3) Arraste **todo o conteúdo** da pasta `vta-day2-pwa` para a área de upload:
   - `public/manifest.webmanifest`
   - `public/sw.js`
   - `public/icons/192.png`
   - `public/icons/512.png`
   - `components/RegisterSW.tsx`
   - `app/layout.tsx` (substituir)
   - `app/share-target/route.ts`
   - `app/confirmar/page.tsx`
4) Clique em **Commit changes**. Aguarde 1–2 minutos e abra seu site Vercel.

## Como testar
- **Instalar app (desktop)**: no Chrome, clique no ícone de “Instalar” (um + na barra de endereço).
- **Instalar no celular (Android)**: Chrome → menu ⋮ → “Adicionar à tela inicial”.
- **Compartilhar do WhatsApp (Android)**: abra um áudio → Compartilhar → selecione **VTA**.
  Você verá a tela “Áudio recebido ✅”.
