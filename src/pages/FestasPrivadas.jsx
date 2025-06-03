import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import { privateImages } from '../assets/images';

const FestasPrivadas = () => {
  const eventTypes = [
    {
      title: 'Aniversários Exclusivos',
      description: 'Celebrações personalizadas que marcam datas especiais com elegância e sofisticação.',
      icon: '🎂',
      features: ['Decoração temática personalizada', 'Catering gourmet', 'Entretenimento exclusivo', 'Serviço de fotografia']
    },
    {
      title: 'Eventos Corporativos',
      description: 'Eventos empresariais que impressionam clientes e fortalecem relações de negócio.',
      icon: '🏢',
      features: ['Gestão completa do evento', 'Tecnologia audiovisual', 'Catering corporativo', 'Coordenação profissional']
    },
    {
      title: 'Celebrações Familiares',
      description: 'Momentos especiais em família celebrados com requinte e atenção aos detalhes.',
      icon: '👨‍👩‍👧‍👦',
      features: ['Ambiente intimista', 'Menu personalizado', 'Atividades para todas as idades', 'Serviço discreto']
    },
    {
      title: 'Festas Temáticas',
      description: 'Experiências únicas com conceitos criativos e execução impecável.',
      icon: '🎭',
      features: ['Conceito criativo exclusivo', 'Cenografia personalizada', 'Figurinos e caracterização', 'Animação temática']
    },
  ];

  const services = [
    {
      icon: '🎨',
      title: 'Conceito & Design',
      description: 'Desenvolvemos conceitos únicos e personalizados para cada celebração.'
    },
    {
      icon: '🏛️',
      title: 'Venues Exclusivos',
      description: 'Seleção dos melhores espaços privados e locais únicos na cidade.'
    },
    {
      icon: '🍾',
      title: 'Catering Premium',
      description: 'Menus exclusivos e serviço de catering de alta qualidade.'
    },
    {
      icon: '🎪',
      title: 'Entretenimento',
      description: 'Artistas, DJs e shows personalizados para cada tipo de evento.'
    },
    {
      icon: '🌟',
      title: 'Serviço VIP',
      description: 'Atendimento personalizado e discreto durante todo o evento.'
    },
    {
      icon: '📋',
      title: 'Gestão Completa',
      description: 'Coordenação de todos os fornecedores e detalhes logísticos.'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={privateImages[0].src}
            alt={privateImages[0].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4">
            Festas Privadas & <span className="text-gold">Eventos VIP</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter text-gray-200">
            Experiências exclusivas e personalizadas para cada ocasião especial
          </p>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-6">
              Tipos de <span className="text-gold">Eventos</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Especializamo-nos em criar eventos únicos para diferentes tipos de celebrações
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {eventTypes.map((eventType, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-5xl">{eventType.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-playfair font-bold text-black mb-4">
                      {eventType.title}
                    </h3>
                    <p className="text-gray-600 font-inter mb-6">
                      {eventType.description}
                    </p>
                    <ul className="space-y-2">
                      {eventType.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 font-inter">
                          <svg className="w-5 h-5 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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
              Oferecemos um serviço completo e integrado para eventos privados de excelência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-playfair font-bold text-black">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-inter">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black">
                Experiências <span className="text-gold">Personalizadas</span>
              </h2>
              <p className="text-lg text-gray-600 font-inter leading-relaxed">
                Cada evento é único e merece uma abordagem personalizada. Trabalhamos de perto 
                com os nossos clientes para entender a sua visão e transformá-la em realidade.
              </p>
              <p className="text-lg text-gray-600 font-inter leading-relaxed">
                Da conceção inicial à execução final, garantimos que cada detalhe seja 
                cuidadosamente planeado e executado com a máxima atenção à qualidade e exclusividade.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gold mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-inter text-gray-700">Planeamento personalizado</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gold mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-inter text-gray-700">Execução impecável</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gold mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-inter text-gray-700">Máxima privacidade e discrição</span>
                </div>
              </div>
              <Link to="/contacto" className="btn-primary inline-block">
                Solicitar Proposta
              </Link>
            </div>
            <div className="relative">
              <img
                src={privateImages[1].src}
                alt={privateImages[1].alt}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <Gallery images={privateImages} title="Galeria de Festas Privadas" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Pronto para criar o seu <span className="text-gold">evento exclusivo</span>?
          </h2>
          <p className="text-xl font-inter mb-8 max-w-2xl mx-auto text-gray-300">
            Contacte-nos para discutir as suas ideias e receber uma proposta personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="btn-primary text-lg px-10 py-4">
              Contactar Agora
            </Link>
            <a 
              href="mailto:fabio@fabioevents.com" 
              className="btn-secondary text-lg px-10 py-4"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FestasPrivadas; 