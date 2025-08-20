# Configuración de Medusa.js para la Tienda Online

Este documento proporciona instrucciones detalladas para configurar el backend de Medusa.js y su integración con el proyecto Astro existente.

## Requisitos Previos

- Node.js v16 o superior
- PostgreSQL v10 o superior
- npm o yarn

## Paso 1: Configuración del Backend de Medusa

### Instalación de Medusa CLI

```bash
# Instalar Medusa CLI globalmente
npm install -g @medusajs/medusa-cli
```

### Creación del Proyecto Medusa

```bash
# Crear un directorio para el backend de Medusa
mkdir medusa-backend
cd medusa-backend

# Crear un nuevo proyecto Medusa
medusa new
```

Durante la instalación, se te pedirá que selecciones una base de datos. Selecciona PostgreSQL.

### Configuración de Variables de Entorno

Crea un archivo `.env` en el directorio `medusa-backend` con el siguiente contenido:

```
DATABASE_URL=postgres://username:password@localhost:5432/medusa-store
JWT_SECRET=something_secret_for_jwt
COOKIE_SECRET=something_secret_for_cookies
ADMIN_CORS=http://localhost:7000,http://localhost:7001
STORE_CORS=http://localhost:8000,http://localhost:4321
```

Reemplaza `username`, `password` y `medusa-store` con tus credenciales y nombre de base de datos de PostgreSQL.

### Ejecución de Migraciones

```bash
cd medusa-backend
medusa migrations run
```

### Iniciar el Servidor de Desarrollo

```bash
medusa develop
```

El servidor de Medusa estará disponible en `http://localhost:9000`.

## Paso 2: Configuración del Panel de Administración

### Instalación del Panel de Administración

```bash
# En un nuevo directorio
npx create-medusa-app@latest admin --only-admin
```

### Iniciar el Panel de Administración

```bash
cd medusa-admin
npm run start
```

El panel de administración estará disponible en `http://localhost:7000`.

## Paso 3: Integración con el Proyecto Astro

### Instalación de Dependencias

```bash
cd Insano-landing
npm install @medusajs/medusa-js
```

### Configuración de Variables de Entorno

Crea o actualiza el archivo `.env` en el directorio raíz del proyecto Astro con las siguientes variables:

```
PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
```

### Verificación de la Integración

Para verificar que la integración funciona correctamente, puedes ejecutar el siguiente comando:

```bash
npm run dev
```

Navega a `http://localhost:4321/shop` para ver la tienda online.

## Paso 4: Configuración de Productos en Medusa

1. Accede al panel de administración en `http://localhost:7000`
2. Inicia sesión con las credenciales por defecto:
   - Email: admin@medusa-test.com
   - Password: supersecret
3. Crea categorías de productos (colecciones)
4. Añade productos con sus variantes y precios

## Paso 5: Configuración de Pagos

### Instalación de Plugins de Pago

```bash
cd medusa-backend
npm install medusa-payment-stripe
```

### Configuración de Stripe

Actualiza el archivo `medusa-config.js` en el directorio `medusa-backend` para incluir el plugin de Stripe:

```javascript
module.exports = {
  projectConfig: {
    // ... configuración existente
  },
  plugins: [
    // ... plugins existentes
    {
      resolve: `medusa-payment-stripe`,
      options: {
        api_key: process.env.STRIPE_API_KEY,
        webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
      },
    },
  ],
};
```

Actualiza el archivo `.env` en el directorio `medusa-backend` para incluir las claves de API de Stripe:

```
STRIPE_API_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## Paso 6: Configuración de Envíos

### Instalación de Plugins de Envío

```bash
cd medusa-backend
npm install medusa-fulfillment-manual
```

### Configuración de Envíos Manuales

Actualiza el archivo `medusa-config.js` para incluir el plugin de envíos manuales:

```javascript
module.exports = {
  projectConfig: {
    // ... configuración existente
  },
  plugins: [
    // ... plugins existentes
    {
      resolve: `medusa-fulfillment-manual`,
      options: {},
    },
  ],
};
```

## Paso 7: Configuración de Correos Electrónicos

### Instalación de Plugins de Correo Electrónico

```bash
cd medusa-backend
npm install medusa-plugin-sendgrid
```

### Configuración de SendGrid

Actualiza el archivo `medusa-config.js` para incluir el plugin de SendGrid:

```javascript
module.exports = {
  projectConfig: {
    // ... configuración existente
  },
  plugins: [
    // ... plugins existentes
    {
      resolve: `medusa-plugin-sendgrid`,
      options: {
        api_key: process.env.SENDGRID_API_KEY,
        from: process.env.SENDGRID_FROM,
        order_placed_template: process.env.SENDGRID_ORDER_PLACED_TEMPLATE,
      },
    },
  ],
};
```

Actualiza el archivo `.env` para incluir las claves de API de SendGrid:

```
SENDGRID_API_KEY=SG...
SENDGRID_FROM=tu@email.com
SENDGRID_ORDER_PLACED_TEMPLATE=d-...
```

## Paso 8: Despliegue en Producción

### Backend de Medusa

1. Configura un servidor con Node.js y PostgreSQL
2. Clona el repositorio del backend de Medusa
3. Configura las variables de entorno para producción
4. Ejecuta las migraciones
5. Inicia el servidor con PM2 o similar

```bash
npm install -g pm2
cd medusa-backend
pm2 start --name medusa-backend npm -- start
```

### Frontend de Astro

1. Actualiza las variables de entorno para apuntar al backend de producción
2. Construye el proyecto Astro

```bash
cd Insano-landing
npm run build
```

3. Despliega los archivos generados en la carpeta `dist` a tu servidor web

## Solución de Problemas Comunes

### Error de Conexión a la Base de Datos

Verifica que PostgreSQL esté en ejecución y que las credenciales en el archivo `.env` sean correctas.

### Error de CORS

Asegúrate de que las URLs de tu frontend estén incluidas en la variable `STORE_CORS` del archivo `.env` del backend de Medusa.

### Problemas con los Pagos

Verifica que las claves de API de Stripe sean correctas y que el webhook esté configurado adecuadamente.

## Recursos Adicionales

- [Documentación oficial de Medusa.js](https://docs.medusajs.com/)
- [Repositorio de GitHub de Medusa.js](https://github.com/medusajs/medusa)
- [Comunidad de Discord de Medusa.js](https://discord.gg/medusajs)