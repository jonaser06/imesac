"use client";

import { Mail, Phone, Globe } from "lucide-react";
import { ContactInfo } from "../types/estructuras-detail.types";

interface EstructuraContactProps {
  contact: ContactInfo;
}

export function EstructuraContact({ contact }: EstructuraContactProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-[#01A7C2] to-[#007090]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Solicita más información sobre tu servicio hoy mismo
        </h2>
        <div className="bg-white rounded-lg shadow-xl p-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Emails */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b-2 border-[#01A7C2] pb-2">
                Correos Electrónicos
              </h3>
              <div className="space-y-2">
                {contact.emails.map((email, index) => (
                  <a
                    key={index}
                    href={`mailto:${email}`}
                    className="flex items-center text-gray-700 hover:text-[#007090] transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                    {email}
                  </a>
                ))}
              </div>
            </div>

            {/* Teléfonos */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b-2 border-[#01A7C2] pb-2">
                Teléfonos
              </h3>
              <div className="space-y-2">
                {contact.phones.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-center text-gray-700 hover:text-[#007090] transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                    {phone}
                  </a>
                ))}
                <a
                  href={`tel:${contact.landline.replace(/\s/g, "")}`}
                  className="flex items-center text-gray-700 hover:text-[#007090] transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  {contact.landline}
                </a>
              </div>
            </div>
          </div>

          {/* Website */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <span className="text-gray-700 font-medium block mb-2">
              Visítanos en:
            </span>
            <a
              href={`https://${contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#007090] hover:text-[#006989] font-semibold text-lg transition-colors"
            >
              <Globe className="w-5 h-5 mr-2" />
              {contact.website}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
