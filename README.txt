Super Humor – Paquete de iconos PWA
===================================

Qué incluye
-----------
- icon-512.png                 (Android/Chrome – manifest)
- icon-192.png                 (Android/Chrome – manifest)
- apple-touch-icon.png         (iOS – se detecta automáticamente si está en la raíz)
- apple-touch-icon-precomposed.png (iOS legacy)
- manifest.json                (ya preparado con start_url = index_v4_secure_edit_search_multi.html)
- sw.js                        (service worker mínimo/no-op)

Uso rápido (sin tocar tu index para iPhone/iPad)
------------------------------------------------
1) Sube TODOS los archivos de este ZIP a la raíz de tu GitHub Pages (misma carpeta que tu index).
2) En iOS (Safari), "Añadir a pantalla de inicio": iOS detecta automáticamente apple-touch-icon.png
   si está en la raíz, así que verás el icono directamente sin editar nada.

Si también quieres que Android/Chrome use el icono como PWA
-----------------------------------------------------------
(opcional, sólo si quieres; iOS no lo necesita)
1) Asegúrate de que tu index tiene estas líneas en el <head>:
   <link rel="manifest" href="manifest.json">
   <link rel="icon" type="image/png" sizes="512x512" href="icon-512.png">
   <link rel="icon" type="image/png" sizes="192x192" href="icon-192.png">
   <link rel="apple-touch-icon" href="apple-touch-icon.png">

2) Y registra el service worker (al final del <body>, una sola vez):
   <script>
     if ('serviceWorker' in navigator) {
       navigator.serviceWorker.register('sw.js').catch(()=>{});
     }
   </script>
