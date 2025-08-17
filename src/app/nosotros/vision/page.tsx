import { Award, Eye, Handshake, TrendingUp, Users } from "lucide-react";

export default function Vision() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Hero Section */}
          <div className="overflow-hidden rounded-t-lg">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-12">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-white mr-3" />
                <h1 className="text-3xl font-bold text-white">
                  Nuestra Visión
                </h1>
              </div>
              <p className="text-purple-100 text-lg max-w-3xl">
                El futuro que visualizamos y hacia donde dirigimos todos
                nuestros esfuerzos
              </p>
            </div>
          </div>

          <div className="p-8">
            {/* Vision Statement */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-purple-600" />
                  </div>
                  <blockquote className="text-xl text-gray-800 font-medium leading-relaxed">
                    &quot;Ser una empresa líder a nivel nacional, a través del
                    crecimiento sostenible para el beneficio de nuestros
                    clientes y colaboradores&quot&quot;
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Vision Components */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Elementos de Nuestra Visión
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* National Leadership */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                      <Award className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Liderazgo Nacional
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Aspiramos a ser reconocidos como la empresa líder en
                    ingeniería eléctrica a nivel nacional, estableciendo nuevos
                    estándares en el sector.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      Presencia en todo el territorio nacional
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      Reconocimiento por excelencia técnica
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      Referente en innovación del sector
                    </li>
                  </ul>
                </div>

                {/* Sustainable Growth */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Crecimiento Sostenible
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Buscamos un crecimiento equilibrado y sostenible que nos
                    permita expandirnos sin comprometer la calidad de nuestros
                    servicios.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Expansión planificada y estratégica
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Inversión en tecnología y capacitación
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Responsabilidad ambiental
                    </li>
                  </ul>
                </div>

                {/* Client Benefit */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Handshake className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Beneficio de Clientes
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Nuestro crecimiento está orientado a generar mayor valor y
                    beneficios para nuestros clientes a través de mejores
                    servicios.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      Servicios más especializados
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      Mayor cobertura geográfica
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      Soluciones más innovadoras
                    </li>
                  </ul>
                </div>

                {/* Team Development */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Desarrollo de Colaboradores
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Nuestro crecimiento incluye el desarrollo integral de
                    nuestros colaboradores, creando oportunidades de crecimiento
                    profesional.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      Oportunidades de carrera
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      Ambiente laboral positivo
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      Reconocimiento y recompensas
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Strategic Objectives */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Objetivos Estratégicos para Alcanzar Nuestra Visión
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-[#d09706] font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Expansión Geográfica
                    </h3>
                    <p className="text-gray-600">
                      Establecer presencia en las principales ciudades del país,
                      ofreciendo nuestros servicios especializados a nivel
                      nacional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-[#d09706] font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Innovación Tecnológica
                    </h3>
                    <p className="text-gray-600">
                      Incorporar las últimas tecnologías en ingeniería eléctrica
                      y automatización para ofrecer soluciones de vanguardia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-[#d09706] font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Certificaciones Internacionales
                    </h3>
                    <p className="text-gray-600">
                      Obtener certificaciones internacionales que respalden
                      nuestra calidad y nos posicionen como líderes del sector.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-[#d09706] font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Desarrollo de Talento
                    </h3>
                    <p className="text-gray-600">
                      Crear programas de desarrollo profesional que atraigan y
                      retengan el mejor talento del sector eléctrico.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Hoja de Ruta hacia Nuestra Visión
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold">2024</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Consolidación
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fortalecer nuestra posición en el mercado local y expandir
                    nuestro equipo de especialistas
                  </p>
                </div>

                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold">2026</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Expansión
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Establecer oficinas regionales y desarrollar alianzas
                    estratégicas a nivel nacional
                  </p>
                </div>

                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold">2028</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Liderazgo
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Consolidarnos como la empresa líder nacional en ingeniería
                    eléctrica especializada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
