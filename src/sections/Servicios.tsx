import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { Video, Film, Camera, Image, MapPin } from 'lucide-react';

export default function Servicios() {
  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones profesionales de grabación aérea adaptadas a tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Grabación para eventos"
            description="Bodas, conciertos, eventos deportivos y todo tipo de celebraciones capturadas desde perspectivas únicas."
            icon={Video}
          />
          <ServiceCard
            title="Cine y televisión"
            description="Tomas aéreas espectaculares para películas, series, documentales y programas de televisión."
            icon={Film}
          />
          <ServiceCard
            title="Publicidad"
            description="Videos promocionales para marcas con alto impacto visual que destacan en el mundo digital."
            icon={Camera}
          />
          <ServiceCard
            title="Fotografía aérea"
            description="Imágenes aéreas en alta resolución para diversos usos comerciales, editoriales y artísticos."
            icon={Image}
          />
          <ServiceCard
            title="Maquetas 3D y topografía"
            description="Modelado 3D y análisis topográfico utilizando tecnología de drones para proyectos de arquitectura e ingeniería."
            icon={MapPin}
          />
          <ServiceCard
            title="Inspecciones técnicas"
            description="Inspección de estructuras, análisis de terrenos y levantamientos topográficos para el sector industrial."
            icon={Camera}
          />
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Equipamiento profesional</h3>
              <p className="text-gray-600 mb-4">
                Utilizamos la última tecnología en drones y equipos de grabación para garantizar resultados excepcionales:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Drones DJI Inspire 2, Mavic 3 Pro y Phantom 4 Pro
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Cámaras 4K/8K con grabación RAW
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Estabilizadores profesionales
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone mr-2"><path d="M22 11.08V12a10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Software especializado de edición y postproducción
                </li>
              </ul>
              <h3 className="text-2xl font-bold mt-8 mb-4">Nuestras ventajas</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Pilotos certificados con más de 1000 horas de vuelo
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Licencias AESA y seguros de responsabilidad civil
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Gestión de permisos para zonas restringidas
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Entrega de material en múltiples formatos
                </li>
              </ul>
            </div>
            <div className="bg-drone-dark hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc" 
                alt="Drone profesional" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
