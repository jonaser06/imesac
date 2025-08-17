import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function TiendaPage() {
  const productos = [
    {
      id: 1,
      nombre: "Panel LED 60x60",
      marca: "PHILIPS",
      sku: "PHI-LED001",
      imagen: "https://placehold.jp/600x600.png",
      precioOriginal: 150.0,
      precioOferta: 120.0,
      slug: "panel-led-60x60-n1",
    },
    {
      id: 2,
      nombre: "Smart UPS SRT Online 1-10 kVA",
      marca: "APC",
      sku: "APC-SRT001",
      imagen: "https://placehold.jp/600x600.png",
      precioOriginal: 4800.0,
      precioOferta: 4000.0,
      slug: "smart-ups-srt-online-1-10-kva-n2",
    },
    {
      id: 3,
      nombre: "Transformador TRF - GESELEC- 50 KVA",
      marca: "GESELEC",
      sku: "GES-TRF001",
      imagen: "https://placehold.jp/600x600.png",
      precioOriginal: 6000.0,
      precioOferta: 5600.0,
      slug: "transform-ge-selec-50-kva-n3",
    },
    {
      id: 4,
      nombre: "UPS 1KVA Kaise - Modelo KUE-RT01-WB",
      marca: "KAISE",
      sku: "APC-SRT001-1",
      imagen: "https://placehold.jp/600x600.png",
      precioOriginal: 1950.0,
      precioOferta: 1500.0,
      slug: "ups-1kva-kaise-modelo-kue-rt01-wb-n4",
    },
    {
      id: 5,
      nombre: "UPS 3KVA Kaise - Modelo KUE-RT03-WB-CH",
      marca: "KAISE",
      sku: "KAI-UPS002",
      imagen: "https://placehold.jp/600x600.png",
      precioOriginal: 3000.0,
      precioOferta: 2600.0,
      slug: "ups-3kva-kaise-modelo-kue-rt03-wb-ch-n5",
    },
    {
      id: 6,
      nombre: "UPS 5KVA APC - Modelo SRV5KI",
      marca: "APC",
      sku: "APC-UPS005",
      imagen: "https://placehold.jp/600x600.png",
      precioOriginal: 7000.0,
      precioOferta: 6500.0,
      slug: "ups-5kva-apc-modelo-srv5ki-n6",
    },
  ];

  const categorias = [
    "Sin categorizar",
    "Baterías UPS",
    "Multipropósito",
    "Estabilizadores",
    "Monofásico",
    "Luminarias",
    "LED",
    "Transformadores",
    "Monofásico",
    "UPS",
    "Monofásico",
    "Trifásico",
  ];

  const marcas = ["APC", "GESELEC", "KAISE", "PHILIPS", "RITAR"];

  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar de Filtros */}
          <aside className="w-full lg:w-64 bg-white rounded-lg shadow-sm p-6">
            {/* Filtro por Categoría */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Categoría
              </h3>
              <div className="space-y-3">
                {categorias.map((categoria, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox id={`categoria-${index}`} />
                    <Label
                      htmlFor={`categoria-${index}`}
                      className="text-sm text-gray-600 cursor-pointer hover:text-gray-800"
                    >
                      {categoria}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Filtro por Marca */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Marca
              </h3>
              <div className="space-y-3">
                {marcas.map((marca, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox id={`marca-${index}`} />
                    <Label
                      htmlFor={`marca-${index}`}
                      className="text-sm text-gray-600 cursor-pointer hover:text-gray-800"
                    >
                      {marca}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Grilla de Productos */}
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productos.map((producto) => (
                <Link href={`/tienda/${producto.slug}`} key={producto.id}>
                  <div
                    key={producto.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    {/* Marca */}
                    <div className="px-4 pt-3">
                      <span className="text-xs text-gray-500 uppercase tracking-wide">
                        {producto.marca}
                      </span>
                    </div>

                    {/* Imagen del producto */}
                    <div className="px-4 py-2">
                      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                        <Image
                          src={producto.imagen || "/placeholder.svg"}
                          alt={producto.nombre}
                          width={200}
                          height={200}
                          className="object-contain max-h-40"
                        />
                      </div>
                    </div>

                    {/* Información del producto */}
                    <div className="px-4 pb-4">
                      <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                        {producto.nombre}
                      </h3>

                      <div className="mb-3">
                        <span className="text-xs text-gray-500">SKU: </span>
                        <span className="text-xs text-blue-600 font-medium">
                          {producto.sku}
                        </span>
                      </div>

                      {/* Precios */}
                      <div className="space-y-1">
                        <div className="text-sm text-gray-500 line-through">
                          S/ {producto.precioOriginal.toFixed(2)}
                        </div>
                        <div className="text-lg font-bold text-blue-600">
                          S/ {producto.precioOferta.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
