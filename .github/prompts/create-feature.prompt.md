# Prompt: Crear Nueva Feature (Feature-Based Architecture)

## Contexto

Este proyecto utiliza el patrón **Feature-Based Architecture**, donde cada funcionalidad se organiza en una carpeta independiente con todos sus recursos relacionados.

## Objetivo

Crear una nueva feature siguiendo la estructura y convenciones establecidas en el proyecto IMESAC.

---

## Organización de Features

La carpeta `src/features/` se organiza en **módulos de alto nivel** que agrupan features relacionadas:

```
src/features/
├── home/               # Features de la página principal
│   ├── hero/
│   ├── categories/
│   ├── blog-grid/
│   ├── store-section/
│   └── companies/
├── services/           # Features de servicios
│   ├── components/
│   ├── constants/
│   ├── types/
│   └── index.ts
├── shared/             # Componentes y utilidades compartidas entre features
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   └── types/
└── [otro-modulo]/      # Otros módulos según sea necesario
```

**Regla importante**: Las features NO están sueltas en `src/features/`, sino organizadas en módulos (home, services, shared, etc.).

---

## Estructura de una Feature Individual

Cada feature dentro de un módulo debe seguir esta estructura:

```
src/features/[modulo]/[nombre-feature]/
├── components/          # Componentes React de la feature
│   ├── [Component].tsx
│   ├── [Component].module.css (opcional)
│   └── ...
├── hooks/              # Custom hooks específicos de la feature (opcional)
│   ├── use[Hook].ts
│   └── ...
├── types/              # TypeScript types/interfaces
│   ├── [entity].types.ts
│   └── ...
├── constants/          # Constantes y datos estáticos
│   ├── [data].constants.ts
│   └── ...
├── utils/              # Funciones utilitarias (opcional)
│   ├── [utility].utils.ts
│   └── ...
├── services/           # Llamadas a API (opcional)
│   ├── [service].service.ts
│   └── ...
└── index.ts           # Punto de entrada principal (exports públicos)
```

**Nota**: Las carpetas `hooks/`, `utils/` y `services/` solo se crean si la feature las necesita.

---

## Convenciones de Nomenclatura

### Carpetas

- Usar `kebab-case` para nombres de carpetas: `blog-grid`, `store-section`, `user-profile`

### Archivos

- **Componentes**: `PascalCase.tsx` → `BlogCard.tsx`, `Categories.tsx`
- **Tipos**: `[entity].types.ts` → `blog.types.ts`, `category.types.ts`
- **Constantes**: `[data].constants.ts` → `blog-posts.constants.ts`
- **Hooks**: `use[Hook].ts` → `useCategoryToggle.ts`, `useProductFilter.ts`
- **Utils**: `[utility].utils.ts` → `blog.utils.ts`, `date.utils.ts`
- **CSS Modules**: `[Component].module.css` → `Hero.module.css`

### Exports

- El archivo `index.ts` debe exportar solo los elementos públicos de la feature
- Usar named exports: `export { Component }` en lugar de default exports

---

## Ejemplos de Implementación

### Ejemplo 1: Feature Simple (Hero)

```typescript
// src/features/hero/components/Hero.tsx
import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.sliderContainer}>
      <picture>
        <img src="/mantenimiento_industrial.jpeg" alt="Slider" />
      </picture>
    </div>
  );
};
```

```typescript
// src/features/hero/index.ts
export { Hero } from "./components/Hero";
```

### Ejemplo 2: Feature con Types y Constants

```typescript
// src/features/blog-grid/types/blog.types.ts
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}
```

```typescript
// src/features/blog-grid/constants/blog-posts.constants.ts
import { BlogPost } from "../types/blog.types";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Post 1",
    description: "Descripción",
    image: "/image.jpg",
    href: "/blog/post-1",
  },
  // ...
];
```

```typescript
// src/features/blog-grid/components/BlogGrid.tsx
import { BLOG_POSTS } from "../constants/blog-posts.constants";
import { BlogCard } from "./BlogCard";

export const BlogGrid = () => {
  return (
    <section>
      {BLOG_POSTS.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </section>
  );
};
```

```typescript
// src/features/blog-grid/index.ts
export { BlogGrid } from "./components/BlogGrid";
export type { BlogPost } from "./types/blog.types";
```

### Ejemplo 3: Feature con Hooks

```typescript
// src/features/categories/hooks/useCategoryToggle.ts
import { useState } from "react";

export const useCategoryToggle = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const handleCategoryClick = (categoryId: number) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return {
    activeCategory,
    handleCategoryClick,
  };
};
```

```typescript
// src/features/categories/components/Categories.tsx
"use client";
import { CATEGORIES } from "../constants/categories.constants";
import { useCategoryToggle } from "../hooks/useCategoryToggle";

export const Categories = () => {
  const { activeCategory, handleCategoryClick } = useCategoryToggle();

  return (
    <section>
      {CATEGORIES.map((category) => (
        <div key={category.id} onClick={() => handleCategoryClick(category.id)}>
          {/* ... */}
        </div>
      ))}
    </section>
  );
};
```

### Ejemplo 4: Feature con Subcomponentes

```typescript
// src/features/store-section/types/product.types.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}
```

```typescript
// src/features/store-section/components/ProductCard.tsx
import { Product } from "../types/product.types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
};
```

```typescript
// src/features/store-section/components/StoreSection.tsx
import { FEATURED_PRODUCTS } from "../constants/products.constants";
import { ProductCard } from "./ProductCard";

export const StoreSection = () => {
  return (
    <section>
      {FEATURED_PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
```

```typescript
// src/features/store-section/index.ts
export { StoreSection } from "./components/StoreSection";
export type { Product } from "./types/product.types";
```

---

## Directrices de Desarrollo

### 1. Separación de Responsabilidades

- **Componentes**: Solo lógica de presentación y UI
- **Hooks**: Lógica de estado y efectos reutilizables
- **Utils**: Funciones puras de transformación de datos
- **Constants**: Datos estáticos y configuraciones
- **Types**: Definiciones de tipos TypeScript

### 2. Componentes Client vs Server

- Usar `"use client"` solo cuando sea necesario (estado, eventos, hooks del navegador)
- Preferir Server Components cuando sea posible
- Ejemplo: `Categories.tsx` necesita `"use client"` porque usa `useState`

### 3. CSS Modules vs Tailwind

- Usar **CSS Modules** para estilos complejos con animaciones
- Usar **Tailwind CSS** para estilos estáticos y utilities
- Combinar ambos cuando sea necesario

### 4. TypeScript

- Siempre definir interfaces para props de componentes
- Usar tipos para constantes y datos
- Exportar tipos útiles desde el `index.ts`

### 5. Imports

- Usar alias `@/` para imports absolutos: `import { Hero } from "@/features/home/hero"`
- Siempre incluir el módulo en la ruta: `@/features/[modulo]/[feature]`
- Imports relativos solo dentro de la misma feature: `import { useCategoryToggle } from "../hooks/useCategoryToggle"`
- Para shared: `import { Button } from "@/features/shared/components/Button"`

---

## Checklist de Nueva Feature

Al crear una nueva feature, asegúrate de:

- [ ] Determinar el módulo correcto (home, services, shared, etc.)
- [ ] Crear la carpeta en `src/features/[modulo]/[nombre-feature]/`
- [ ] Definir types en `types/[entity].types.ts`
- [ ] Crear constantes/datos en `constants/[data].constants.ts`
- [ ] Implementar componentes en `components/`
- [ ] Crear hooks personalizados solo si es necesario en `hooks/`
- [ ] Agregar utils solo si hay lógica reutilizable en `utils/`
- [ ] Crear el archivo `index.ts` con exports públicos
- [ ] Usar `"use client"` solo si es necesario
- [ ] Documentar props con TypeScript interfaces
- [ ] Seguir las convenciones de nomenclatura
- [ ] Probar la integración con otras features

---

## Uso en Páginas

### Importar desde features (IMPORTANTE: incluir el módulo):

```typescript
// src/app/page.tsx
import { Hero } from "@/features/home/hero";
import { Categories } from "@/features/home/categories";
import { BlogGrid } from "@/features/home/blog-grid";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <BlogGrid />
    </>
  );
}
```

### Importar desde servicios:

```typescript
// src/app/servicios/page.tsx
import { ServicesGrid } from "@/features/services";

export default function ServiciosPage() {
  return <ServicesGrid />;
}
```

### Importar componentes compartidos:

```typescript
// Desde cualquier feature o página
import { Button } from "@/features/shared/components/Button";
import { useDebounce } from "@/features/shared/hooks/useDebounce";
```

---

## Beneficios del Patrón

1. **Modularidad**: Cada feature es independiente y autocontenida
2. **Escalabilidad**: Fácil agregar nuevas features sin afectar las existentes
3. **Mantenibilidad**: Código organizado y fácil de encontrar
4. **Reutilización**: Componentes y hooks pueden reutilizarse entre features
5. **Testing**: Más fácil probar features de forma aislada
6. **Colaboración**: Múltiples desarrolladores pueden trabajar en features diferentes

---

## Ejemplos de Features en el Proyecto

Consulta estas features existentes como referencia:

### Módulo Home:

- `src/features/home/hero/` - Feature simple
- `src/features/home/categories/` - Feature con hooks y estado
- `src/features/home/blog-grid/` - Feature con subcomponentes y utils
- `src/features/home/store-section/` - Feature con tipos complejos
- `src/features/home/companies/` - Feature con CSS Modules y animaciones

### Módulo Services:

- `src/features/services/` - Feature de servicios con types, constants y components

### Módulo Shared:

- `src/features/shared/` - Componentes, hooks y utilidades compartidas (crear según necesidad)

---

## Instrucciones para GitHub Copilot

Cuando solicite crear una nueva feature:

1. **Analiza la descripción** de la funcionalidad
2. **Determina el módulo correcto**:
   - ¿Es parte de la página principal? → `home/`
   - ¿Es una funcionalidad independiente? → Crear nuevo módulo (ej: `services/`)
   - ¿Es un componente reutilizable? → `shared/`
3. **Determina qué carpetas necesitarás**:
   - Siempre: `components/`, `types/`, `constants/`
   - Opcional: `hooks/` (solo si hay lógica de estado compleja)
   - Opcional: `utils/` (solo si hay transformaciones de datos)
   - Opcional: `services/` (solo si hay llamadas a API)
4. **Crea la estructura** en `src/features/[modulo]/[nombre-feature]/`
5. **Define primero los types** si hay entidades de datos
6. **Crea las constantes** con datos de ejemplo
7. **Implementa los componentes** siguiendo los patrones existentes
8. **Agrega hooks** solo si hay lógica de estado compleja que reutilizar
9. **Crea utils** solo si hay transformaciones de datos reutilizables
10. **Configura el `index.ts`** con los exports públicos
11. **Proporciona ejemplos de uso** con la ruta correcta: `@/features/[modulo]/[feature]`

**IMPORTANTE**:

- Las features SIEMPRE están dentro de un módulo (home, services, shared, etc.)
- NO crear carpetas `hooks/` o `utils/` si no se necesitan
- Usar la ruta completa en imports: `@/features/[modulo]/[feature]`

**Siempre sigue las convenciones de nomenclatura y estructura establecidas.**

---

## Mejores Prácticas de UI/UX

### Navegación y Menús

#### Header/Navigation

- **Siempre incluir un enlace de "Inicio"** que lleve a la página principal (`/`)
- El **logo debe ser clicable** y llevar a la página de inicio
- Los **enlaces deben tener color contrastante** con el fondo para ser legibles
  - Ejemplo: Texto oscuro (#4d4d4d) sobre fondo claro (#f2f2f2)
  - Al hacer hover: Texto claro (#f2f2f2) sobre fondo oscuro (#4d4d4d)

#### Menús Desplegables Desktop

- **Submenús de primer nivel**: Se despliegan hacia abajo desde el menú principal
- **Submenús de segundo nivel**: Se despliegan hacia la derecha del submenú padre
- **Indicador visual**: Mostrar una flecha (›) cuando un item tiene submenú
- **Transiciones suaves**: Usar `opacity` y `visibility` para animaciones
- **Z-index apropiado**: Asegurar que los submenús aparezcan sobre otros elementos

#### Menús Móviles

- **Diseño lateral**: Menú slide-in desde la izquierda (80% de ancho, máx 300px)
- **Hamburger icon**: Botón con 3 líneas en la esquina superior derecha
- **Despliegue vertical**: Los submenús se expanden hacia abajo (no hacia el lado)
- **Botones +/−**: Para expandir/contraer submenús
- **Auto-cierre**: El menú debe cerrarse al hacer clic en un enlace
- **Scroll interno**: Si el contenido es largo, permitir scroll dentro del menú
- **Indentación visual**: Los submenús deben estar visualmente indentados

#### Media Queries

```css
@media (max-width: 768px) {
  /* Ocultar menú desktop, mostrar menú móvil */
}

@media (min-width: 769px) {
  /* Mostrar menú desktop, ocultar menú móvil */
}
```

### Accesibilidad

- Usar atributos `aria-label` en botones sin texto visible
- Asegurar que todos los enlaces sean teclado-navegables
- Colores con contraste suficiente (WCAG AA mínimo)

### Performance

- Usar `"use client"` solo cuando sea necesario (componentes con estado/interacción)
- Preferir Server Components para contenido estático
- Optimizar imágenes con Next.js Image component

### Estado y Gestión

- Usar `useState` para estado local (menú abierto/cerrado, submenú activo)
- Mantener el estado simple y predecible
- Limpiar estado al desmontar componentes si es necesario

---

## Paleta de Colores del Proyecto

### Colores Principales

Usar **exclusivamente** estos colores en el proyecto:

```css
/* Gris claro - Fondos suaves */
#EAEBED (RGB 234, 235, 237)

/* Azul oscuro - Fondos principales, headers */
#006989 (RGB 0, 105, 137)

/* Azul grisáceo - Textos secundarios, elementos sutiles */
#A3BAC3 (RGB 163, 186, 195)

/* Azul medio - Fondos secundarios, hover states */
#007090 (RGB 0, 112, 144)

/* Azul turquesa - Acentos, CTAs, iconos destacados */
#01A7C2 (RGB 1, 167, 194)
```

### Uso Recomendado

- **Heroes/Banners**: Degradados de `#006989` a `#007090`
- **Acentos/CTAs**: `#01A7C2` para botones, enlaces importantes, iconos
- **Bordes destacados**: `#01A7C2` en bordes superiores o laterales
- **Fondos suaves**: `#EAEBED` para secciones alternadas
- **Textos secundarios**: `#A3BAC3` para descripciones
- **Hover states**: Transiciones entre `#007090` y `#006989`

### Degradados Comunes

```css
/* Hero principal */
bg-gradient-to-br from-[#006989] to-[#007090]

/* Sección de contacto/CTA */
bg-gradient-to-br from-[#01A7C2] to-[#007090]

/* Tarjetas suaves */
bg-gradient-to-br from-[#EAEBED] to-[#A3BAC3]
```

---

## Iconografía

### Librería de Iconos

**Usar exclusivamente**: `lucide-react`

**NO usar emojis** (❌, ✅, 📧, etc.). Siempre reemplazar con iconos de Lucide React.

### Iconos Comunes

```typescript
import {
  Check, // ✓ Checkmarks, confirmaciones
  X, // × Cerrar, eliminar
  Mail, // Emails
  Phone, // Teléfonos
  Globe, // Websites
  MapPin, // Ubicaciones
  Calendar, // Fechas
  Clock, // Tiempo
  User, // Usuarios/perfiles
  Users, // Grupos/equipos
  Home, // Inicio
  Building, // Edificios/empresas
  FileText, // Documentos
  Star, // Destacados/favoritos
  CheckCircle2, // Confirmaciones destacadas
  AlertCircle, // Alertas/avisos
  Info, // Información
  ChevronRight, // Flechas hacia derecha
  ChevronDown, // Flechas hacia abajo
  ArrowRight, // Navegación/siguiente
  Menu, // Menú hamburguesa
  Settings, // Configuración
  Search, // Búsqueda
} from "lucide-react";
```

### Ejemplo de Uso

```tsx
// ❌ MAL - Usando emojis
<span>📧 email@example.com</span>

// ✅ BIEN - Usando Lucide React
<Mail className="w-5 h-5 text-[#007090] mr-2" />
<span>email@example.com</span>
```

### Tamaños Recomendados

- **Iconos pequeños** (inline con texto): `w-4 h-4` o `w-5 h-5`
- **Iconos medianos** (títulos de sección): `w-6 h-6` o `w-8 h-8`
- **Iconos grandes** (heroes, destacados): `w-10 h-10` o `w-12 h-12`

### Colores de Iconos

- **Iconos principales**: `text-[#01A7C2]` (turquesa)
- **Iconos secundarios**: `text-[#007090]` (azul medio)
- **Iconos en backgrounds oscuros**: `text-white` o `text-[#A3BAC3]`
- **Iconos con hover**: Transición de `#007090` a `#006989`
