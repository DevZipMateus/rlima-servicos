import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(66) 99988-3244",
      link: "tel:+5566999883244"
    },
    {
      icon: Mail,
      title: "Email",
      value: "ronilvo@hotmail.com",
      link: "mailto:ronilvo@hotmail.com"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Rua Varese, 384",
      link: "#"
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg-Sex: 7h às 17:30h",
      link: "#"
    }
  ];

  return (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades. Entre em contato conosco 
            para orçamentos, dúvidas ou informações sobre nossos produtos e serviços.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        {info.link && info.link !== "#" ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Company Information */}
            <Card className="bg-gradient-primary text-white border-0">
              <CardHeader>
                <CardTitle className="text-xl">RLima Serviços</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-blue-100">
                    <strong>CNPJ:</strong> 627.034.631-20
                  </p>
                  <p className="text-blue-100">
                    <strong>Responsável:</strong> RLima Serviços
                  </p>
                  <p className="text-blue-100">
                    <strong>Domínio:</strong> rlimacomercioeservicos.com.br
                  </p>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-lg font-semibold text-accent">
                      "RLima solução para equipamentos de construção"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <Card className="bg-white border-0 shadow-elegant">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Solicite seu orçamento
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground">
                  Entre em contato conosco pelo WhatsApp para receber atendimento personalizado 
                  e orçamentos rápidos para suas necessidades de peças e serviços.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    asChild
                    size="lg"
                    className="btn-accent w-full py-4 text-lg rounded-full"
                  >
                    <a href="https://wa.me/5566999883244">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      WhatsApp: (66) 99988-3244
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full py-4 text-lg rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href="mailto:ronilvo@hotmail.com">
                      <Mail className="h-5 w-5 mr-2" />
                      Enviar email
                    </a>
                  </Button>
                </div>

                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-2">Atendimento especializado</h4>
                  <p className="text-sm text-muted-foreground">
                    Nossa equipe está pronta para auxiliar na escolha das melhores 
                    peças e serviços para seus equipamentos de construção.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-white border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Horário de funcionamento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Segunda a sexta:</span>
                    <span className="font-semibold text-foreground">7h às 17:30h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábado e domingo:</span>
                    <span className="text-red-500 font-semibold">Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;