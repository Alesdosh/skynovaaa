import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contacto = () => {
  return (
    <section id="contacto" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacta con nosotros</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cuéntanos sobre tu proyecto y te responderemos a la brevedad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            <ContactForm />
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-drone mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-gray-600">+34 912 345 678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-drone mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@skynova.es</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-drone mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-gray-600">Calle Principal 123, 28001, Madrid</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Horario de atención</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lunes - Viernes</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábado</span>
                  <span className="font-medium">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingo</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
