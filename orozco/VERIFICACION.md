# Verificación de la previa

Revisión realizada el 1 de octubre de 2026 con Microsoft Edge headless mediante Playwright, sobre archivos locales.

- Anchuras: 375, 390, 430, 768, 1024, 1440 y 1920 px. Ninguna mostró desbordamiento horizontal.
- Un solo H1; todos los destinos internos existen.
- Todas las imágenes decodificadas correctamente; fuentes incluidas en local.
- Enlaces de conversión revisados: número 573113002125 y mensaje codificado del briefing.
- Menú móvil: apertura, cierre con Escape y aria-expanded comprobados.
- Servicios: desplegables nativos operables.
- Evento whatsapp_hero recibido en dataLayer sin navegar ni enviar mensajes.
- Sin errores JavaScript durante el recorrido.
- Estado reduced motion comprobado; el contenido permanece visible.
- Capturas completas de 390 y 1440 px inspeccionadas; encuadres y primera pantalla revisados.

El auditor estático genérico de aplicación informó un botón sin acción: es el menú móvil. Es un falso positivo, porque su listener vive en script.js; su comportamiento se verificó en el navegador. No se declara aprobación de ese auditor.

No se midió Lighthouse ni Core Web Vitals de producción. No se verificó con lectores de pantalla ni dispositivos físicos. No se realizó publicación, ni apertura efectiva de WhatsApp, ni envío de información. Los datos comerciales proceden del briefing y están pendientes de confirmación del propietario antes de publicar.
