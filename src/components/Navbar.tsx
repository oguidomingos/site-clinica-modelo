import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { CLINIC } from '../data/clinic'

const NAV_LINKS = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/depoimentos', label: 'Depoimentos' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 text-primary font-bold text-lg lg:text-xl no-underline">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white text-sm font-extrabold">
              JP
            </div>
            <span className="hidden sm:inline">Dr. José Pedro</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors no-underline ${
                  location.pathname === link.to
                    ? 'bg-primary/10 text-primary'
                    : 'text-slate-600 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CLINIC.phone}`}
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors no-underline"
            >
              <Phone className="w-4 h-4" />
              {CLINIC.phone}
            </a>
            <a href={CLINIC.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm !py-2.5 !px-5">
              Agendar Consulta
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-700 bg-transparent border-none cursor-pointer"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors no-underline ${
                    location.pathname === link.to
                      ? 'bg-primary/10 text-primary'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={CLINIC.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm text-center mt-2 justify-center"
                onClick={() => setIsOpen(false)}
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
