import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { CLINIC } from '../data/clinic'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white text-sm font-extrabold">
                JP
              </div>
              <span className="font-bold text-lg">Dr. José Pedro</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Especialista em ortopedia, medicina da dor e reabilitação. Mais de {CLINIC.experience} anos de experiência cuidando da sua saúde.
            </p>
            <p className="text-white/40 text-xs mt-4">{CLINIC.crm}</p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Links Rápidos
            </h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-white/60 hover:text-white transition-colors text-sm no-underline">Início</Link>
              <Link to="/sobre" className="text-white/60 hover:text-white transition-colors text-sm no-underline">Sobre</Link>
              <Link to="/servicos" className="text-white/60 hover:text-white transition-colors text-sm no-underline">Serviços</Link>
              <Link to="/depoimentos" className="text-white/60 hover:text-white transition-colors text-sm no-underline">Depoimentos</Link>
              <Link to="/contato" className="text-white/60 hover:text-white transition-colors text-sm no-underline">Contato</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Contato
            </h3>
            <div className="flex flex-col gap-3">
              <a href={`tel:${CLINIC.phone}`} className="flex items-start gap-2 text-white/60 hover:text-white transition-colors text-sm no-underline">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                {CLINIC.phone}
              </a>
              <a href={`mailto:${CLINIC.email}`} className="flex items-start gap-2 text-white/60 hover:text-white transition-colors text-sm no-underline">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                {CLINIC.email}
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{CLINIC.address.full}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Horários
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p>{CLINIC.hours.weekdays}</p>
                  <p>{CLINIC.hours.saturday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} {CLINIC.fullName}. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">
            Este site segue as diretrizes do CFM. Não substitui consulta médica.
          </p>
        </div>
      </div>
    </footer>
  )
}
