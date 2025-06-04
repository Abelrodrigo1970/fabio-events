import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import { weddingImages, testimonialImages } from '../assets/images';

const Casamentos = () => {
  // Usar as imagens importadas do index.js
  const images = weddingImages;

  const services = [
    {
      icon: '💐',
      title: 'Planeamento Completo',
      description: 'Desde a conceção até à execução, cuidamos de todos os detalhes do vosso dia especial.'
    },
    {
      icon: '🏛️',
      title: 'Seleção de Espaços',
      description: 'Escolhemos os locais mais exclusivos e adequados ao vosso estilo e visão.'
    },
    {
      icon: '🎨',
      title: 'Decoração Personalizada',
      description: 'Criamos ambientes únicos que refletem a vossa personalidade e história de amor.'
    },
    {
      icon: '🍽️',
      title: 'Catering de Luxo',
      description: 'Menus exclusivos preparados pelos melhores chefs para impressionar os vossos convidados.'
    },
    {
      icon: '📸',
      title: 'Fotografia e Vídeo',
      description: 'Eternizamos os vossos momentos com os melhores profissionais de imagem.'
    },
    {
      icon: '🎵',
      title: 'Entretenimento',
      description: 'Música e animação cuidadosamente selecionadas para criar a atmosfera perfeita.'
    },
  ];

  const testimonials = [
    {
      name: 'Sofia & Miguel',
      text: 'O Fábio transformou o nosso sonho em realidade. Cada detalhe foi perfeito e superou todas as nossas expectativas. Recomendamos sem hesitação!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Abel & Regina',
      text: 'Profissionalismo exemplar e atenção aos detalhes incomparável. O nosso casamento foi verdadeiramente mágico graças ao trabalho excepcional da equipa.',
      image: testimonialImages.abel
    },
    {
      name: 'Mariana & João',
      text: 'Desde o primeiro encontro soubemos que estávamos em boas mãos. O resultado foi um casamento de sonho que ainda hoje comentam os nossos convidados.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={weddingImages[0].src}
            alt="Casamento Elegante"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4">
            Organização de <span className="text-gold">Casamentos Exclusivos</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter text-gray-200">
            Transformamos o vosso dia especial numa experiência inesquecível
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-6">
              Os Nossos <span className="text-gold">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Oferecemos um serviço completo e personalizado para tornar o vosso casamento único
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
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

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-6">
              Galeria de <span className="text-gold">Casamentos</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Veja alguns dos nossos casamentos mais memoráveis
            </p>
          </div>
          <Gallery images={images} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-6">
              O que dizem os <span className="text-gold">Nossos Clientes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-playfair font-bold text-lg text-black">
                      {testimonial.name}
                    </h4>
                    <div className="flex text-gold">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 font-inter italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Pronto para planear o <span className="text-gold">casamento dos vossos sonhos</span>?
          </h2>
          <p className="text-xl font-inter mb-8 max-w-2xl mx-auto text-gray-300">
            Contacte-nos para uma consulta personalizada e comecemos a planear o vosso dia especial
          </p>
          <Link to="/contacto" className="btn-primary text-lg px-10 py-4">
            Agendar Reunião
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Casamentos; 