import {
  Award,
  Building2,
  Clock,
  Eye,
  Handshake,
  Lightbulb,
  Shield,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";

export default function Empresa() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* ============================================ */}
        {/* SECCIÓN: QUIÉNES SOMOS */}
        {/* ============================================ */}
        <div className="bg-white rounded-lg shadow-sm" id="quienes-somos">
          {/* Hero Section */}
          <div className="overflow-hidden rounded-t-lg">
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
            {/* Main Description con Imagen */}
            <div className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Sobre IMESAC
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="mb-6">
                      <strong>IMESAC</strong> (Instalaciones Mecánicas
                      Eléctricas Sur S.A.C.) inicia sus actividades con el firme
                      propósito de consolidar una cultura empresarial sólida y
                      confiable. Ofrecemos al mercado servicios especializados
                      de ingeniería eléctrica en baja y media tensión, así como
                      proyectos integrales relacionados con el sector eléctrico
                      y mecánico.
                    </p>
                    <p className="mb-6">
                      Contamos con personal altamente calificado y el respaldo
                      de ingenieros y técnicos electricistas con amplia
                      experiencia en los sectores residencial, comercial e
                      industrial. Nuestro equipo está comprometido con la
                      excelencia técnica y la innovación constante.
                    </p>
                    <p>
                      Hemos ganado el reconocimiento de nuestros clientes por la
                      calidad excepcional de nuestros servicios, nuestros
                      tiempos de respuesta eficientes y la eficiencia operativa
                      que caracteriza cada uno de nuestros proyectos.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/quienes_somos.jpg"
                      alt="Quiénes Somos - IMESAC"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
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

        {/* ============================================ */}
        {/* SECCIÓN: MISIÓN */}
        {/* ============================================ */}
        <div className="bg-white rounded-lg shadow-sm" id="mision">
          {/* Hero Section */}
          <div className="overflow-hidden rounded-t-lg">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-12">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-white mr-3" />
                <h2 className="text-3xl font-bold text-white">
                  Nuestra Misión
                </h2>
              </div>
              <p className="text-blue-100 text-lg max-w-3xl">
                El propósito que nos guía cada día y define nuestro compromiso
                con la excelencia
              </p>
            </div>
          </div>

          <div className="p-8">
            {/* Mission Statement con Imagen */}
            <div className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-8 h-8 text-blue-600" />
                    </div>
                    <blockquote className="text-xl text-gray-800 font-medium leading-relaxed">
                      &ldquo;Cooperar con el éxito de nuestros clientes,
                      desarrollando sus proyectos con calidad, seguridad, y
                      dentro del plazo y presupuesto previstos. Impulsando el
                      desarrollo personal y profesional de nuestra gente,
                      formando líderes cuyos logros trasciendan en la empresa y
                      en la sociedad.&rdquo;
                    </blockquote>
                  </div>
                </div>
                <div className="order-first lg:order-last">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/mision.jpg"
                      alt="Nuestra Misión - IMESAC"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Components */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Componentes de Nuestra Misión
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Client Success */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <Trophy className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      Éxito del Cliente
                    </h4>
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
                    <h4 className="text-xl font-semibold text-gray-900">
                      Calidad y Seguridad
                    </h4>
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
                    <h4 className="text-xl font-semibold text-gray-900">
                      Plazo y Presupuesto
                    </h4>
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
                    <h4 className="text-xl font-semibold text-gray-900">
                      Desarrollo del Talento
                    </h4>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                ¿Cómo Cumplimos Nuestra Misión?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Innovación Constante
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Adoptamos las últimas tecnologías y metodologías para
                    ofrecer soluciones de vanguardia
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Trabajo en Equipo
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Fomentamos la colaboración y el trabajo conjunto para
                    alcanzar objetivos comunes
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-[#d09706]" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Mejora Continua
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Evaluamos y mejoramos constantemente nuestros procesos para
                    ofrecer un mejor servicio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================ */}
        {/* SECCIÓN: VISIÓN */}
        {/* ============================================ */}
        <div className="bg-white rounded-lg shadow-sm" id="vision">
          {/* Hero Section */}
          <div className="overflow-hidden rounded-t-lg">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-12">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-white mr-3" />
                <h2 className="text-3xl font-bold text-white">
                  Nuestra Visión
                </h2>
              </div>
              <p className="text-purple-100 text-lg max-w-3xl">
                El futuro que visualizamos y hacia donde dirigimos todos
                nuestros esfuerzos
              </p>
            </div>
          </div>

          <div className="p-8">
            {/* Vision Statement con Imagen */}
            <div className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/vision.png"
                      alt="Nuestra Visión - IMESAC"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Eye className="w-8 h-8 text-purple-600" />
                    </div>
                    <blockquote className="text-xl text-gray-800 font-medium leading-relaxed">
                      &ldquo;Ser una empresa líder a nivel nacional, a través
                      del crecimiento sostenible para el beneficio de nuestros
                      clientes y colaboradores&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Components */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Elementos de Nuestra Visión
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* National Leadership */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                      <Award className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      Liderazgo Nacional
                    </h4>
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
                    <h4 className="text-xl font-semibold text-gray-900">
                      Crecimiento Sostenible
                    </h4>
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
                    <h4 className="text-xl font-semibold text-gray-900">
                      Beneficio de Clientes
                    </h4>
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
                    <h4 className="text-xl font-semibold text-gray-900">
                      Desarrollo de Colaboradores
                    </h4>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Objetivos Estratégicos para Alcanzar Nuestra Visión
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-[#d09706] font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Expansión Geográfica
                    </h4>
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Innovación Tecnológica
                    </h4>
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Certificaciones Internacionales
                    </h4>
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Desarrollo de Talento
                    </h4>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Hoja de Ruta hacia Nuestra Visión
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold">2024</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Consolidación
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Fortalecer nuestra posición en el mercado local y expandir
                    nuestro equipo de especialistas
                  </p>
                </div>

                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold">2026</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Expansión
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Establecer oficinas regionales y desarrollar alianzas
                    estratégicas a nivel nacional
                  </p>
                </div>

                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold">2028</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Liderazgo
                  </h4>
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
