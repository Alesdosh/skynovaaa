import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, Film, Camera } from 'lucide-react';

export default function ResumenServicios() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios destacados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones completas de grabación aérea para todo tipo de proyectos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <Video className="h-12 w-12 mx-auto mb-4 text-drone" />
            <h3 className="text-xl font-semibold mb-2">Grabación aérea para eventos</h3>
            <p className="text-gray-600">Capturamos momentos únicos desde el cielo para tus eventos especiales</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <Film className="h-12 w-12 mx-auto mb-4 text-drone" />
            <h3 className="text-xl font-semibold mb-2">Cine y televisión</h3>
            <p className="text-gray-600">Tomas aéreas profesionales para producciones audiovisuales</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <Camera className="h-12 w-12 mx-auto mb-4 text-drone" />
            <h3 className="text-xl font-semibold mb-2">Publicidad y marketing</h3>
            <p className="text-gray-600">Contenido visual impactante para elevar la imagen de tu marca</p>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Button asChild variant="default" size="lg" className="bg-drone-dark hover:bg-drone-dark/90">
            <a href="#servicios">Ver todos los servicios <ArrowRight size={16} className="ml-2" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
};
