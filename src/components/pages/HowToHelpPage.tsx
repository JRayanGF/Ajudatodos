import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Heart, DollarSign, Users, Home, Package, Calendar, Share2, PawPrint } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function HowToHelpPage() {
  const helpOptions = [
    {
      id: 1,
      icon: <Heart className="w-8 h-8" />,
      title: "Adote um Animal",
      description: "Dê um lar amoroso para um cão ou gato que precisa de você. A adoção é a forma mais direta de salvar uma vida.",
      color: "bg-pink-500",
      action: "Ver Animais"
    },
    {
      id: 2,
      icon: <DollarSign className="w-8 h-8" />,
      title: "Faça uma Doação",
      description: "Contribua financeiramente para alimentação, tratamento médico e manutenção do abrigo.",
      color: "bg-green-500",
      action: "Doar Agora"
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8" />,
      title: "Seja Voluntário",
      description: "Dedique seu tempo ajudando nos cuidados diários, passeios ou eventos de adoção.",
      color: "bg-blue-500",
      action: "Voluntariar-se"
    },
    {
      id: 4,
      icon: <Home className="w-8 h-8" />,
      title: "Lar Temporário",
      description: "Acolha temporariamente um animal enquanto ele aguarda adoção definitiva.",
      color: "bg-purple-500",
      action: "Saiba Mais"
    },
    {
      id: 5,
      icon: <Package className="w-8 h-8" />,
      title: "Doe Suprimentos",
      description: "Ração, remédios, cobertores, brinquedos e outros itens são sempre bem-vindos.",
      color: "bg-orange-500",
      action: "Ver Lista"
    },
    {
      id: 6,
      icon: <Share2 className="w-8 h-8" />,
      title: "Divulgue",
      description: "Compartilhe nas redes sociais para aumentar o alcance e encontrar mais adotantes.",
      color: "bg-cyan-500",
      action: "Compartilhar"
    }
  ];

  const donationPlans = [
    {
      id: 1,
      name: "Amigo",
      amount: "R$ 25/mês",
      description: "Ajuda com alimentação básica",
      benefits: [
        "Certificado de doador",
        "Atualizações mensais",
        "Agradecimento em redes sociais"
      ]
    },
    {
      id: 2,
      name: "Protetor",
      amount: "R$ 50/mês",
      description: "Cobre vacinas e vermífugos",
      benefits: [
        "Todos os benefícios anteriores",
        "Visita guiada ao abrigo",
        "Foto personalizada de um pet",
        "Nome no mural de doadores"
      ],
      featured: true
    },
    {
      id: 3,
      name: "Herói",
      amount: "R$ 100/mês",
      description: "Tratamentos médicos complexos",
      benefits: [
        "Todos os benefícios anteriores",
        "Relatório trimestral exclusivo",
        "Apadrinhamento de um animal",
        "Participação em eventos VIP"
      ]
    }
  ];

  const handleAction = (action: string) => {
    toast.success(`Redirecionando para: ${action}`);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <PawPrint className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6">Como Você Pode Ajudar?</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Existem diversas formas de fazer a diferença na vida dos animais abandonados. 
            Escolha a maneira que mais combina com você!
          </p>
        </div>

        {/* Help Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {helpOptions.map((option) => (
            <Card key={option.id} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className={`${option.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4`}>
                  {option.icon}
                </div>
                <CardTitle>{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => handleAction(option.action)}
                >
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Donation Plans */}
        <div className="bg-gradient-to-b from-gray-50 to-white rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Planos de Doação Mensal</h2>
            <p className="text-gray-600 text-lg">
              Torne-se um doador recorrente e ajude continuamente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {donationPlans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`${plan.featured ? 'border-2 border-green-500 shadow-xl scale-105' : ''}`}
              >
                <CardHeader>
                  {plan.featured && (
                    <div className="bg-green-500 text-white text-sm px-3 py-1 rounded-full w-fit mb-2">
                      Mais Popular
                    </div>
                  )}
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="text-3xl text-green-600 my-4">{plan.amount}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Heart className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.featured ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-800 hover:bg-gray-900'} text-white`}
                    onClick={() => handleAction(`Plano ${plan.name}`)}
                  >
                    Escolher Plano
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-green-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Seu Impacto em Números</h2>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="text-4xl mb-2">500+</div>
                  <p>Animais resgatados em 2024</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="text-4xl mb-2">350+</div>
                  <p>Adoções realizadas</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="text-4xl mb-2">1.200+</div>
                  <p>Doadores ativos</p>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1708515902649-35826ccd88c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBoZWxwaW5nJTIwYW5pbWFsc3xlbnwxfHx8fDE3NjExNzAxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Voluntário ajudando animais"
                className="rounded-2xl shadow-2xl w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl md:text-4xl mb-6">Pronto para Fazer a Diferença?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Cada ação conta. Escolha como você quer ajudar e comece hoje mesmo a transformar vidas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="bg-green-500 hover:bg-green-600 text-white px-8"
              onClick={() => handleAction('Doar Agora')}
            >
              Fazer Doação Única
            </Button>
            <Button 
              variant="outline"
              className="px-8"
              onClick={() => handleAction('Cadastro Voluntário')}
            >
              Cadastrar como Voluntário
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
