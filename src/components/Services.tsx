import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Cog, Wrench, Truck, Phone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Peças de reposição",
      description: "Amplo estoque de peças originais e compatíveis para equipamentos de construção de diversas marcas.",
      features: ["Peças originais", "Compatíveis certificadas", "Entrega rápida", "Garantia de qualidade"]
    },
    {
      icon: Cog,
      title: "Motores",
      description: "Venda, manutenção e reparo de motores para equipamentos pesados de construção.",
      features: ["Motores novos", "Recondicionamento", "Manutenção preventiva", "Diagnóstico técnico"]
    },
    {
      icon: Wrench,
      title: "Transmissão",
      description: "Serviços especializados em sistemas de transmissão, incluindo reparos e substituições.",
      features: ["Reparos completos", "Substituição de componentes", "Ajustes e regulagens", "Testes de qualidade"]
    },
    {
      icon: Truck,
      title: "Sistema hidráulico",
      description: "Manutenção e reparo de sistemas hidráulicos para máquinas de construção.",
      features: ["Bombas hidráulicas", "Cilindros", "Válvulas", "Filtros e fluidos"]
    }
  ];

  const additionalServices = [
    "Serviços especializados em manutenção",
    "Reparos de equipamentos de construção",
    "Diagnóstico técnico avançado",
    "Consultoria em manutenção preventiva",
    "Suporte técnico especializado"
  ];

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas para equipamentos de construção, desde peças de reposição 
            até serviços especializados de manutenção e reparo.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-white shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Serviços especializados em manutenção
              </h3>
              <ul className="space-y-3 mb-8">
                {additionalServices.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-blue-100">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="btn-accent px-8 py-4 rounded-full"
                >
                  <a href="https://wa.me/5566999883244">
                    <Phone className="h-5 w-5 mr-2" />
                    Solicitar orçamento
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="btn-secondary px-8 py-4 rounded-full"
                >
                  <a href="#contato">
                    Fale conosco
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-xl font-bold mb-4">Horário de atendimento</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-200">Segunda a sexta:</span>
                    <span className="font-semibold">7h às 17:30h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Telefone:</span>
                    <span className="font-semibold">(66) 99988-3244</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Email:</span>
                    <span className="font-semibold">ronilvo@hotmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;