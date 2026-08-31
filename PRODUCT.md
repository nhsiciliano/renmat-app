# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

El usuario principal es un profesional de la salud en Argentina que diagnostica, trata o realiza el seguimiento de pacientes con Microangiopatías Trombóticas (MAT), incluyendo Púrpura Trombocitopénica Trombótica (PTT) y Síndrome Urémico Hemolítico Atípico (SUHa).

Durante su trabajo clínico, el profesional necesita comprender el alcance del registro, aceptar sus condiciones, solicitar credenciales de acceso e incorporar pacientes mediante REDCap. La comunidad médica y científica también consulta el sitio para acceder a información, bibliografía y material audiovisual relacionado con MAT.

## Product Purpose

RegArMAT existe para sostener el Registro Argentino de Microangiopatías Trombóticas y articular una red nacional de profesionales y centros de salud. Permite recopilar información epidemiológica, clínica y de laboratorio para caracterizar estas enfermedades raras en Argentina y facilitar investigaciones, análisis y publicaciones científicas.

El sitio público debe ayudar a que los profesionales comprendan el registro, sus obligaciones de confidencialidad y el proceso de participación. El resultado esperado es que los profesionales elegibles completen correctamente el registro, reciban sus credenciales y utilicen REDCap para cargar información de pacientes conforme a las condiciones establecidas.

## Positioning

RegArMAT es un registro nacional especializado en MAT que conecta profesionales de distintas disciplinas y centros de salud con un flujo de incorporación basado en consentimiento, confidencialidad y carga estructurada de datos en REDCap. Su foco específico en PTT y SUHa busca cubrir una necesidad epidemiológica y científica escasamente documentada en Argentina y América Latina.

## Operating Context

- El sitio se utiliza en español y está dirigido principalmente al sistema de salud argentino.
- Los profesionales consultan información médica y legal antes de aceptar las condiciones de participación.
- La solicitud de registro recopila datos profesionales y de contacto; posteriormente se entregan credenciales de acceso a REDCap.
- REDCap es la plataforma externa utilizada para el registro seguro de pacientes.
- El sitio ofrece información sobre MAT, condiciones de participación, bibliografía científica, videos, contacto y acceso a herramientas relacionadas.
- IIHEMA, IIE y la Academia Nacional de Medicina forman parte del contexto institucional comunicado por el producto.

## Capabilities and Constraints

- Preservar íntegramente el contenido médico, científico y legal vigente. Cualquier cambio de significado requiere aprobación explícita del responsable correspondiente.
- Preservar el nombre RegArMAT, sus logos, activos institucionales, datos de contacto y referencias a IIHEMA, IIE y la Academia Nacional de Medicina.
- Mantener el flujo de registro profesional y la integración operativa con REDCap.
- Proteger la confidencialidad y evitar exponer datos identificatorios o sensibles de pacientes en el sitio público.
- No inventar afirmaciones médicas, resultados, cifras, testimonios, instituciones participantes ni evidencia científica.
- La experiencia debe funcionar en dispositivos móviles y de escritorio y permitir completar las tareas principales con teclado y tecnologías de asistencia.
- Los problemas técnicos y las mejoras visuales deben resolverse en ramas de trabajo; `main` representa producción y no debe modificarse directamente.

## Brand Commitments

- El nombre del producto es **RegArMAT — Registro Argentino de Microangiopatías Trombóticas**.
- Los logos e imágenes existentes son activos de identidad que deben preservarse salvo autorización explícita para reemplazarlos.
- La identidad institucional y el tono médico-científico deben mantenerse reconocibles durante mejoras técnicas o de interfaz.
- Las mejoras de UI deben conservar el contenido y la función del producto; no autorizan por sí mismas una reescritura médica, legal o institucional.

## Evidence on Hand

- Logos e imágenes institucionales disponibles en `public/`.
- Condiciones legales y de confidencialidad disponibles en `src/components/Conditions.jsx`.
- Descripción médica de MAT, PTT y SUHa disponible en `src/app/descripcion-mat/` y `src/app/registro/`.
- Bibliografía científica enlazada desde `src/app/bibliografia/`.
- Material audiovisual enlazado desde `src/app/videos/`.
- Información institucional y de contacto presente en el sitio.
- El repositorio no contiene testimonios, métricas de impacto, resultados clínicos ni otras pruebas que puedan utilizarse como afirmaciones públicas nuevas sin validación externa.

## Product Principles

1. **Fidelidad clínica y legal:** preservar el significado y la integridad del contenido validado.
2. **Confianza y confidencialidad:** comunicar con claridad cómo se protege la información y qué responsabilidad asume cada profesional.
3. **Claridad para la práctica médica:** reducir fricción y ambigüedad en los recorridos de información, aceptación y registro.
4. **Acceso inclusivo:** ofrecer una experiencia responsive y accesible para distintos dispositivos y tecnologías de asistencia.
5. **Evidencia antes que invención:** publicar únicamente información, instituciones y afirmaciones respaldadas por fuentes reales y aprobadas.

## Accessibility & Inclusion

El producto debe cumplir **WCAG 2.2 nivel AA**. Las mejoras deben contemplar navegación por teclado, foco visible, estructura semántica, nombres accesibles, contraste suficiente, mensajes de error comprensibles, asociación correcta entre etiquetas y controles, compatibilidad con lectores de pantalla, reducción de movimiento cuando corresponda y adaptación sin pérdida de contenido ni funcionalidad.
