import { Mail, Phone, Globe } from "lucide-react";
import { ContactInfo } from "../types/service-detail.types";

interface ServiceContactProps {
  contact: ContactInfo;
}

export const ServiceContact = ({ contact }: ServiceContactProps) => {
  return (
    <section className="bg-gradient-to-br from-[#01A7C2] to-[#007090] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">{contact.cta}</h2>
          <p className="text-xl text-white/90">
            Nuestro equipo está listo para asesorarte
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-xl max-w-4xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};
