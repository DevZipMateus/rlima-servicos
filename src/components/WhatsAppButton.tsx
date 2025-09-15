import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
      aria-label="Falar no WhatsApp"
    >
      <a 
        href="https://wa.me/5566999883244"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </Button>
  );
};

export default WhatsAppButton;