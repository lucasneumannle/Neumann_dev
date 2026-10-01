# Marcos y Vidrios Orozco — previa comercial

Landing page estática, en español de Colombia, lista para un repositorio de GitHub. No requiere npm, compilación, instalación ni servicios externos para mostrar contenido y fotografías.

## Abrir

Extrae el ZIP y abre `index.html`. Para una revisión con servidor local: `python -m http.server 8080` y visita `http://localhost:8080`.

## Subir a GitHub

Sube el contenido de esta carpeta a la raíz de tu repositorio. Conserva la estructura `assets/`. Todos los enlaces de archivos son relativos, compatibles con subcarpetas y con GitHub Pages. `.nojekyll` evita procesamiento innecesario. No se incluye automatización de publicación ni se ha realizado ningún deploy.

## Estructura

- `index.html`: contenido, metadatos y datos estructurados.
- `styles.css`: estilos y adaptación móvil.
- `script.js`: menú, cabecera, revelaciones discretas y eventos de conversión.
- `assets/images/`: fotografías WebP locales, en tres tamaños.
- `assets/fonts/`: Manrope y licencia SIL Open Font License.
- `assets/logo-original.png`: marca original suministrada, visible en la sección de la empresa.
- `assets/image-sources.json`: origen y licencia de cada fotografía.
- `DESIGN.md`: decisiones de diseño y mantenimiento.
- `VERIFICACION.md`: controles realizados y límites de la revisión.

## Datos y conversión

WhatsApp principal: +57 311 300 2125. Teléfono público: +57 312 307 3478. Dirección: Cra. 6 #26-69, Pereira, Risaralda, Colombia. Todos los botones de cotización abren WhatsApp con el mensaje del briefing. Los enlaces de Google abren una búsqueda identificada de la empresa; no se dispone de un Place ID confirmado.

El número de 22 reseñas se toma del briefing suministrado; no hay nota, testimonios ni cifras inventadas. Confirma los datos con el propietario antes de publicar.

## Fotografías y marca

Las fotografías son referencias de Unsplash, utilizadas bajo https://unsplash.com/license; no son trabajos de la empresa. Esta condición está indicada en la página. El logo original se conserva; el encabezado utiliza la presentación tipográfica permitida por el briefing.

Para sustituir una imagen, reemplaza las variantes `nombre-640.webp`, `nombre-1200.webp` y `nombre-1920.webp`; actualiza el texto alternativo, la procedencia y el aviso de referencia cuando exista autorización y fotografía real. Revisa el encuadre después de cada sustitución.

## Preparación para publicación futura

La previa incluye `noindex,nofollow`. Al autorizar la publicación final, retira ese metadato y configura un canonical y `og:url` con el dominio real. Convierte `og:image` a una URL absoluta del sitio real; los rastreadores de redes sociales requieren una URL absoluta. Se ha dejado relativa porque todavía no hay un dominio autorizado.

Tracking: `whatsapp_hero`, `whatsapp_bathroom`, `whatsapp_quote_steps`, `whatsapp_final`, `whatsapp_sticky` y ubicaciones adicionales se envían a `window.dataLayer` y al evento local `orozco:conversion`. No hay scripts de seguimiento externos ni IDs inventados. La conexión a GA4/Meta queda pendiente de sus IDs reales.

El mapa se resuelve mediante “Cómo llegar”, sin iframe ni solicitudes externas al abrir la página. WhatsApp y Google requieren conexión al utilizarlos.
