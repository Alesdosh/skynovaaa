import React from 'react';
import TestimonialCard from '@/components/TestimonialCard';

const Clientes = () => {
  return (
    <section id="clientes" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Clientes y colaboraciones</h2>
          
        </div>

        

        <h3 className="text-2xl font-bold mb-8 text-center">Lo que dicen nuestros clientes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            quote="Las imágenes aéreas que grabaron para nuestra boda superaron todas nuestras expectativas. Un recuerdo inolvidable."
            author="María y Alberto"
            company="Clientes de Boda"
            image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
          />
          <TestimonialCard
            quote="Trabajar con Skynova en nuestro documental fue una decisión acertada. Su profesionalidad y creatividad aportaron un valor enorme."
            author="Javier Mendez"
            company="Director de cine"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
          />
          <TestimonialCard
            quote="Las tomas aéreas para nuestra campaña publicitaria fueron espectaculares. Sin duda volveremos a contar con ellos."
            author="Carmen Rodríguez"
            company="Directora de Marketing"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default Clientes;
