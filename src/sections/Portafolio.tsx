import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';
import PortfolioItem from '@/components/PortfolioItem';

export default function Portafolio() {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestros mejores trabajos de grabación aérea profesional
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PortfolioItem 
            title="Festival de música al aire libre"
            category="Eventos"
            image="https://images.unsplash.com/photo-1472396961693-142e6e269027"
            videoUrl="#"
          />
          <PortfolioItem 
            title="Documental 'Naturaleza Salvaje'"
            category="Cine"
            image="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
            videoUrl="#"
          />
          <PortfolioItem 
            title="Campaña publicitaria - Tourism Spain"
            category="Publicidad"
            image="https://images.unsplash.com/photo-1500673922987-e212871fec22"
            videoUrl="#"
          />
          <PortfolioItem 
            title="Paisajes aéreos - Sierra Nevada"
            category="Fotografía"
            image="https://images.unsplash.com/photo-1501854140801-50d01698950b"
            videoUrl="#"
          />
          <PortfolioItem 
            title="Boda en la playa - Mediterráneo"
            category="Eventos"
            image="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
            videoUrl="#"
          />
          <PortfolioItem 
            title="Serie 'Arquitectura Moderna'"
            category="Televisión"
            image="https://images.unsplash.com/photo-1527576539890-dfa815648363"
            videoUrl="#"
          />
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Videos destacados</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <Play size={48} className="text-white opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <img 
                src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a" 
                alt="Video promocional" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <Play size={48} className="text-white opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                alt="Reel corporativo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-drone hover:bg-drone/90">
            Ver todo el portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};
