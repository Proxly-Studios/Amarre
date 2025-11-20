# Amarre

Sitio web estático profesional para servicios de amarre y náutica en España.

## Descripción

Amarre es un sitio web completamente responsivo diseñado para un negocio de servicios náuticos en España. El sitio está optimizado para verse perfectamente en todos los dispositivos: móviles, tablets y ordenadores de escritorio.

## Características

- ✅ **Diseño Responsivo**: Optimizado para todos los tamaños de pantalla (móviles, tablets, escritorio)
- ✅ **Navegación Móvil**: Menú hamburguesa para dispositivos móviles
- ✅ **HTML5 Semántico**: Estructura de código limpia y moderna
- ✅ **CSS3 Moderno**: Utiliza CSS Grid, Flexbox y variables CSS
- ✅ **Accesibilidad**: Etiquetas ARIA y navegación por teclado
- ✅ **Multi-página**: Inicio, Servicios, Sobre Nosotros y Contacto
- ✅ **Sin dependencias**: No requiere frameworks o librerías externas

## Estructura del Proyecto

```
Amarre/
├── index.html              # Página principal
├── servicios.html          # Página de servicios
├── sobre-nosotros.html     # Página sobre nosotros
├── contacto.html           # Página de contacto
├── css/
│   └── styles.css         # Estilos principales
├── js/
│   └── script.js          # JavaScript para navegación móvil
└── README.md              # Este archivo
```

## Instalación y Uso

### Opción 1: Servidor Local Simple

```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js (si tienes http-server instalado)
npx http-server -p 8000
```

Luego abre tu navegador en `http://localhost:8000`

### Opción 2: Abrir Directamente

Simplemente abre el archivo `index.html` en tu navegador web favorito.

### Opción 3: Despliegue en la Nube

#### GitHub Pages
1. Sube los archivos a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama principal como fuente
4. Tu sitio estará disponible en `https://tu-usuario.github.io/nombre-repo`

#### Netlify
1. Arrastra la carpeta del proyecto a [Netlify Drop](https://app.netlify.com/drop)
2. Tu sitio estará disponible inmediatamente

#### Vercel
```bash
npm i -g vercel
vercel
```

## Personalización

### Colores
Los colores se pueden cambiar fácilmente editando las variables CSS en `css/styles.css`:

```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #004080;
    --accent-color: #00aaff;
    /* ... más colores */
}
```

### Contenido
Edita los archivos HTML para actualizar:
- Textos e información de la empresa
- Servicios ofrecidos
- Información de contacto

## Responsive Breakpoints

- **Móvil**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large Desktop**: > 1024px

## Navegadores Soportados

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)
- Navegadores móviles (iOS Safari, Chrome Mobile)

## Licencia

© 2024 Amarre. Todos los derechos reservados.

## Soporte

Para soporte o consultas, contacta a través del formulario en la página de contacto.
