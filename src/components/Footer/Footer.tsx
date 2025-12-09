import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#e6e6e6] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image src="/logo.png" alt="Logo" width={185} height={100} />
            </div>
            <p className="text-black mb-4 text-sm">
              Instalaciones Mecánicas Eléctricas Sur S.A.C. Más de 10 años
              brindando soluciones eléctricas profesionales y confiables.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-black hover:text-[#d09706] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-black hover:text-[#d09706] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-black hover:text-[#d09706] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-black hover:text-[#d09706] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/servicios/licencias-municipales"
                  className="text-black hover:text-[#d09706] transition-colors"
                >
                  Licencias Municipales
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/mantenimiento-subestaciones-electricas"
                  className="text-black hover:text-[#d09706] transition-colors"
                >
                  Mantenimiento de Subestaciones Eléctricas
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/instalaciones-electricas"
                  className="text-black hover:text-[#d09706] transition-colors"
                >
                  Instalaciones Eléctricas
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/sistema-contra-incendios"
                  className="text-black hover:text-[#d09706] transition-colors"
                >
                  Sistema Contra Incendios DACI / ACI
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/aire-acondicionado-climatizacion"
                  className="text-black hover:text-[#d09706] transition-colors"
                >
                  Aire Acondicionado y Climatización
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/mantenimiento-rebobinado-motores"
                  className="text-black hover:text-[#d09706] transition-colors"
                >
                  Mantenimiento y Rebobinado de Motores Eléctricos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/estructuras-metalicas"
                  className="text-black hover:text-[#d09706] transition-colors"
                >
                  Estructuras Metálicas
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-black hover:text-[#d09706] transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-[#d09706] transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-[#d09706] transition-colors"
                >
                  Tienda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-[#d09706] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-[#d09706] transition-colors"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-[#d09706] transition-colors"
                >
                  Cotización
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-[#d09706] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-black">
                  Sector 6, Grupo 6A, Mz. B, Lote 15 Villa El Salvador
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-[#d09706] mr-2 flex-shrink-0" />
                <p className="text-black">+01 751 9451</p>
              </div>
              <div className="flex items-center">
                <p className="ml-6 text-black">+51 990 458 254</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-[#d09706] mr-2 flex-shrink-0" />
                <span className="text-black">proyectos@imesac.com</span>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-[#d09706] mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-black">
                  <div>Lun - Vie: 8:00 - 18:00</div>
                  <div>Sáb: 8:00 - 13:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-black mb-4 md:mb-0">
              © 2024 IMESAC. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-black hover:text-[#d09706] transition-colors"
              >
                Términos de Servicio
              </a>
              <a
                href="#"
                className="text-black hover:text-[#d09706] transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-black hover:text-[#d09706] transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
