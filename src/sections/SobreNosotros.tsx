import React from 'react';
import TeamMember from '@/components/TeamMember';

const SobreNosotros = () => {
  return (
    <section id="nosotros" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre nosotros</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un equipo de profesionales apasionados por la grabación aérea
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Nuestra historia</h3>
            <p className="text-gray-600 mb-4">
              Fundada en 2025 por un grupo de estudiantes, Skynova nació con la misión de revolucionar la grabación aérea en Mexico. Lo que comenzó como un pequeño proyecto entre amigos apasionados por la tecnología y el audiovisual, se ha convertido en una empresa líder en el sector.
            </p>
            <p className="text-gray-600 mb-4">
              Hemos trabajado con las principales productoras del país, colaborado en eventos internacionales y desarrollado técnicas innovadoras para conseguir tomas aéreas nunca antes vistas.
            </p>
            <p className="text-gray-600">
              Nuestro compromiso con la calidad, la seguridad y la innovación nos ha permitido crecer y consolidarnos como referentes en la grabación aérea profesional.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1496307653780-42ee777d4833" 
              alt="Nuestra historia" 
              className="rounded-lg h-full object-cover"
            />
            <div className="grid grid-rows-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2" 
                alt="Proyecto en la ciudad" 
                className="rounded-lg h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e" 
                alt="Proyecto en montaña" 
                className="rounded-lg h-full object-cover"
              />
            </div>
          </div>
        </div>

  

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Certificaciones y permisos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h4 className="font-semibold mb-1">Licencia AESA</h4>
              <p className="text-sm text-gray-600">Operador autorizado de drones en España</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone"><path d="M8.43 12h.01"></path><path d="M15.56 12h.01"></path><path d="M12 12v.01"></path><path d="M17.49 11.13c-1.05-6.14-6.85-6.14-7.94-1.05"></path><path d="M8.48 11.3c-1.71 4.28.73 8.54 3.47 9.87"></path><path d="M15.53 11.28c1.71 4.28-.73 8.54-3.47 9.87"></path><path d="M8.96 10.55c2.4-2.3 10.34.25 5.64-8.3C9.11-.08 4.5 5.09 4.5 8.44a3.22 3.22 0 0 0 4.46 2.11Z"></path><path d="M20.12 6.73c-1.54 2.36-4.85 1.87-4.2-1.18.37-1.75-1.9-1.37-2.28.12-1.41 5.3 6.34 5.3 6.48 1.06Z"></path></svg>
              </div>
              <h4 className="font-semibold mb-1">Seguro RC</h4>
              <p className="text-sm text-gray-600">Cobertura completa para operaciones</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone"><path d="m9 9 5 12 1.8-5.2L21 14Z"></path><path d="M7.2 2.2 8 5.1"></path><path d="m5.1 8-2.9-.8"></path><path d="M14 4.1 12 6"></path><path d="m6 12-1.9 2"></path></svg>
              </div>
              <h4 className="font-semibold mb-1">Pilotos Certificados</h4>
              <p className="text-sm text-gray-600">Formación oficial y actualizada</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-drone"><path d="M2 12h10"></path><path d="M9 4v16"></path><path d="m3 9 3 3-3 3"></path><path d="M14 8V6c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v12c0 1.1-.9 2-2 2h-4a2 2 0 0 1-2-2v-2"></path></svg>
              </div>
              <h4 className="font-semibold mb-1">Permisos Especiales</h4>
              <p className="text-sm text-gray-600">Para vuelos en zonas restringidas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
