import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Suprir a necessidade de peças para máquinas de construção com qualidade e eficiência."
    },
    {
      icon: Users,
      title: "Valores",
      description: "Pautados em ética e satisfação de clientes e parceiros em todas as nossas relações comerciais."
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Comprometimento com peças de alta qualidade e serviços especializados em manutenção."
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Atendimento rápido e eficiente para minimizar o tempo de parada dos seus equipamentos."
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre a RLima Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empresa criada com a missão de suprir a necessidade de peças para máquinas de construção, 
            com valores pautados em ética e satisfação de clientes e parceiros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Experiência e tradição em equipamentos de construção
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A RLima Serviços é uma empresa especializada que atende as demandas do setor de construção 
              com peças de reposição, motores, transmissão e sistemas hidráulicos. Nossa experiência no 
              mercado nos permite oferecer soluções completas para manutenção e reparo de equipamentos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Trabalhamos com compromisso e dedicação para garantir que nossos clientes tenham sempre 
              as melhores peças e serviços, mantendo seus equipamentos funcionando com máxima eficiência 
              e confiabilidade.
            </p>
            <div className="bg-primary/10 rounded-xl p-6 border-l-4 border-primary">
              <p className="text-primary font-semibold text-lg">
                "RLima solução para equipamentos de construção"
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Nossos diferenciais</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Peças de alta qualidade</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Atendimento personalizado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Serviços especializados</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Compromisso com prazos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;