"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  Building2,
  MessageCircle,
  Zap,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const servicios = [
    "Licencias Municipales",
    "Mantenimiento de Subestaciones Eléctricas",
    "Instalaciones Eléctricas",
    "Sistema Contra Incendios DACI / ACI",
    "Mantenimiento de Agua Contra Incendios",
    "Aire Acondicionado y Climatización",
    "Mantenimiento y Rebobinado de Motores Eléctricos",
    "Estructuras Metálicas",
    "Otro",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          nombre: "",
          empresa: "",
          email: "",
          telefono: "",
          servicio: "",
          mensaje: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        console.error("Error al enviar:", data);

        // Reset error message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setSubmitStatus("error");

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.nombre && formData.email && formData.mensaje;

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[#006989] to-[#007090] text-white py-16">
        {/* Image Placeholder - Replace src with your image path */}
        <div className="absolute inset-0 opacity-40">
          <div className="w-full h-full bg-[url('/gb_slate_hero_background.jpg')] bg-cover bg-center bg-no-repeat" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <CheckCircle2 className="w-12 h-12 text-[#FFFF] mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Contáctanos</h1>
          </div>
          <p className="text-xl text-white max-w-4xl leading-relaxed">
            Estamos listos para ayudarte con tu próximo proyecto eléctrico.
            Contáctanos para una consulta gratuita y cotización personalizada.
          </p>
        </div>
      </section>
      {/* Hero Section */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Company Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#d09706]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Dirección</h3>
                    <p className="text-gray-600">
                      Sector 6, Grupo 6A, Mz. B, Lote 15
                      <br />
                      Villa El Salvador
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Teléfonos</h3>
                    <p className="text-gray-600">
                      +51 990 458 254
                      <br />
                      +51 993 546 564
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      proyectos@imesac.com
                      <br />
                      lcasas@imesac.com
                      <br />
                      amendoza@imesac.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Horarios</h3>
                    <p className="text-gray-600">
                      Lun - Vie: 8:00 AM - 6:00 PM
                      <br />
                      Sáb: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Nuestros Servicios
              </h3>
              <div className="space-y-2">
                {servicios.slice(0, -1).map((servicio, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {servicio}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envíanos un Mensaje
              </h2>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-green-900">
                        ¡Mensaje enviado con éxito!
                      </h4>
                      <p className="text-green-800 text-sm">
                        Nos pondremos en contacto contigo en las próximas 24
                        horas.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <div>
                      <h4 className="font-semibold text-red-900">
                        Error al enviar el mensaje
                      </h4>
                      <p className="text-red-800 text-sm">
                        Por favor, intenta nuevamente o contáctanos directamente
                        por teléfono o email.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nombre Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Empresa
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Teléfono
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="+51 999 888 777"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="servicio"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Servicio de Interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un servicio</option>
                    {servicios.map((servicio, index) => (
                      <option key={index} value={servicio}>
                        {servicio}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensaje *
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                      placeholder="Describe tu proyecto o consulta..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-[#d09706] text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  * Campos obligatorios. Nos comprometemos a responder en un
                  plazo máximo de 24 horas.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">
                Nuestra Ubicación
              </h2>
              <p className="text-gray-600 mt-2">
                Visítanos en nuestras oficinas principales en Lima. Contamos con
                estacionamiento gratuito para clientes.
              </p>
            </div>

            {/* Google Maps */}
            <div className="relative h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.1234567890123!2d-76.945264!3d-12.220823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDEzJzE0LjkiUyA3NsKwNTYnNDMuMCJX!5e0!3m2!1ses!2spe!4v1234567890123!5m2!1ses!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación IMESAC"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-orange-50 rounded-xl p-6 text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-[#d09706]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Respuesta Rápida
            </h3>
            <p className="text-gray-600">
              Respondemos a todas las consultas en menos de 24 horas
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Asesoría Profesional
            </h3>
            <p className="text-gray-600">
              Consultoría técnica especializada con ingenieros expertos
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Visita Técnica
            </h3>
            <p className="text-gray-600">
              Evaluación in-situ para proyectos complejos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
