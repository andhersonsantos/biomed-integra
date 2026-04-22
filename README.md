# Biomed Integra — site institucional

Site de landing page em **português (pt-BR)** da **Clínica Biomed Integra**, biomedicina integrativa em **São José dos Campos** (Parque Industrial). A interface apresenta a marca, serviços, remissão de diabetes, plano de assinatura, benefícios, FAQ, contato, SEO com `MedicalClinic` (schema.org) e link flutuante para **WhatsApp**.

## Stack

| Camada               | Tecnologia                                                                                     |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| UI                   | React 19, TypeScript                                                                           |
| Build                | Vite 6, `@vitejs/plugin-react`                                                                 |
| Estilo               | Tailwind CSS 4 (`@tailwindcss/vite`), fontes **Inter** e **Outfit** (`@fontsource-variable/*`) |
| Animação             | Motion                                                                                         |
| SEO                  | `react-helmet-async`                                                                           |
| Navegação em âncoras | `react-scroll`                                                                                 |
| Ícones               | `lucide-react`                                                                                 |

## Estrutura principal

- `src/App.tsx` — layout: `SEO`, `Navbar`, seções em `lazy` + `Suspense`, `Footer`, `FloatingWhatsApp`
- `src/components/Sections/` — `Hero` (eager), `DiabetesRemission`, `Services`, `Subscription`, `Benefits`, `FAQ`, `Contact` (há componentes adicionais como `About` e `Testimonials` no repositório; não estão montados no `App` atual)
- `src/components/Layout/` — `Navbar`, `Footer`
- `src/components/SEO.tsx` — título, descrição, canonical, Open Graph, JSON-LD
- `src/index.css` — tokens de cor **Biomed** (azuis, areia, bege) e estilos globais

## Pré-requisitos

- **Node.js** (recomendado: versão compatível com as dependências do `package.json`)
- **npm** (ou outro gerenciador compatível com o lockfile do projeto)

## Instalação e execução

```bash
npm install
npm run dev
```

O script de desenvolvimento sobe o Vite em **http://localhost:3000** (host `0.0.0.0` habilitado para acesso na rede local).

- **Produção:** `npm run build` gera a pasta `dist/`. `npm run preview` serve o build localmente.
- **Qualidade:** `npm run lint` (ESLint + `tsc --noEmit`), `npm run typecheck`, `npm run format` / `npm run format:check`.

## Imagem do hero (WebP)

O `Hero` referencia `/hero-dra.webp` com fallback remoto. Para gerar o WebP a partir do asset publicado (usa **sharp**):

```bash
npm run optimize:hero
```

O ficheiro é escrito em `public/hero-dra.webp`.
