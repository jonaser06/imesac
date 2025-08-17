import { ArrowRight, ShoppingBag } from "lucide-react";

const StoreSection = () => {
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
          {/* UPS Systems */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <img
                src="https://placehold.co/200x300"
                alt="Sistemas UPS"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Sistemas UPS
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Respaldo de energía confiable para equipos críticos. Desde 1KVA
              hasta 10KVA.
            </p>
            <div className="flex items-center text-[#d09706] text-sm font-medium">
              <span>Ver modelos disponibles</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* LED Panels */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <img
                src="https://placehold.co/200x300"
                alt="Paneles LED"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Paneles LED
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Iluminación eficiente y duradera. Paneles LED de alta calidad para
              uso comercial.
            </p>
            <div className="flex items-center text-[#d09706] text-sm font-medium">
              <span>Explorar catálogo</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Transformers */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <img
                src="https://placehold.co/200x300"
                alt="Transformadores"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Transformadores
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Transformadores de distribución y potencia para aplicaciones
              industriales.
            </p>
            <div className="flex items-center text-[#d09706] text-sm font-medium">
              <span>Ver especificaciones</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
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

export default StoreSection;
