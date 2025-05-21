
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <a href="#home" className="flex items-center">
            <span className={`text-2xl font-bold font-poppins ${scrolled ? 'text-drone-dark' : 'text-white'}`}>Skynova</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <a href="#home" className={`${scrolled ? 'text-drone-dark' : 'text-white'} hover:text-drone transition-colors`}>Inicio</a>
          <a href="#servicios" className={`${scrolled ? 'text-drone-dark' : 'text-white'} hover:text-drone transition-colors`}>Servicios</a>
          <a href="#portfolio" className={`${scrolled ? 'text-drone-dark' : 'text-white'} hover:text-drone transition-colors`}>Portfolio</a>
          <a href="#nosotros" className={`${scrolled ? 'text-drone-dark' : 'text-white'} hover:text-drone transition-colors`}>Nosotros</a>
          <a href="#clientes" className={`${scrolled ? 'text-drone-dark' : 'text-white'} hover:text-drone transition-colors`}>Clientes</a>
          <a href="#contacto" className={`${scrolled ? 'text-drone-dark' : 'text-white'} hover:text-drone transition-colors`}>Contacto</a>
        </div>

        <div className="hidden md:block">
          <Button variant="default" className="bg-drone hover:bg-drone/90">
            Cotiza tu proyecto
          </Button>
        </div>
        
        {/* Mobile Navigation Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md ${scrolled ? 'text-drone-dark' : 'text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-drone-dark hover:text-drone" onClick={() => setIsOpen(false)}>Inicio</a>
            <a href="#servicios" className="block px-3 py-2 text-base font-medium text-drone-dark hover:text-drone" onClick={() => setIsOpen(false)}>Servicios</a>
            <a href="#portfolio" className="block px-3 py-2 text-base font-medium text-drone-dark hover:text-drone" onClick={() => setIsOpen(false)}>Portfolio</a>
            <a href="#nosotros" className="block px-3 py-2 text-base font-medium text-drone-dark hover:text-drone" onClick={() => setIsOpen(false)}>Nosotros</a>
            <a href="#clientes" className="block px-3 py-2 text-base font-medium text-drone-dark hover:text-drone" onClick={() => setIsOpen(false)}>Clientes</a>
            <a href="#contacto" className="block px-3 py-2 text-base font-medium text-drone-dark hover:text-drone" onClick={() => setIsOpen(false)}>Contacto</a>
            <div className="px-3 py-2">
              <Button className="w-full bg-drone hover:bg-drone/90" onClick={() => setIsOpen(false)}>
                Cotiza tu proyecto
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
