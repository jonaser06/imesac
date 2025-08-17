import { Building2, Users, Award, Clock, Shield, Zap } from "lucide-react";

export default function QuienesSomos() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Hero Section */}
          <div className=" overflow-hidden rounded-t-lg">
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-12">
              <div className="flex items-center mb-4">
                <Building2 className="w-8 h-8 text-white mr-3" />
                <h1 className="text-3xl font-bold text-white">
                  ¿Quiénes Somos?
                </h1>
              </div>
              <p className="text-orange-100 text-lg max-w-3xl">
                Conoce la historia, valores y compromiso que nos han convertido
                en líderes en ingeniería eléctrica
              </p>
            </div>
          </div>

          <div className="p-8">
            {/* Main Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Sobre IMESAC
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  <strong>IMESAC</strong> (Instalaciones Mecánicas Eléctricas
                  Sur S.A.C.) inicia sus actividades con el firme propósito de
                  consolidar una cultura empresarial sólida y confiable.
                  Ofrecemos al mercado servicios especializados de ingeniería
                  eléctrica en baja y media tensión, así como proyectos
                  integrales relacionados con el sector eléctrico y mecánico.
                </p>
                <p className="mb-6">
                  Contamos con personal altamente calificado y el respaldo de
                  ingenieros y técnicos electricistas con amplia experiencia en
                  los sectores residencial, comercial e industrial. Nuestro
                  equipo está comprometido con la excelencia técnica y la
                  innovación constante.
                </p>
                <p>
                  Hemos ganado el reconocimiento de nuestros clientes por la
                  calidad excepcional de nuestros servicios, nuestros tiempos de
                  respuesta eficientes y la eficiencia operativa que caracteriza
                  cada uno de nuestros proyectos.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#d09706]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Personal Calificado
                </h3>
                <p className="text-gray-600 text-sm">
                  Equipo de ingenieros y técnicos con amplia experiencia en el
                  sector eléctrico y mecánico
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-[#d09706]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Calidad Reconocida
                </h3>
                <p className="text-gray-600 text-sm">
                  Reconocimiento de nuestros clientes por la excelencia en cada
                  proyecto ejecutado
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#d09706]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Respuesta Rápida
                </h3>
                <p className="text-gray-600 text-sm">
                  Tiempos de respuesta eficientes que garantizan la continuidad
                  de tus operaciones
                </p>
              </div>
            </div>

            {/* Sectors */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Sectores que Atendemos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Residencial
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Instalaciones eléctricas para hogares, condominios y
                    desarrollos habitacionales
                  </p>
                </div>

                <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Comercial
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Soluciones eléctricas para oficinas, centros comerciales y
                    establecimientos
                  </p>
                </div>

                <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Industrial
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Proyectos de gran envergadura para plantas industriales y
                    manufactura
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nuestros Valores
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Award className="w-4 h-4 text-[#d09706]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Excelencia
                    </h3>
                    <p className="text-gray-600">
                      Buscamos la perfección en cada proyecto, superando las
                      expectativas de nuestros clientes
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-4 h-4 text-[#d09706]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Seguridad
                    </h3>
                    <p className="text-gray-600">
                      Priorizamos la seguridad en todas nuestras instalaciones y
                      procesos de trabajo
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Users className="w-4 h-4 text-[#d09706]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Compromiso
                    </h3>
                    <p className="text-gray-600">
                      Nos comprometemos con el éxito de cada proyecto y el
                      desarrollo de nuestro equipo
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Zap className="w-4 h-4 text-[#d09706]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Innovación
                    </h3>
                    <p className="text-gray-600">
                      Adoptamos las últimas tecnologías y metodologías para
                      ofrecer soluciones avanzadas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
