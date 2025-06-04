import { Link } from 'react-router-dom';
import { placeholders } from '../assets/images';

const Hero = () => {
  const scrollToContent = () => {
    const nextSection = document.querySelector('#about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-black/70 via-black/50 to-black/70">
          <img
            src={placeholders.hero}
            alt="Elegant Event"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6">
          <span className="text-gold">Fábio</span> Fernandes
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-inter mb-8 text-gray-200">
          Agenciamento VIP de Eventos
        </p>
        <p className="text-lg md:text-xl font-inter mb-12 max-w-2xl mx-auto text-gray-300">
          Transformamos os seus sonhos em realidade através de eventos únicos e experiências inesquecíveis
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contacto"
            className="btn-primary text-lg px-10 py-4"
          >
            Saber Mais
          </Link>
          <Link
            to="/casamentos"
            className="btn-secondary text-lg px-10 py-4"
          >
            Ver Serviços
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToContent}
      >
        <svg className="w-6 h-6 text-gold hover:text-gold-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 