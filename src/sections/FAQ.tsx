import React from 'react';
import { Accordion } from "@/components/ui/accordion";
import FAQItem from '@/components/FAQItem';

export default function FAQ() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas frecuentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos tus dudas sobre grabaciones con drones
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <FAQItem 
              question="¿Necesitan permisos especiales para volar drones en la ciudad?"
              answer="Sí, para volar en zonas urbanas se requieren permisos especiales de AESA (Agencia Estatal de Seguridad Aérea). Nosotros nos encargamos de gestionar todos los permisos necesarios para cada proyecto, incluyendo zonas restringidas."
              value="item-1"
            />
            <FAQItem 
              question="¿Qué tipo de archivos entregan al finalizar el proyecto?"
              answer="Entregamos los archivos en múltiples formatos según las necesidades del cliente: 4K, Full HD, formatos RAW para postproducción profesional, y archivos optimizados para web y redes sociales. Todo el material se entrega en alta calidad."
              value="item-2"
            />
            <FAQItem 
              question="¿Trabajan en toda España e internacionalmente?"
              answer="Sí, realizamos proyectos en toda España y también a nivel internacional. Contamos con los permisos necesarios para operar en diferentes países y gestionamos toda la logística para desplazamientos."
              value="item-3"
            />
            <FAQItem 
              question="¿Cuánto tiempo se tarda en recibir el material editado?"
              answer="Los tiempos de entrega varían según la complejidad del proyecto. Para eventos como bodas, el tiempo estimado es de 3-4 semanas. Para proyectos comerciales, establecemos plazos personalizados según los requisitos específicos."
              value="item-4"
            />
            <FAQItem 
              question="¿Qué sucede si el día de la grabación hay mal tiempo?"
              answer="Siempre monitorizamos las condiciones meteorológicas antes de una grabación. Si el clima no permite volar con seguridad, reprogramamos la sesión sin coste adicional o buscamos alternativas según el proyecto."
              value="item-5"
            />
            <FAQItem 
              question="¿Cómo funciona el proceso de contratación y pago?"
              answer="El proceso comienza con una consulta inicial para entender tus necesidades. Luego preparamos un presupuesto detallado. Tras la aprobación, se realiza un pago inicial del 30% para reservar la fecha, y el resto se abona al finalizar el proyecto y entregar el material."
              value="item-6"
            />
          </Accordion>
        </div>
      </div>
    </section>
  );
};
