import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/logo.png" 
                  alt="RLima Serviços" 
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-lg font-bold">RLima Serviços</h3>
                  <p className="text-sm text-blue-200">Soluções em equipamentos</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                Empresa especializada em peças de reposição, motores, transmissão e 
                hidráulico para equipamentos de construção.
              </p>
              <p className="text-accent font-semibold">
                "RLima solução para equipamentos de construção"
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Nossos serviços</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>• Peças de reposição</li>
                <li>• Motores e transmissão</li>
                <li>• Sistema hidráulico</li>
                <li>• Manutenção especializada</li>
                <li>• Reparos de equipamentos</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Contato</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-accent" />
                  <a href="tel:+5566999883244" className="text-blue-100 hover:text-white transition-colors">
                    (66) 99988-3244
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href="mailto:ronilvo@hotmail.com" className="text-blue-100 hover:text-white transition-colors">
                    ronilvo@hotmail.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-accent mt-0.5" />
                  <span className="text-blue-100">Rua Varese, 384</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Horário de funcionamento</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-accent" />
                  <div>
                    <p className="text-blue-100">Segunda a sexta</p>
                    <p className="text-white font-semibold">7h às 17:30h</p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                  <p className="text-xs text-blue-200 mb-1">CNPJ</p>
                  <p className="font-mono text-sm">627.034.631-20</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-200">
              © 2024 RLima Serviços. Todos os direitos reservados.
            </div>
            <div className="text-sm text-blue-200">
              Desenvolvido com ❤️ para equipamentos de construção
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;