import { ArrowRight, ShoppingBag } from "lucide-react";
import { FEATURED_PRODUCTS } from "../constants/products.constants";
import { ProductCard } from "./ProductCard";

export const StoreSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ShoppingBag className="w-8 h-8 text-[#d09706] mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Equipos y Componentes Eléctricos
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complementamos nuestros servicios con una selección de equipos
            profesionales de las mejores marcas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-[#d09706] text-[#d09706] font-medium rounded-lg hover:bg-[#d09706] hover:text-white transition-colors"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Visitar Tienda Completa
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
