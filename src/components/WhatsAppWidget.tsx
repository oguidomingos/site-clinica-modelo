import { MessageCircle } from 'lucide-react'
import { CLINIC } from '../data/clinic'

export default function WhatsAppWidget() {
  return (
    <a
      href={CLINIC.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 no-underline"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
