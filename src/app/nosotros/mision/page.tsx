import { Clock, Lightbulb, Shield, Target, Trophy, Users } from "lucide-react";

export default function Mision() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Hero Section */}
          <div className="overflow-hidden rounded-t-lg">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-12">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-white mr-3" />
                <h1 className="text-3xl font-bold text-white">
                  Nuestra Misión
                </h1>
              </div>
              <p className="text-blue-100 text-lg max-w-3xl">
                El propósito que nos guía cada día y define nuestro compromiso
                con la excelencia
              </p>
            </div>
          </div>

          <div className="p-8">
            {/* Mission Statement */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <blockquote className="text-xl text-gray-800 font-medium leading-relaxed">
                    &ldquo;Cooperar con el éxito de nuestros clientes,
                    desarrollando sus proyectos con calidad, seguridad, y dentro
                    del plazo y presupuesto previstos. Impulsando el desarrollo
                    personal y profesional de nuestra gente, formando líderes
                    cuyos logros trasciendan en la empresa y en la
                    sociedad.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Mission Components */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Componentes de Nuestra Misión
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Client Success */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <Trophy className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Éxito del Cliente
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Nuestro principal objetivo es contribuir al éxito de
                    nuestros clientes a través de soluciones eléctricas
                    innovadoras y confiables.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Soluciones personalizadas
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Asesoría técnica especializada
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Soporte continuo
                    </li>
                  </ul>
                </div>

                {/* Quality & Safety */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Calidad y Seguridad
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Desarrollamos cada proyecto con los más altos estándares de
                    calidad y seguridad, garantizando resultados excepcionales.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      Estándares internacionales
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      Protocolos de seguridad
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      Control de calidad riguroso
                    </li>
                  </ul>
                </div>

                {/* Time & Budget */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-[#d09706]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Plazo y Presupuesto
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Nos comprometemos a entregar todos nuestros proyectos dentro
                    del plazo acordado y respetando el presupuesto establecido.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                      Planificación detallada
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                      Gestión eficiente de recursos
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                      Transparencia en costos
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
                      Desarrollo del Talento
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Impulsamos el crecimiento personal y profesional de nuestro
                    equipo, formando líderes que marquen la diferencia.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      Capacitación continua
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      Desarrollo de liderazgo
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      Crecimiento profesional
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Achieve Our Mission */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                ¿Cómo Cumplimos Nuestra Misión?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Innovación Constante
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Adoptamos las últimas tecnologías y metodologías para
                    ofrecer soluciones de vanguardia
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Trabajo en Equipo
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fomentamos la colaboración y el trabajo conjunto para
                    alcanzar objetivos comunes
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-[#d09706]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Mejora Continua
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Evaluamos y mejoramos constantemente nuestros procesos para
                    ofrecer un mejor servicio
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
