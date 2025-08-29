import ProductView from "@/components/ProductView/ProductView";

interface ProductPageProps {
  params: Promise<{
    producto: string;
  }>;
}

interface RelatedProduct {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  brand: string;
}

export default async function ProductPage({ params }: ProductPageProps) {
  await params; // In a real implementation, you would use the producto parameter
  const product = {
    id: 1,
    name: "UPS 5KVA APC Smart-UPS SRT Online - Modelo SRV5KI",
    brand: "APC",
    sku: "APC-UPS005",
    price: 6500.0,
    originalPrice: 7000.0,
    discount: 7,
    shortDescription:
      "Sistema de alimentación ininterrumpida (UPS) de 5KVA con tecnología online de doble conversión. Ideal para proteger equipos críticos en empresas medianas y grandes.",
    fullDescription: `
      El UPS APC Smart-UPS SRT Online SRV5KI es una solución de alimentación ininterrumpida de alta gama diseñada para proteger equipos críticos en entornos empresariales. Con una capacidad de 5KVA/4500W, este sistema utiliza tecnología de doble conversión online que garantiza una alimentación limpia y estable en todo momento.

      **Características principales:**
      • Tecnología Online de doble conversión para máxima protección
      • Capacidad de 5KVA/4500W
      • Factor de potencia de salida de 0.9
      • Pantalla LCD multifunción para monitoreo en tiempo real
      • Conectividad de red para gestión remota
      • Baterías reemplazables en caliente
      • Bypass automático en caso de sobrecarga o falla

      **Aplicaciones recomendadas:**
      • Servidores y centros de datos pequeños a medianos
      • Equipos de telecomunicaciones
      • Sistemas de seguridad y videovigilancia
      • Equipos médicos no críticos
      • Estaciones de trabajo de alta gama

      **Especificaciones técnicas:**
      • Voltaje de entrada: 230V ±25%
      • Frecuencia de entrada: 50/60 Hz ±5%
      • Voltaje de salida: 230V ±2%
      • Tiempo de transferencia: 0ms (online)
      • Autonomía: 5-15 minutos (según carga)
      • Dimensiones: 438 x 86 x 660 mm
      • Peso: 29 kg
    `,
    technicalSheet: "/docs/apc-srv5ki-datasheet.pdf",
    images: [
      {
        id: 1,
        url: "https://placehold.jp/600x600.png",
        alt: "UPS 5KVA APC - Vista frontal",
      },
      {
        id: 2,
        url: "https://placehold.jp/600x600.png",
        alt: "UPS 5KVA APC - Vista trasera",
      },
      {
        id: 3,
        url: "https://placehold.jp/600x600.png",
        alt: "UPS 5KVA APC - Pantalla LCD",
      },
      {
        id: 4,
        url: "https://placehold.jp/600x600.png",
        alt: "UPS 5KVA APC - Conectores",
      },
    ],
  };

  const relatedProducts: RelatedProduct[] = [
    {
      id: 2,
      name: "UPS 3KVA Kaise - Modelo KUE-RT03-WB-CH",
      price: 2600.0,
      originalPrice: 3000.0,
      image: "https://placehold.jp/600x600.png",
      brand: "KAISE",
    },
    {
      id: 3,
      name: "UPS 1KVA Kaise - Modelo KUE-RT01-WB",
      price: 1500.0,
      originalPrice: 1950.0,
      image: "https://placehold.jp/600x600.png",
      brand: "KAISE",
    },
    {
      id: 4,
      name: "Smart UPS SRT Online 1-10 kVA",
      price: 4000.0,
      originalPrice: 4800.0,
      image: "https://placehold.jp/600x600.png",
      brand: "APC",
    },
    {
      id: 5,
      name: "Transformador TRF - GESELEC- 50 KVA",
      price: 5600.0,
      originalPrice: 6000.0,
      image: "https://placehold.jp/600x600.png",
      brand: "GESELEC",
    },
  ];

  const comments = [
    {
      id: 1,
      author: "Carlos Mendoza",
      rating: 5,
      date: "15 Nov 2024",
      comment:
        "Excelente equipo, llevo 6 meses usándolo en mi empresa y funciona perfectamente. La instalación fue muy sencilla y el soporte técnico de GESELEC es de primera.",
    },
    {
      id: 2,
      author: "María González",
      rating: 4,
      date: "8 Nov 2024",
      comment:
        "Muy buen UPS, cumple con todas las especificaciones. Solo le falta un poco más de autonomía, pero para el precio está muy bien.",
    },
    {
      id: 3,
      author: "Roberto Silva",
      rating: 5,
      date: "2 Nov 2024",
      comment:
        "Lo recomiendo 100%. Protege muy bien mis servidores y la pantalla LCD es muy útil para monitorear el estado. Entrega rápida y buen precio.",
    },
  ];

  return (
    <ProductView
      product={product}
      relatedProducts={relatedProducts}
      comments={comments}
    />
  );
}
