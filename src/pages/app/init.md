## Archivo para documentar y mantener el estado del proyecto en el sentido del modulo de usuario. - UsuarioInsano.

### Permisos (Allowlist por correo)

- Se agregó un endpoint server-side en `src/pages/api/permissions/admin.ts` que valida un correo contra una lista blanca.
- En `src/pages/dashboard.astro` se muestra una tarjeta "Admin" únicamente si el correo del usuario está permitido.
- La tarjeta abre un overlay fullscreen con iframe a `https://admin.insano.work`.