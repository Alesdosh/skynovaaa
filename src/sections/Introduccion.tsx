import React from 'react';

export default function Introduccion() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Skynova: Tecnología aérea al servicio de tu creatividad</h2>
          <p className="text-gray-600 text-lg mb-8">
            Somos un equipo de profesionales especializados en grabación aérea con más de 10 años de experiencia. Utilizamos la última tecnología en drones para capturar imágenes espectaculares desde perspectivas únicas, garantizando resultados excepcionales para cada proyecto.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <span className="font-semibold">Calidad Premium</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone"><circle cx="12" cy="12" r="10"></circle><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"></path></svg>
              </div>
              <span className="font-semibold">Innovación Constante</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </div>
              <span className="font-semibold">Personalización Total</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
