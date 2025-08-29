import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - IMESAC | Proyectos e Innovaciones Eléctricas",
  description: "Descubre nuestros proyectos más destacados y las últimas innovaciones en instalaciones eléctricas y sistemas HVAC.",
};

const blogPosts = [
  {
    id: "mantenimiento-subestaciones-electricas",
    title: "Mantenimiento especializado de subestaciones eléctricas",
    excerpt: "Proyecto de modernización y mantenimiento preventivo en subestación eléctrica de 220kV para garantizar el suministro energético confiable.",
    image: "/mantenimiento_see.jpg",
    category: "Subestaciones",
    date: "2024-01-15",
    readTime: "8 min",
    author: "Ing. Carlos Mendoza",
    featured: true
  },
  {
    id: "sistemas-hvac-eficiencia-energetica",
    title: "Sistemas HVAC de alta eficiencia energética",
    excerpt: "Implementación de sistema de climatización inteligente que redujo el consumo energético en un 35% en complejo industrial.",
    image: "/HVAC_2.jpg",
    category: "Climatización",
    date: "2024-01-10",
    readTime: "6 min",
    author: "Ing. Ana Rodríguez",
    featured: true
  },
  {
    id: "certificacion-defensa-civil",
    title: "Certificación Defensa Civil",
    excerpt: "Proceso completo de certificación para cumplimiento de normativas de seguridad en instalaciones eléctricas industriales.",
    image: "/HVAC_2.jpg",
    category: "Seguridad",
    date: "2024-01-05",
    readTime: "4 min",
    author: "Ing. Luis García"
  },
  {
    id: "mantenimiento-preventivo-correctivo",
    title: "Mantenimiento Preventivo y Correctivo",
    excerpt: "Estrategias integrales de mantenimiento que han extendido la vida útil de equipos eléctricos en un 40%.",
    image: "/mant_estructuras.jpg",
    category: "Mantenimiento",
    date: "2023-12-28",
    readTime: "5 min",
    author: "Ing. María López"
  },
  {
    id: "iluminacion-led-inteligente",
    title: "Iluminación LED Inteligente",
    excerpt: "Proyecto de modernización de iluminación con tecnología LED y control inteligente para centro comercial de 50,000 m².",
    image: "/iluminacion.jpg",
    category: "Iluminación",
    date: "2023-12-20",
    readTime: "7 min",
    author: "Ing. Pedro Vásquez"
  },
  {
    id: "sistemas-puesta-tierra",
    title: "Sistemas de Puesta a Tierra",
    excerpt: "Diseño e implementación de sistema de puesta a tierra de alta resistencia para instalación industrial crítica.",
    image: "/puesta_tierra.jpg",
    category: "Seguridad",
    date: "2023-12-15",
    readTime: "6 min",
    author: "Ing. Carmen Silva"
  }
];

const categories = ["Todos", "Subestaciones", "Climatización", "Seguridad", "Mantenimiento", "Iluminación"];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog de IMESAC
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Descubre nuestros proyectos más destacados, innovaciones tecnológicas y casos de éxito en instalaciones eléctricas y sistemas HVAC
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Proyectos Destacados</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('es-ES')}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Regular Posts */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Más Proyectos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="text-blue-600 text-sm font-medium">
                    Leer más →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}