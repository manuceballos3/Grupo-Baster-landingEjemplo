# Grupo Baster — Landing Page

> Sitio web institucional y de captación de clientes para **Grupo Baster**, empresa gráfica con identidad CMYK.

---

## El proyecto

Grupo Baster necesitaba una presencia digital que estuviera a la altura de lo que hacen en papel. Una imprenta que lleva años produciendo materiales gráficos de alta calidad para empresas y comercios de la zona merecía un sitio que contara esa historia con la misma precisión con la que calibran sus planchas de color.

El objetivo fue claro desde el arranque: una landing page que convierta visitas en consultas reales, con un formulario de cotización accesible, animaciones que no distraigan sino que guíen, y una identidad visual que respete —y amplíe— la paleta CMYK que ya define a la marca.

---

## Cómo se construyó

El proceso empezó con una conversación. Se analizó la identidad existente de Grupo Baster —su paleta cian, magenta y amarillo, su historia como imprenta, sus servicios— y se tradujo todo eso a decisiones de diseño concretas.

Se eligió **Next.js 16** con **App Router** por su rendimiento en sitios estáticos y su capacidad de escalar si en algún momento se quiere sumar un panel de administración, un catálogo dinámico o un sistema de pedidos online. **Tailwind CSS v4** maneja el sistema de tokens de diseño, con variables CSS semánticas que respetan tanto el modo claro como el oscuro.

Las animaciones se construyeron sobre **IntersectionObserver** —sin dependencias externas pesadas— para garantizar que funcionen igual en un iframe de preview, en producción y en un browser local sin configuración especial. Cada sección entra con un `reveal` al hacer scroll, sutil pero presente.

El detalle más cuidado fue el efecto de **desregistro de imprenta** en el título principal: las sombras cian, magenta y amarillo desalineadas detrás del texto negro simulan las planchas CMYK que no calzan perfecto, un guiño tipográfico que solo una imprenta puede hacer con credibilidad.

---

## Stack técnico

| Tecnología | Uso |
|---|---|
| Next.js 16 | Framework principal, App Router |
| TypeScript | Tipado estático en todo el proyecto |
| Tailwind CSS v4 | Sistema de diseño con tokens semánticos |
| GSAP / IntersectionObserver | Animaciones de scroll |
| Lucide React | Iconografía |
| Vercel | Deploy y hosting |

---

## Correr el proyecto localmente

```bash
# Clonar el repositorio
git clone https://github.com/manuceballos3/Grupo-Baster-landingEjemplo.git
cd Grupo-Baster-landingEjemplo

# Cambiarse a la rama de desarrollo
git checkout v0/haberdaser14-87d82308

# Instalar dependencias (usar pnpm, es el package manager del proyecto)
pnpm install

# Iniciar el servidor de desarrollo
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el browser.

> **Importante:** usar `pnpm install` y no `npm install`. El proyecto tiene un `pnpm-lock.yaml` que garantiza las versiones exactas del entorno de producción.

---

## Estructura del proyecto

```
app/
  page.tsx          # Página principal (ensamblado de secciones)
  layout.tsx        # Layout raíz, fuentes y metadata SEO
  globals.css       # Tokens de diseño, animaciones, utilidades

components/
  hero.tsx          # Sección hero con animación de entrada
  benefits.tsx      # Beneficios / propuesta de valor
  services.tsx      # Grilla de servicios
  social-proof.tsx  # Logos de marcas / clientes
  testimonials-gsap.tsx  # Testimoniales con reveal
  cta.tsx           # Sección de contacto y formulario
  reveal.tsx        # Componente de animación de scroll reutilizable
  smooth-scroll-provider.tsx  # Provider de scroll suavizado
```

---

## Deploy

Cada push a `main` despliega automáticamente en Vercel. Los cambios en la rama `v0/haberdaser14-87d82308` se pueden previsualizar antes de mergear.

[Ver sitio en producción →](https://grupo-baster-landing-ejemplo.vercel.app)
