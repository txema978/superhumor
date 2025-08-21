PASOS RÁPIDOS (GitHub Pages, sin terminal):

1) Crea un repositorio nuevo en GitHub llamado, por ejemplo, `superhumor`.
2) Entra en el repo → pestaña "Add file" → "Upload files" y sube TODO lo que hay en esta carpeta:
   - index.html
   - manifest.webmanifest
   - service-worker.js
   - icon-192.png
   - icon-512.png
3) Publica en GitHub Pages:
   - Settings → Pages → "Source": selecciona "Deploy from a branch".
   - Branch: `main` (o `master`) y carpeta `/ (root)`.
   - Guarda. Espera unos segundos y aparecerá la URL (algo como https://tuusuario.github.io/superhumor/).
4) Abre esa URL en Safari del iPhone.
5) Pulsa el botón Compartir → "Añadir a pantalla de inicio"...
6) ¡Listo! Tendrás un icono como una app. Funciona offline y guarda datos en el dispositivo (localStorage).

Notas:
- Los datos se guardan por dominio. Si cambias de URL, empezarás con datos vacíos.
- Si borras datos de navegación en Safari, se pierde el progreso.
- Si subes muchas portadas, el almacenamiento puede llenarse. Usa imágenes más pequeñas.
