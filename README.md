# Grupo Baster — Landing Page

Sitio web institucional y de captación de clientes para **Grupo Baster**, empresa de impresión y comunicación visual.

---

## Sobre este proyecto

Este sitio nació de una idea simple: *una imprenta con décadas de historia merece una presencia digital que esté a la altura de su trabajo.*

El proceso arrancó analizando la identidad visual de la empresa — el logo CMYK, la paleta de colores, la tipografía — y desde ahí se construyó un sistema de diseño propio. Cada decisión tiene una razón: el fondo oscuro como contraste para que los colores de marca resalten, la barra cian-magenta-amarillo que aparece en cada sección como guiño a las planchas de impresión, el efecto de "desregistro de imprenta" en los títulos principales que simula las planchas CMYK ligeramente desalineadas.

No se usó ninguna plantilla. El sitio fue iterado componente por componente, sección por sección, ajustando animaciones, tipografía, jerarquía visual y microinteracciones hasta que el resultado representara genuinamente la identidad de Grupo Baster.

---

## Stack técnico

| Tecnología | Uso |
|---|---|
| **Next.js 16** (App Router) | Framework principal |
| **TypeScript** | Tipado estático |
| **Tailwind CSS v4** | Sistema de estilos |
| **GSAP + ScrollTrigger** | Animaciones de scroll |
| **Lucide React** | Iconografía |
| **pnpm** | Gestor de dependencias |

---

## Estructura del proyecto

```
/
├── app/
│   ├── layout.tsx          # Layout raíz, fuentes, metadata SEO
│   ├── page.tsx            # Página principal (composición de secciones)
│   └── globals.css         # Design tokens, animaciones, utilidades CSS
│
├── components/
│   ├── hero.tsx            # Sección hero con animación de entrada
│   ├── benefits.tsx        # Propuesta de valor
│   ├── social-proof.tsx    # Marcas clientes / logos
│   ├── testimonials-gsap.tsx  # Testimonios con animación por scroll
│   ├── cta.tsx             # Formulario de cotización
│   ├── reveal.tsx          # Componente reutilizable de animación
│   └── smooth-scroll-provider.tsx  # Proveedor de scroll suave
│
└── public/
    ├── logo-empresa.jpg
    └── placeholder-user.jpg
```

---

## Correr el proyecto localmente

```bash
# Clonar el repositorio
git clone https://github.com/manuceballos3/Grupo-Baster-landingEjemplo.git
cd Grupo-Baster-landingEjemplo

# Pararse en la rama de desarrollo
git checkout v0/haberdaser14-87d82308

# Instalar dependencias (requiere pnpm)
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

> **Importante:** usar `pnpm install`, no `npm install`. El lockfile del proyecto es `pnpm-lock.yaml` y garantiza que las versiones instaladas sean exactamente las del entorno de producción.

---

## Flujo de trabajo con v0

El sitio se desarrolla en la rama `v0/haberdaser14-87d82308`. Los cambios pueden hacerse de dos maneras:

**Desde v0 (recomendado para cambios de diseño y componentes):**
Acceder al proyecto en [v0.app](https://v0.app/chat/projects/prj_lSWU6OgOlwB4TwACXcflG7iuioh1) y describir los cambios. v0 los commitea directamente a la rama.

**Desde la PC (para ediciones manuales):**
```bash
# Traer los últimos cambios de v0
git pull origin v0/haberdaser14-87d82308

# Editar archivos...

# Subir cambios
git add .
git commit -m "descripción del cambio"
git push origin v0/haberdaser14-87d82308
```

Antes de pedirle algo a v0, siempre pushear los cambios locales. Antes de editar localmente, siempre pullear lo que hizo v0.

---

## Deploy

Cada merge a `main` genera un deploy automático en Vercel.
