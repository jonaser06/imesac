# Prompt: Crear Nueva Feature (Feature-Based Architecture)

## Contexto

Este proyecto utiliza el patrón **Feature-Based Architecture**, donde cada funcionalidad se organiza en una carpeta independiente con todos sus recursos relacionados.

## Objetivo

Crear una nueva feature siguiendo la estructura y convenciones establecidas en el proyecto IMESAC.

---

## Estructura de una Feature

Cada feature debe estar ubicada en `src/features/[nombre-feature]/` y seguir esta estructura:

```
src/features/[nombre-feature]/
├── components/          # Componentes React de la feature
│   ├── [Component].tsx
│   ├── [Component].module.css (opcional)
│   └── ...
├── hooks/              # Custom hooks específicos de la feature
│   ├── use[Hook].ts
│   └── ...
├── types/              # TypeScript types/interfaces
│   ├── [entity].types.ts
│   └── ...
├── constants/          # Constantes y datos estáticos
│   ├── [data].constants.ts
│   └── ...
├── utils/              # Funciones utilitarias
│   ├── [utility].utils.ts
│   └── ...
├── services/           # Llamadas a API (opcional)
│   ├── [service].service.ts
│   └── ...
└── index.ts           # Punto de entrada principal (exports públicos)
```

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

- Usar alias `@/` para imports absolutos: `import { Hero } from "@/features/hero"`
- Imports relativos solo dentro de la misma feature: `import { useCategoryToggle } from "../hooks/useCategoryToggle"`

---

## Checklist de Nueva Feature

Al crear una nueva feature, asegúrate de:

- [ ] Crear la carpeta en `src/features/[nombre-feature]/`
- [ ] Definir types en `types/[entity].types.ts`
- [ ] Crear constantes/datos en `constants/[data].constants.ts`
- [ ] Implementar componentes en `components/`
- [ ] Crear hooks personalizados si es necesario en `hooks/`
- [ ] Agregar utils si hay lógica reutilizable en `utils/`
- [ ] Crear el archivo `index.ts` con exports públicos
- [ ] Usar `"use client"` solo si es necesario
- [ ] Documentar props con TypeScript interfaces
- [ ] Seguir las convenciones de nomenclatura
- [ ] Probar la integración con otras features

---

## Uso en Páginas

### Importar desde features:

```typescript
// src/app/page.tsx
import { Hero } from "@/features/hero";
import { Categories } from "@/features/categories";
import { BlogGrid } from "@/features/blog-grid";

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

- `src/features/hero/` - Feature simple
- `src/features/categories/` - Feature con hooks y estado
- `src/features/blog-grid/` - Feature con subcomponentes y utils
- `src/features/store-section/` - Feature con tipos complejos
- `src/features/companies/` - Feature con CSS Modules y animaciones

---

## Instrucciones para GitHub Copilot

Cuando solicite crear una nueva feature:

1. Analiza la descripción de la funcionalidad
2. Determina qué carpetas necesitarás (components, types, constants, hooks, utils)
3. Crea la estructura de carpetas en `src/features/[nombre-feature]/`
4. Define primero los types si hay entidades de datos
5. Crea las constantes con datos de ejemplo
6. Implementa los componentes siguiendo los patrones existentes
7. Agrega hooks si hay lógica de estado compleja
8. Crea utils si hay transformaciones de datos
9. Configura el `index.ts` con los exports públicos
10. Proporciona ejemplos de uso en páginas

**Siempre sigue las convenciones de nomenclatura y estructura establecidas.**
