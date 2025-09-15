import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="pt-16 md:pt-20 min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-12">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                RLima Serviços
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-100 font-medium">
                Empresa especializada em peças de reposição, motores, transmissão e hidráulico para equipamentos de construção, oferecendo manutenção e reparos profissionais com ética e dedicação à satisfação dos clientes.
              </h2>
              <p className="text-lg text-blue-200 font-semibold">
                RLima solução para equipamentos de construção
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-accent" />
                  <div>
                    <p className="text-sm text-blue-200">Telefone</p>
                    <p className="font-semibold">(66) 99988-3244</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-accent" />
                  <div>
                    <p className="text-sm text-blue-200">Horário</p>
                    <p className="font-semibold text-sm">Seg-Sex 7h às 17:30h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                variant="accent"
                size="lg"
                className="px-8 py-4 text-lg rounded-full"
              >
                <a href="https://wa.me/5566999883244">
                  Solicitar orçamento
                </a>
              </Button>
              <Button 
                asChild
                variant="hero"
                size="lg"
                className="px-8 py-4 text-lg rounded-full"
              >
                <a href="#servicos">
                  Nossos serviços
                </a>
              </Button>
            </div>
          </div>

          {/* Image/Logo Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-elegant">
                <img 
                  src="/logo.png" 
                  alt="RLima Serviços - Especialista em equipamentos de construção" 
                  className="w-full max-w-sm h-auto"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent rounded-full p-4 shadow-button">
                <div className="w-6 h-6 bg-accent-foreground rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/20 rounded-full p-3">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;