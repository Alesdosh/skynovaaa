
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-overlay"></div>
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1501854140801-50d01698950b"
      >
        <source src="https://player.vimeo.com/external/517090083.hd.mp4?s=9cb82d1e42b2518f222729d453e50a43c8b9676d&profile_id=175" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      <div className="relative container-custom text-center text-white z-10">
        <h1 className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Capturamos perspectivas únicas para historias extraordinarias
        </h1>
        <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Grabaciones aéreas profesionales para cine, televisión, eventos y publicidad
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button asChild size="lg" className="bg-drone hover:bg-drone/90 text-white">
            <a href="#contacto">Cotiza tu proyecto</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white hover:bg-white/20 text-white">
            <a href="#portfolio">Ver nuestro trabajo</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
