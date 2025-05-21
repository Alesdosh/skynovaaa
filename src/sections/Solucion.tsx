import React from 'react';
import { Button } from "@/components/ui/button";

export default function Solucion() {
  return (
    <section className="section-padding bg-drone-dark text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Nuestra solución para productoras</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="m9 16 2 2 4-4"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Reserva en línea</h3>
              <p className="text-gray-300">Sistema de reserva fácil y rápido para productoras con calendario en tiempo real</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Planeación detallada</h3>
              <p className="text-gray-300">Asesoría técnica y creativa para determinar los mejores ángulos y tomas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Ejecución profesional</h3>
              <p className="text-gray-300">Grabación con equipos de última generación y pilotos expertos</p>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">¿Por qué nos eligen las productoras?</h3>
            <p className="mb-6">
              Entendemos las necesidades específicas del sector audiovisual profesional. Nuestro enfoque está diseñado para resolver los desafíos comunes que enfrentan las productoras al intentar capturar tomas aéreas dinámicas y de alta calidad.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone mt-1 mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <p>Equipo técnico especializado en cine</p>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone mt-1 mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <p>Entrega de material en formato RAW profesional</p>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone mt-1 mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <p>Integración con equipos de producción existentes</p>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone mt-1 mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <p>Flexibilidad para adaptarse a cambios de última hora</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button asChild className="bg-drone hover:bg-drone/90 text-white">
                <a href="#contacto">Contacta con nuestro equipo especializado</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
