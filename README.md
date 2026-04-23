# RegArMAT — Registro Argentino de Microangiopatías Trombóticas

Web app científica para el registro de pacientes con MAT (Microangiopatías Trombóticas) en la República Argentina.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4** (CSS-first config)
- **shadcn/ui** + Radix UI primitives
- **Formik + Yup** para formularios y validación
- **EmailJS** para envío del formulario de registro
- **SweetAlert2** para alerts

## Requisitos

- Node.js **>= 20.9** (Next 16 lo exige)
- npm 10 o superior

## Setup

```bash
npm install
cp .env.local.example .env.local   # ver "Variables de entorno" abajo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Script              | Descripción                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo con Turbopack         |
| `npm run build`     | Build de producción                          |
| `npm run start`     | Servidor de producción                       |
| `npm run lint`      | ESLint (flat config, `eslint.config.mjs`)    |
| `npm run typecheck` | `tsc --noEmit`                               |

## Variables de entorno

Las usa el formulario de registro (EmailJS, lado cliente):

```
NEXT_PUBLIC_EMAIL_SERVICE_ID=...
NEXT_PUBLIC_EMAIL_TEMPLE_ID=...
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=...
```

> Nota: `NEXT_PUBLIC_EMAIL_TEMPLE_ID` (typo histórico por "TEMPLATE") se mantiene tal cual para no romper la integración existente.

## Estructura

```
src/
├── app/                    # App Router (páginas y layouts)
│   ├── bibliografia/
│   ├── condiciones/
│   ├── contacto/
│   ├── descripcion-mat/
│   ├── formulario/
│   ├── registro/
│   ├── score-plasmic/
│   ├── videos/
│   ├── globals.css         # Tailwind v4 + tokens de tema
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                 # shadcn/ui primitives (button, card, accordion, tabs, sheet, navigation-menu, stepper, input)
│   ├── navsec/
│   ├── youtubevideo/
│   ├── AccordionInfo.tsx
│   ├── Conditions.tsx
│   ├── Footer.tsx
│   ├── Form.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── TabRegister.tsx
└── lib/
    └── utils.ts            # cn() helper para shadcn
```

## Deploy

Compatible con cualquier proveedor que soporte Node 20+ (Vercel, Netlify, etc.).
