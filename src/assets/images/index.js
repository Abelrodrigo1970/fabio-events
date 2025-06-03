// Centralização de imports de imagens
// Este arquivo facilita o gerenciamento e importação de imagens em todo o projeto

// ===== IMAGENS COMUNS =====
// Logo, ícones e elementos reutilizáveis
export { default as reactLogo } from './common/react.svg';

// ===== IMAGENS HERO =====
// Imagens principais da página inicial
// export { default as heroBanner } from './hero/hero-banner.jpg';
// export { default as heroBackground } from './hero/hero-background.jpg';

// ===== IMAGENS DE CASAMENTOS =====
// Galeria de casamentos e cerimônias
import wedding1 from './weddings/wedding1.jpg';
import wedding2 from './weddings/wedding2.jpg';
import wedding3 from './weddings/wedding3.jpg';

// ===== IMAGENS DE SUNSETS =====
// Eventos ao pôr do sol
import sunset1 from './sunsets/sunset1.jpeg';
import sunset2 from './sunsets/sunset2.jpg';
import sunset3 from './sunsets/sunset3.jpg';
 // export { default as sunset3 } from './sunsets/sunset-3.jpg';
// ===== IMAGENS DE FESTAS PRIVADAS =====
// Eventos privados e exclusivos
import private1 from './private/private1.jpg';
import private2 from './private/private2.jpg';
import private3 from './private/private3.jpg';

// ===== ARRAYS DE IMAGENS PARA GALERIAS =====
export const weddingImages = [
  {
    src: wedding1,
    alt: 'Casamento Elegante',
    caption: 'Cerimónia ao ar livre com decoração clássica'
  },
  {
    src: wedding2,
    alt: 'Decoração de Casamento',
    caption: 'Mesa dos noivos com detalhes dourados'
  },
  {
    src: wedding3,
    alt: 'Bouquet de Noiva',
    caption: 'Bouquet exclusivo com flores de época'
  }
];

export const sunsetImages = [
  {
    src: sunset1,
    alt: 'Sunset Party',
    caption: 'Festa ao pôr do sol com vista deslumbrante'
  },
  {
    src: sunset2,
    alt: 'Sunset Beach',
    caption: 'Celebração exclusiva na praia ao pôr do sol'
  },
  {
    src: sunset3,
    alt: 'Sunset Rooftop',
    caption: 'Evento VIP em rooftop com vista panorâmica'
  }
];

export const privateImages = [
  {
    src: private1,
    alt: 'Festa Privada',
    caption: 'Evento exclusivo em local privado'
  },
  {
    src: private2,
    alt: 'Celebração VIP',
    caption: 'Ambiente sofisticado para celebrações especiais'
  },
  {
    src: private3,
    alt: 'Evento Corporativo',
    caption: 'Evento empresarial com serviço premium'
  }
];

// ===== FUNÇÃO HELPER PARA LAZY LOADING =====
export const getImagePath = (category, imageName) => {
  return new URL(`./images/${category}/${imageName}`, import.meta.url).href;
};

// ===== PLACEHOLDER IMAGES =====
// URLs de imagens temporárias para desenvolvimento
export const placeholders = {
  hero: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  wedding: wedding1,
  sunset: sunset1,
  private: private1
}; 