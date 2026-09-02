---
name: "RegArMAT — Registro Argentino de Microangiopatías Trombóticas"
description: "Atlas científico territorial para una red clínica nacional."
colors:
  atlas-paper: "#f7fafc"
  atlas-white: "#ffffff"
  atlas-ink: "#0b2b4b"
  atlas-ink-soft: "#36536c"
  atlas-blue: "#2f6fa3"
  atlas-blue-soft: "#dcebf4"
  atlas-teal: "#3f8e95"
  atlas-teal-dark: "#286970"
  atlas-teal-soft: "#dceeed"
  atlas-red: "#a94b45"
  atlas-red-dark: "#843833"
  atlas-line: "#cbdbe5"
  atlas-footer: "#08243d"
  surface-soft: "#edf4f7"
typography:
  display:
    fontFamily: "Sofia Sans, sans-serif"
    fontSize: "clamp(2.6rem, 4.7vw, 4.8rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Sofia Sans, sans-serif"
    fontSize: "clamp(2.25rem, 4.5vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Sofia Sans, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Sofia Sans, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  action:
    fontFamily: "Sofia Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
  navigation:
    fontFamily: "Sofia Sans, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
  label:
    fontFamily: "Sofia Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: "1.25rem"
    letterSpacing: "0.13em"
rounded:
  md: "0.375rem"
  xl: "0.75rem"
  2xl: "1rem"
  full: "9999px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.25rem"
  "6": "1.5rem"
  "8": "2rem"
  "12": "3rem"
  "16": "4rem"
  "20": "5rem"
  "24": "6rem"
  "28": "7rem"
components:
  button-primary:
    backgroundColor: "{colors.atlas-red}"
    textColor: "{colors.atlas-white}"
    rounded: "{rounded.xl}"
    padding: "0.75rem 1.5rem"
    typography: "{typography.action}"
  button-primary-hover:
    backgroundColor: "{colors.atlas-red-dark}"
    textColor: "{colors.atlas-white}"
    rounded: "{rounded.xl}"
    padding: "0.75rem 1.5rem"
    typography: "{typography.action}"
  button-secondary:
    backgroundColor: "{colors.atlas-white}"
    textColor: "{colors.atlas-ink}"
    rounded: "{rounded.xl}"
    padding: "0.75rem 1.5rem"
    typography: "{typography.action}"
  network-card:
    backgroundColor: "{colors.atlas-white}"
    textColor: "{colors.atlas-ink}"
    rounded: "{rounded.2xl}"
    width: "min(100%, 620px)"
  tab-selected:
    backgroundColor: "{colors.atlas-blue-soft}"
    textColor: "{colors.atlas-ink}"
    rounded: "{rounded.xl}"
    padding: "0.75rem 1rem"
    typography: "{typography.action}"
---

# Design System: RegArMAT

## Overview

**Creative North Star: "Atlas de la red clínica"**

RegArMAT se presenta como una red nacional de conocimiento clínico. Su mundo visual es un atlas científico argentino: papel luminoso, trazos topológicos, nodos clínicos y una paleta de azul marino, teal y rojo óxido. La composición es minimalista, profesional y científica; evita la portada sanitaria genérica basada en fotografías de laboratorio y mosaicos de tarjetas.

La interfaz privilegia jerarquías grandes, navegación compacta, superficies claras y acciones inequívocas. El primer recorrido comunica propósito, comunidad convocada y las dos decisiones operativas —solicitar acceso o entrar a REDCap— mientras la figura territorial convierte la red en una firma reconocible. El movimiento es sutil y funcional: la figura entra una vez con el hero y el resto de los estados responde sin espectáculo.

**Key Characteristics:**

- Papel casi blanco y superficies blancas como campo editorial.
- Azul marino para estructura y confianza; teal para conexión; rojo óxido para acción.
- Titulares densos en Sofia Sans, texto de lectura amplio y límites de línea explícitos.
- Topología territorial, nodos y divisores finos en lugar de fotografía clínica decorativa.
- Foco azul o cyan claramente visible y reducción de movimiento respetada.

## Colors

La paleta moderniza el azul y el rojo institucionales mediante un teal de conexión y neutros fríos de papel; cada acento tiene una función estable.

### Primary

- **Tinta de Atlas** (`atlas-ink`, #0b2b4b): estructura principal, titulares, texto sobre superficies claras y fondo de la sección de acceso.
- **Azul de Red** (`atlas-blue`, #2f6fa3): foco sobre fondos claros, estados interactivos y conexiones de la figura territorial.
- **Azul de Red Suave** (`atlas-blue-soft`, #dcebf4): selección de pestañas, hover discreto y fondos de controles secundarios.

### Secondary

- **Teal Clínico** (`atlas-teal`, #3f8e95): nodos y trayectorias que representan articulación entre profesionales y centros.
- **Teal Clínico Oscuro** (`atlas-teal-dark`, #286970): etiquetas editoriales pequeñas sobre papel o blanco; conserva el carácter teal con contraste AA.
- **Teal Clínico Suave** (`atlas-teal-soft`, #dceeed): selección de texto y feedback cromático liviano.

### Tertiary

- **Rojo Óxido** (`atlas-red`, #a94b45): llamadas a la acción primarias, indicador de navegación y acento del navegador.
- **Rojo Óxido Profundo** (`atlas-red-dark`, #843833): estado hover de la acción primaria y base cromática de su sombra.

### Neutral

- **Papel Luminoso** (`atlas-paper`, #f7fafc): fondo general y lienzo del mapa.
- **Blanco de Superficie** (`atlas-white`, #ffffff): navegación, tarjetas, botones secundarios y contenedores de contenido.
- **Tinta Suave** (`atlas-ink-soft`, #36536c): párrafos, metadatos y texto secundario.
- **Línea Cartográfica** (`atlas-line`, #cbdbe5): bordes, divisores y contornos de baja intensidad.
- **Azul Nocturno** (`atlas-footer`, #08243d): fondo del pie institucional.
- **Superficie Neblina** (`surface-soft`, #edf4f7): superficie auxiliar conservada por el tema global.

### Named Rules

**La regla del atlas.** El azul marino organiza, el teal conecta y el rojo óxido invita a actuar; no intercambiar sus roles por preferencia decorativa.

**La regla del papel.** El campo principal permanece luminoso y frío. Las superficies oscuras se reservan para acceso y cierre institucional.

## Typography

**Display Font:** Sofia Sans (cargada con `next/font`, con fallback sans-serif)
**Body Font:** Sofia Sans (cargada con `next/font`, con fallback sans-serif)

**Character:** Una sola familia sostiene una voz clínica contemporánea y consistente. El contraste proviene del peso, la escala, el espaciado y la longitud de línea, no de mezclar familias tipográficas.

### Hierarchy

- **Display** (800, `clamp(2.6rem, 4.7vw, 4.8rem)`, 1): título principal, con ancho máximo de 14 caracteres y tracking de `-0.035em`.
- **Headline** (800, `clamp(2.25rem, 4.5vw, 4.5rem)`, 1.02): encabezados editoriales de sección; la sección de acceso usa su variante real `clamp(2.35rem, 5vw, 4.8rem)` con line-height 1.
- **Title** (800, 1.875rem y 2.25rem desde 640px, 1.25): títulos dentro del panel de acceso, con tracking de `-0.025em`.
- **Body** (400, 1.125rem, 1.625): texto explicativo y contenido desplegable; los bloques se limitan entre 42ch y 72ch según su función.
- **Body Prominent** (400, 1.25rem y 1.5rem desde 640px, 1.625): introducción del hero.
- **Navigation** (600, 0.95rem, 1.5): enlaces compactos de escritorio.
- **Label** (700, 0.875rem, `0.13em`, uppercase): encabezados de columnas en el footer.

### Named Rules

**La regla de una sola voz.** Usar Sofia Sans en toda la experiencia; construir jerarquía con peso 400/600/700/800 y escala, no con fuentes ornamentales.

**La regla de lectura clínica.** Mantener párrafos amplios con interlineado 1.625 y límites de línea explícitos; no estirar texto médico a todo el ancho disponible.

## Layout

El contenedor principal tiene un ancho máximo de 1440px. Los gutters son 1.25rem en móvil, 2rem desde 640px y 3rem desde 1024px. Las secciones principales usan 5rem de padding vertical en móvil, 6rem desde 640px y 7rem desde 1024px; el hero es algo más compacto arriba y conserva más aire debajo.

La página alterna campos completos de papel, blanco y azul marino. A partir de 1024px, el hero se divide en `0.9fr / 1.1fr`, con la figura limitada a 620px y un mínimo de 500px en la columna visual; el bloque informativo usa `0.72fr / 1.28fr` y el bloque de acceso `0.8fr / 1.2fr`. En móvil todo vuelve a una sola columna sin perder orden semántico. La navegación completa aparece desde 1280px; por debajo se reemplaza por un menú desplegable. Los breakpoints observados son 640px, 768px, 1024px y 1280px.

**La regla de respiración editorial.** Mantener bloques grandes y pocos, separados por ritmo vertical y cambios tonales; no fragmentar el contenido en una cuadrícula de tarjetas pequeñas.

## Elevation & Depth

El sistema es plano por defecto y usa profundidad ambiental sólo para separar objetos funcionales del campo: figura territorial, panel de acceso, CTA primaria y menú móvil. Divisores finos y cambios de tono construyen la mayor parte de la jerarquía.

### Shadow Vocabulary

- **Figura territorial** (`0 22px 55px rgba(11,43,75,0.12)`): eleva el atlas conceptual sobre el papel.
- **Panel de acceso** (`0 24px 60px rgba(3,17,29,0.28)`): separa el panel blanco de la sección azul marino.
- **Acción primaria** (`0 10px 24px rgba(132,56,51,0.20)`; variante interna 0.18): da presencia contenida al rojo óxido.
- **Menú móvil** (`0 14px 30px rgba(11,43,75,0.09)`): confirma la superposición temporal bajo la barra fija.

### Named Rules

**La regla de elevación funcional.** Una sombra debe explicar superposición, prioridad o separación de superficies; nunca decorar texto o divisores.

## Shapes

La forma combina superficies grandes suavemente redondeadas con controles firmes y compactos. Botones, tabs y el disparador móvil usan esquinas de 0.75rem; las tarjetas principales usan 1rem; enlaces y triggers de navegación usan 0.375rem. Los nodos, indicadores y controles del acordeón son circulares. Los bordes de 1px en Línea Cartográfica delimitan sin endurecer la composición.

La figura firma aporta una silueta territorial orgánica, conexiones curvas y nodos de distintos tamaños. Esa geometría pertenece al atlas científico; no debe convertirse en ornamento abstracto desligado de la red.

## Components

### Buttons

- **Shape:** rectángulo suavemente redondeado (0.75rem), con altura mínima de 3rem para las acciones principales.
- **Primary:** Rojo Óxido con texto blanco, peso 700 y padding de 0.75rem × 1.5rem; puede incluir la flecha lineal real de 20px.
- **Hover / Focus:** el hover usa Rojo Óxido Profundo; el foco visible global es un outline Azul de Red de 3px con offset de 3px. Sobre fondos oscuros cambia al cyan `#9fd7da`.
- **Secondary:** superficie blanca, borde Línea Cartográfica y texto Tinta de Atlas; el hover adopta Azul de Red Suave.

### Cards / Containers

- **Corner Style:** 1rem en la figura territorial y el panel de acceso.
- **Background:** blanco para elevar contenido sobre Papel Luminoso o Azul Nocturno.
- **Shadow Strategy:** ambiental y reservada para los roles descritos en Elevation & Depth.
- **Border:** divisores internos de 1px en Línea Cartográfica.
- **Internal Padding:** entre 0.75rem y 1.5rem en cabeceras y pies; el panel de acceso usa 0.75rem, creciendo a 1rem desde 640px.

### Navigation

La barra es sticky, blanca al 95% con blur y borde inferior. El logotipo real `/logoregarmat.png` conserva su proporción y mide 190px, creciendo a 220px desde 640px. Los enlaces de escritorio son compactos y el estado actual se marca con una línea Rojo Óxido de 2px. El CTA permanece separado a la derecha. Bajo 1280px, un botón cuadrado de 44px abre una superficie blanca animada; Escape la cierra y devuelve el foco al botón.

### Accordion

Cada fila se define por divisores, no por una tarjeta. El trigger ocupa todo el ancho, tiene una altura mínima de 4rem, texto de 1.25rem que crece a 1.5rem y un control circular Azul de Red Suave de 2.25rem. El signo más rota 45° cuando el panel está abierto; el contenido conserva un ancho máximo de 72ch. La expansión anima únicamente la altura y mantiene `aria-expanded`, `aria-controls` y una región rotulada.

### Editorial Page Intro

Las páginas interiores comienzan con una cabecera de Papel Luminoso, borde inferior y un contenedor de hasta 1440px. El `h1` escala con `clamp(2.5rem, 5vw, 4.7rem)` y el resumen se limita a 68ch; no se repite un kicker genérico sobre el título. La entrada desplaza 12px sin atenuar el texto, evitando pérdidas transitorias de contraste.

### Registration Flow

El proceso conserva dos pasos visibles como lista ordenada: condición actual en Rojo Óxido, completada con check y Teal Clínico Suave, y pendiente con borde Línea Cartográfica. Cada estado incluye texto —Actual, Completado o Pendiente— para no depender del color. El cambio de paso devuelve el foco al encabezado correspondiente.

Los campos usan etiquetas persistentes, altura mínima de 3rem, borde Línea Cartográfica y errores en Rojo Óxido Profundo. El resumen de error se anuncia de forma asertiva y el éxito de forma cortés; un fallo conserva los valores. La acción de envío mantiene la jerarquía del botón primario.

### Access Tabs

El tablist vive dentro de un panel blanco sobre Azul Nocturno. En móvil los tabs se apilan y desde 640px forman dos columnas. El seleccionado usa Azul de Red Suave y Tinta de Atlas; el inactivo usa Tinta Suave y sólo gana superficie al hover. La interacción implementa roles ARIA, roving tab index y navegación por flechas, Home y End.

### Network Figure

La figura de hasta 620px es la firma visual: una imagen vertical de Argentina articula nodos y conexiones en azul, teal y rojo óxido alrededor del motivo clínico central. Se muestra completa, sin recorte, con una altura máxima de 560px en móvil y 640px en escritorio. Los bloques del hero aparecen con desplazamientos verticales de 14–18px y duraciones de 0.7–0.85s. `MotionConfig` respeta la preferencia de movimiento reducido del usuario.

### Footer

El footer usa Azul Nocturno, tres columnas desde 768px y foco cyan. El logotipo real aparece sobre una cápsula blanca; los enlaces mantienen alturas táctiles de 44px y suman subrayado al hover. Los labels son uppercase con tracking amplio y los textos auxiliares usan azules claros de contraste.

## Do's and Don'ts

### Do:

- **Do** preservar `/logoregarmat.png`, su proporción y el reconocimiento institucional de RegArMAT.
- **Do** mantener Azul de Red para foco visible sobre claro y cyan `#9fd7da` sobre oscuro, con outline de 3px y offset de 3px.
- **Do** usar el rojo óxido para decisiones primarias y reservar el teal para conexiones, nodos y feedback suave.
- **Do** respetar `prefers-reduced-motion` y limitar la firma de red a la entrada sutil compartida con el hero.
- **Do** conservar navegación por teclado, semántica ARIA y objetivos interactivos de al menos 44px.
- **Do** usar Teal Clínico Oscuro cuando el teal funciona como texto pequeño; reservar Teal Clínico para líneas, nodos y superficies gráficas.

### Don't:

- **Don't** volver a una portada sanitaria genérica de fotografía de laboratorio y mosaicos de tarjetas.
- **Don't** inventar nuevas familias tipográficas, gradientes o acentos que desplacen la paleta atlas existente.
- **Don't** usar sombras en todas las superficies; la elevación sólo comunica función o superposición.
- **Don't** reemplazar la figura territorial por decoración abstracta sin relación con la red clínica argentina.
- **Don't** ocultar o debilitar los estados de foco en fondos claros u oscuros.
- **Don't** animar la opacidad de texto legible; usar desplazamiento, recorte o expansión que mantenga el contraste.
