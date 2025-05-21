import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/sections/Hero';
import Introduccion from '@/sections/Introduccion';
import ResumenServicios from '@/sections/ResumenServicios';
import Servicios from '@/sections/Servicios';
import Portafolio from '@/sections/Portafolio';
import SobreNosotros from '@/sections/SobreNosotros';
import Clientes from '@/sections/Clientes';
import FAQ from '@/sections/FAQ';
import Contacto from '@/sections/Contacto';
import Solucion from '@/sections/Solucion';
import PieDePagina from '@/sections/PieDePagina';


const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Introduccion />
      <ResumenServicios />
      <Servicios />
      <Portafolio />
      <SobreNosotros />
      <Clientes />
      <FAQ />
      <Contacto />
      <Solucion />
      <PieDePagina />
    </div>
  );
};

export default Index;
