# Renmat-App

Este proyecto es una aplicación web científica construida con [Next.js](https://nextjs.org/), diseñada para realizar cálculos y visualizaciones de datos.

## ➤ Descripción

Renmat-app proporciona una interfaz intuitiva para que los usuarios puedan ingresar datos, procesarlos a través de algoritmos específicos y visualizar los resultados de manera gráfica. Está orientada a facilitar análisis en el ámbito científico y de investigación.

## 📂 Estructura del Proyecto

El proyecto utiliza la estructura de directorios del App Router de Next.js para una organización moderna y escalable.

renmat-app/
├── public/ # Archivos estáticos (imágenes, fuentes, etc.)
├── src/
│ ├── app/ # Páginas y rutas de la aplicación
│ │ ├── favicon.ico
│ │ ├── globals.css
│ │ ├── layout.js # Plantilla principal de la aplicación
│ │ └── page.js # Página de inicio
│ └── components/ # (Sugerido) Componentes reutilizables de React
├── .eslintrc.json # Configuración de ESLint para el linting de código
├── .gitignore # Archivos y carpetas ignorados por Git
├── next.config.js # Archivo de configuración de Next.js
├── package.json # Dependencias y scripts del proyecto
├── postcss.config.js # Configuración de PostCSS
└── tailwind.config.js # Configuración de Tailwind CSS


## ✨ Tecnologías Utilizadas

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Lenguaje:** [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
-   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
-   **Linting:** [ESLint](https://eslint.org/)

## 🚀 Cómo Empezar

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### Prerrequisitos

-   [Node.js](https://nodejs.org/es/) (versión 18.x o superior)
-   [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/) o [pnpm](https://pnpm.io/)

### Instalación

1.  Clona el repositorio en tu máquina local:
    ```sh
    git clone https://github.com/nhsiciliano/renmat-app.git
    ```
2.  Navega al directorio del proyecto:
    ```sh
    cd renmat-app
    ```
3.  Instala las dependencias del proyecto:
    ```sh
    npm install
    # o
    yarn install
    # o
    pnpm install
    ```

### Ejecución

Una vez instaladas las dependencias, inicia el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en funcionamiento.
