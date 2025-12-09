"use client";

import { useState } from "react";
import { MessageCircle, X, User } from "lucide-react";
import Image from "next/image";

interface Contact {
  id: number;
  name: string;
  phone: string;
  role: string;
  avatar?: string;
}

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts: Contact[] = [
    {
      id: 1,
      name: "Luis Casas",
      phone: "51990458254",
      role: "Jefe de proyectos",
      avatar: "/image.png",
    },
    {
      id: 2,
      name: "Abel Mendoza",
      phone: "51993546564",
      role: "Ejecutivo de Ventas",
      avatar: "/image.png",
    },
  ];

  const openWhatsApp = (phone: string, name: string) => {
    const messages = [
      `Hola ${name}, buenos días. Visité la página web de IMESAC y me interesa conocer más sobre sus servicios profesionales.`,
      `Hola ${name}, me gustaría solicitar una cotización para un proyecto. ¿Podemos coordinar una reunión?`,
      `Hola ${name}, ¿cómo estás? Te escribo porque encontré IMESAC en línea y necesito asesoría técnica. ¿Me podrías ayudar?`,
      `Hola ${name}, requiero información urgente sobre los servicios de IMESAC para un proyecto en curso. ¿Estás disponible?`,
      `Hola ${name}, estoy evaluando proveedores para un proyecto eléctrico/industrial. ¿Podrías compartirme información sobre lo que ofrecen en IMESAC?`,
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const message = encodeURIComponent(randomMessage);
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Lista de Contactos */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MessageCircle className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">Contáctanos</h3>
                <p className="text-sm text-green-100">
                  Elige con quién chatear
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-green-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lista de Contactos */}
          <div className="max-h-80 overflow-y-auto">
            {contacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => openWhatsApp(contact.phone, contact.name)}
                className="w-full p-4 flex items-center space-x-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  {contact.avatar ? (
                    <Image
                      src={contact.avatar}
                      alt={contact.name}
                      width={40}
                      height={40}
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                  )}
                </div>

                {/* Info del Contacto */}
                <div className="flex-1 text-left">
                  <h4 className="font-medium text-gray-900">{contact.name}</h4>
                  <p className="text-sm text-gray-500">{contact.role}</p>
                </div>

                {/* Ícono de WhatsApp */}
                <div className="flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="p-3 bg-gray-50 text-center">
            <p className="text-xs text-gray-500">
              Respuesta inmediata en horario de oficina
            </p>
            <p className="text-xs text-gray-400">
              Lun - Vie: 8:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      )}

      {/* Botón Flotante de WhatsApp */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
    fixed bottom-6 right-6 z-50
    w-14 h-14 bg-green-500 hover:bg-green-600 
    rounded-full shadow-lg hover:shadow-xl
    flex items-center justify-center
    transition-all duration-300 ease-in-out
    ${isOpen ? "scale-110" : "animate-heartbeat"}
    group
  `}
      >
        {/* Animación de ondas */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ripple opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ripple-delay opacity-20"></div>

        {/* Ícono */}
        {/* <MessageCircle className="w-7 h-7 text-white relative z-10" /> */}
        <Image src="/whatsapp.webp" alt="WhatsApp" width={40} height={40} />

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          ¿Necesitas ayuda?
        </div>
      </button>

      {/* Estilos adicionales para la animación */}
      <style jsx>{`
        @keyframes heartbeat {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-heartbeat {
          animation: heartbeat 3s ease-in-out infinite;
        }

        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.2;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-ripple {
          animation: ripple 3s ease-in-out infinite;
        }

        .animate-ripple-delay {
          animation: ripple 3s ease-in-out 1.5s infinite;
        }
      `}</style>
    </>
  );
}
