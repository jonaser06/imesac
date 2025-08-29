import {
  Cable,
  Lightbulb,
  Settings,
  ShieldCheck,
  Snowflake,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogGrid = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 grid-rows-3 gap-4 h-[600px]">
          {/* Subestaciones Eléctricas - Large */}
          <Link
            href="/blog/mantenimiento-subestaciones-electricas"
            className="col-span-6 row-span-2 relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-900 to-blue-700 group transition-transform hover:scale-105"
          >
            <Image
              src="/mantenimiento_see.jpg"
              alt="Subestación Eléctrica"
              className="w-full h-full object-cover"
              width={1920}
              height={770}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center mb-2">
                <Zap className="w-6 h-6 mr-2" />
                <span className="text-sm font-medium">IMESAC</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                Mantenimiento especializado de subestaciones eléctricas
              </h3>
            </div>
          </Link>

          {/* Sistemas de Climatización - Large */}
          <Link
            href="/blog/sistemas-hvac-eficiencia-energetica"
            className="col-span-6 row-span-2 relative overflow-hidden rounded-lg bg-gradient-to-br from-cyan-100 to-blue-200 group transition-transform hover:scale-105"
          >
            <Image
              src="/HVAC_2.jpg"
              alt="Sistema HVAC"
              className="w-full h-full object-cover"
              width={1920}
              height={770}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center mb-2">
                <Snowflake className="w-6 h-6 mr-2" />
                <span className="text-sm font-medium">Climatización</span>
              </div>
              <h3 className="text-xl font-bold group-hover:text-cyan-300 transition-colors">
                Sistemas HVAC de alta eficiencia energética
              </h3>
            </div>
          </Link>

          {/* Defensa Civil - Small */}
          <Link
            href="/blog/certificacion-defensa-civil"
            className="col-span-3 row-span-1 relative overflow-hidden rounded-lg bg-gradient-to-br from-red-600 to-orange-600 group transition-transform hover:scale-105"
          >
            <Image
              src="/HVAC_2.jpg"
              alt="Defensa Civil"
              className="w-full h-full object-cover"
              width={1920}
              height={770}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white">
              <div className="flex items-center mb-1">
                <ShieldCheck className="w-4 h-4 mr-1" />
                <span className="text-xs font-medium">Seguridad</span>
              </div>
              <h3 className="text-sm font-bold group-hover:text-red-300 transition-colors">
                Certificación Defensa Civil
              </h3>
            </div>
          </Link>

          {/* Mantenimiento - Small */}
          <Link
            href="/blog/mantenimiento-preventivo-correctivo"
            className="col-span-3 row-span-1 relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 group transition-transform hover:scale-105"
          >
            <Image
              src="/mant_estructuras.jpg"
              alt="Mantenimiento"
              className="w-full h-full object-cover"
              width={1920}
              height={770}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white">
              <div className="flex items-center mb-1">
                <Settings className="w-4 h-4 mr-1" />
                <span className="text-xs font-medium">Mantenimiento</span>
              </div>
              <h3 className="text-sm font-bold group-hover:text-purple-300 transition-colors">
                Preventivo y correctivo
              </h3>
            </div>
          </Link>

          {/* Iluminación LED - Small */}
          <Link
            href="/blog/iluminacion-led-inteligente"
            className="col-span-3 row-span-1 relative overflow-hidden rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 group transition-transform hover:scale-105"
          >
            <Image
              src="/iluminacion.jpg"
              alt="Iluminación LED"
              className="w-full h-full object-cover"
              width={1920}
              height={770}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white">
              <div className="flex items-center mb-1">
                <Lightbulb className="w-4 h-4 mr-1" />
                <span className="text-xs font-medium">LED</span>
              </div>
              <h3 className="text-sm font-bold group-hover:text-yellow-300 transition-colors">
                Iluminación inteligente
              </h3>
            </div>
          </Link>

          {/* Puesta a Tierra - Small */}
          <Link
            href="/blog/sistemas-puesta-tierra"
            className="col-span-3 row-span-1 relative overflow-hidden rounded-lg bg-gradient-to-br from-green-600 to-emerald-700 group transition-transform hover:scale-105"
          >
            <Image
              src="/puesta_tierra.jpg"
              alt="Sistema de Puesta a Tierra"
              className="w-full h-full object-cover opacity-85"
              width={1920}
              height={770}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white">
              <div className="flex items-center mb-1">
                <Cable className="w-4 h-4 mr-1" />
                <span className="text-xs font-medium">Seguridad</span>
              </div>
              <h3 className="text-sm font-bold group-hover:text-green-300 transition-colors">
                Sistemas de puesta a tierra
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
