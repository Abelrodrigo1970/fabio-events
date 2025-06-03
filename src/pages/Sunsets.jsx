import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import { sunsetImages } from '../assets/images';

const Sunsets = () => {
  // Usar as imagens importadas do index.js
  const images = sunsetImages;

  const features = [
    {
      icon: '🌅',
      title: 'Locais Únicos',
      description: 'Praias privadas, rooftops exclusivos e iates de luxo com vistas deslumbrantes do pôr do sol.'
    },
    {
      icon: '🎧',
      title: 'DJ & Música',
      description: 'DJs renomados com setlists personalizadas para criar a atmosfera perfeita.'
    },
    {
      icon: '🍸',
      title: 'Bar Premium',
      description: 'Cocktails exclusivos e bebidas premium servidas por bartenders profissionais.'
    },
    {
      icon: '🛥️',
      title: 'Experiências Náuticas',
      description: 'Festas em iates e barcos de luxo para uma experiência verdadeiramente exclusiva.'
    },
    {
      icon: '🎪',
      title: 'Eventos Temáticos',
      description: 'Conceitos únicos e temáticas personalizadas para cada celebração.'
    },
    {
      icon: '🌟',
      title: 'Serviço VIP',
      description: 'Atendimento personalizado e exclusivo para você e seus convidados.'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={sunsetImages[0].src}
            alt={sunsetImages[0].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-orange-900/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            <span className="text-gold">Sunset</span> Parties Privadas
          </h1>
          <p className="text-xl md:text-2xl font-inter mb-8 text-gray-200">
            Celebre momentos únicos com o pôr do sol como cenário
          </p>
          <p className="text-lg md:text-xl font-inter mb-12 max-w-3xl mx-auto text-gray-300">
            Criamos experiências inesquecíveis ao pôr do sol, combinando locais deslumbrantes, 
            música exclusiva e serviço de excelência para celebrações verdadeiramente especiais
          </p>
          <Link to="/contacto" className="btn-primary text-lg px-10 py-4">
            Agendar o Seu Sunset
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-6">
              Experiências <span className="text-gold">Sunset VIP</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Cada sunset party é uma experiência única, cuidadosamente planeada para criar momentos inesquecíveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4 p-6 hover:bg-gray-50 rounded-lg transition-colors duration-300">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-playfair font-bold text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-inter">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Types Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-6">
              Tipos de <span className="text-gold">Experiências</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={sunsetImages[0].src}
                alt={sunsetImages[0].alt}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-black mb-4">
                  Sunset Beach
                </h3>
                <p className="text-gray-600 font-inter mb-4">
                  Festas exclusivas na praia com setup completo, DJ, bar e catering gourmet 
                  enquanto o sol se põe no horizonte.
                </p>
                <ul className="text-gray-600 font-inter space-y-2">
                  <li>• Praias privadas selecionadas</li>
                  <li>• Setup de palco e som profissional</li>
                  <li>• Bar e catering personalizado</li>
                  <li>• Iluminação ambiente</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={sunsetImages[1].src}
                alt={sunsetImages[1].alt}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-black mb-4">
                  Rooftop Exclusive
                </h3>
                <p className="text-gray-600 font-inter mb-4">
                  Eventos em rooftops com vista panorâmica da cidade, ambiente sofisticado 
                  e serviço de alta qualidade.
                </p>
                <ul className="text-gray-600 font-inter space-y-2">
                  <li>• Rooftops com vista privilegiada</li>
                  <li>• Decoração elegante e moderna</li>
                  <li>• Cocktails de autor</li>
                  <li>• Ambiente lounge VIP</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={sunsetImages[2].src}
                alt={sunsetImages[2].alt}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-black mb-4">
                  Yacht Experience
                </h3>
                <p className="text-gray-600 font-inter mb-4">
                  A experiência mais exclusiva - festas privadas em iates de luxo 
                  navegando durante o pôr do sol.
                </p>
                <ul className="text-gray-600 font-inter space-y-2">
                  <li>• Iates de luxo equipados</li>
                  <li>• Rota personalizada</li>
                  <li>• Chef e tripulação exclusiva</li>
                  <li>• Máxima privacidade</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-6">
              Galeria de <span className="text-gold">Sunsets</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Veja alguns dos nossos eventos ao pôr do sol
            </p>
          </div>
          <Gallery images={images} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-900 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-max relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Pronto para o seu <span className="text-gold">Sunset Exclusivo</span>?
          </h2>
          <p className="text-xl font-inter mb-8 max-w-2xl mx-auto text-gray-200">
            Contacte-nos e comecemos a planear a sua celebração ao pôr do sol
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="btn-primary text-lg px-10 py-4">
              Agendar Sunset
            </Link>
            <a 
              href="tel:+351912345678" 
              className="btn-secondary text-lg px-10 py-4"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sunsets; 