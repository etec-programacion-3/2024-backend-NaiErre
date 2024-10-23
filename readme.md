# E-commerce de Zapatillas


📋 **Descripción**  
Este proyecto es una aplicación de e-commerce para la venta de zapatillas. Permite a los usuarios gestionar productos, carritos, pedidos y más. La aplicación cuenta con un backend robusto que maneja las operaciones de CRUD y está diseñada para ofrecer una experiencia de compra intuitiva.

🚀 **Características Principales**  
- Navegación y búsqueda de zapatillas
- Agregar productos al carrito
- Procesar pedidos
- Gestión de usuarios
- Interacción con un backend RESTful

🛠 **Prerrequisitos**  
Antes de comenzar, asegúrate de tener instalado en tu sistema:

- Docker y Docker Compose
- Node.js (versión 14 o superior)

Para instalar las dependencias de Node.js, usa:

```bash
npm install
```

🏁 **Inicio Rápido**  
1. Clona el repositorio:

   ```bash
   https://github.com/etec-programacion-3/2024-backend-ErrecaldeLlamas.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd ecommerce_zapatillas
   ```

3. Configura la base de datos en el archivo `db.js`.

4. Inicia la base de datos con Docker:

   ```bash
   docker-compose up -d
   ```

5. Instala las dependencias:

   ```bash
   npm install
   ```

6. Ejecuta la aplicación:

   ```bash
   node app.js
   ```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

📁 **Estructura del Proyecto**  
```
ecommerce_zapatillas/
├── models/
│   ├── cart.js
│   ├── cartitem.js
│   ├── index.js
│   ├── order.js
│   ├── orderitem.js
│   ├── product.js
│   └── user.js
├── node_modules/
├── routes/
│   ├── cartitemRoutes.js
│   ├── cartRoutes.js
│   ├── orderitemRoutes.js
│   ├── orderRoutes.js
│   ├── productRoutes.js
│   └── userRoutes.js
├── services/
│   ├── cartitemService.js
│   ├── cartService.js
│   ├── orderitemService.js
│   ├── orderService.js
│   ├── productService.js
│   └── userService.js
├── .gitignore
├── app.js
├── db.js
y más...
```

💡 **Componentes Clave**  
- **Modelos**: Estructura de datos para productos, carritos, pedidos y usuarios.
- **Rutas**: Definiciones de rutas para manejar solicitudes HTTP.
- **Servicios**: Lógica de negocio para las operaciones de CRUD.

🔧 **Tecnologías Utilizadas**  
- Node.js para el backend
- Express para manejar las rutas y solicitudes HTTP
- Sequelize como ORM para interactuar con la base de datos
- MySQL como sistema de gestión de bases de datos (dockerizado)

🔗 **Backend**  
El backend está construido sobre Node.js y Express, y utiliza Sequelize para interactuar con la base de datos. Asegúrate de configurar correctamente `db.js` para conectarte a tu base de datos dockerizada.

📦 **Base de Datos**  
La base de datos está dockerizada, lo que permite una fácil configuración y despliegue.

🎨 **Estilos**  
Este proyecto se centra en la funcionalidad más que en el diseño. Se pueden implementar estilos y UI más avanzados según sea necesario.

🏁 **Conclusión**  
Este proyecto de e-commerce de zapatillas demuestra la gestión eficiente de productos, carritos y pedidos, ofreciendo una buena base para futuras mejoras y adiciones de funcionalidad. 

---
