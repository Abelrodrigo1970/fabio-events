import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  const services = [
    {
      title: 'Casamentos Exclusivos',
      description: 'Planeamento completo para o seu dia especial, com atenção a cada detalhe.',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/casamentos',
    },
    {
      title: 'Sunset Parties',
      description: 'Experiências únicas ao pôr do sol em locais deslumbrantes.',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/sunsets',
    },
    {
      title: 'Festas Privadas',
      description: 'Eventos corporativos e celebrações personalizadas e exclusivas.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      link: '/festas-privadas',
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* About Section */}
      <section id="about-section" className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black">
                Sobre <span className="text-gold">Fábio Fernandes</span>
              </h2>
              <p className="text-lg text-gray-600 font-inter leading-relaxed">
                Com anos de experiência no setor de eventos de luxo, especializamo-nos em criar 
                momentos únicos e inesquecíveis. Cada evento é uma obra de arte, cuidadosamente 
                planeada e executada com a máxima atenção ao detalhe.
              </p>
              <p className="text-lg text-gray-600 font-inter leading-relaxed">
                Da conceção à execução, trabalhamos de perto com os nossos clientes para garantir 
                que cada evento reflita a sua visão e supere as suas expectativas.
              </p>
              <Link to="/contacto" className="btn-primary inline-block">
                Contactar-nos
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Elegant Event Setup"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-6">
              Os Nossos <span className="text-gold">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Especializamos-nos em eventos de luxo que marcam pela elegância e sofisticação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-playfair font-bold text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-inter">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-gold hover:text-gold-dark font-inter font-medium transition-colors"
                  >
                    Saber Mais
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Pronto para criar algo <span className="text-gold">extraordinário</span>?
          </h2>
          <p className="text-xl font-inter mb-8 max-w-2xl mx-auto text-gray-300">
            Conte-nos sobre o seu evento e vamos criar uma experiência única e inesquecível
          </p>
          <Link to="/contacto" className="btn-primary text-lg px-10 py-4">
            Falar Connosco
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 