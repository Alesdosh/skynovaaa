import React from 'react';

const PieDePagina = () => {
  return (
    <footer className="bg-drone-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-bold mb-4">Skynova</h4>
            <p className="text-gray-300 mb-4">
              Especialistas en grabación aérea profesional para cine, televisión, eventos y publicidad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Vimeo</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-white">Servicios</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white">Portfolio</a></li>
              <li><a href="#nosotros" className="text-gray-300 hover:text-white">Sobre nosotros</a></li>
              <li><a href="#clientes" className="text-gray-300 hover:text-white">Clientes</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Grabación para eventos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Cine y televisión</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Publicidad y marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Fotografía aérea</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Maquetas 3D y topografía</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Política de privacidad</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Aviso legal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Cookies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Términos y condiciones</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">&copy; {new Date().getFullYear()} Skynova. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <img src="https://via.placeholder.com/80x30?text=AESA" alt="AESA" className="h-8" />
              <img src="https://via.placeholder.com/80x30?text=SEGURO" alt="Seguro" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PieDePagina;
