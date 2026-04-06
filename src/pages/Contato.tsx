import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react'
import { CLINIC } from '../data/clinic'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeader from '../components/SectionHeader'

function HeroSection() {
  return (
    <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-br from-surface to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3 bg-accent/10 px-3 py-1 rounded-full">
          Contato
        </span>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-primary leading-tight mb-4">
          Fale conosco
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Estamos prontos para atender você. Escolha a forma de contato mais conveniente.
        </p>
      </div>
    </section>
  )
}

function ContactInfo() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  const items = [
    {
      icon: Phone,
      title: 'Telefone',
      text: CLINIC.phone,
      href: `tel:${CLINIC.phone}`,
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      text: 'Envie uma mensagem',
      href: CLINIC.whatsappLink,
    },
    {
      icon: Mail,
      title: 'E-mail',
      text: CLINIC.email,
      href: `mailto:${CLINIC.email}`,
    },
    {
      icon: MapPin,
      title: 'Endereço',
      text: CLINIC.address.full,
      href: undefined,
    },
    {
      icon: Clock,
      title: 'Horários',
      text: `${CLINIC.hours.weekdays}\n${CLINIC.hours.saturday}`,
      href: undefined,
    },
  ]

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader
              tag="Informações"
              title="Como nos encontrar"
              center={false}
            />

            <div className="space-y-6">
              {items.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-sm">{item.title}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-slate-500 text-sm hover:text-accent transition-colors no-underline"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-slate-500 text-sm whitespace-pre-line">{item.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href={CLINIC.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div ref={ref} className="glass rounded-3xl p-8 lg:p-10 flex items-center justify-center">
        <div className="text-center animate-scale-in">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">Mensagem enviada!</h3>
          <p className="text-slate-500 text-sm">
            Entraremos em contato em breve. Para atendimento imediato, fale conosco pelo WhatsApp.
          </p>
          <a href={CLINIC.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className={`glass rounded-3xl p-8 lg:p-10 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
      <h3 className="text-xl font-bold text-primary mb-6">Envie uma mensagem</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Nome completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm bg-white"
            placeholder="Seu nome"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm bg-white"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
              Telefone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm bg-white"
              placeholder="(61) 99999-0000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
            Assunto
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm bg-white"
          >
            <option value="">Selecione um assunto</option>
            <option value="consulta">Agendar consulta</option>
            <option value="retorno">Retorno</option>
            <option value="exames">Resultados de exames</option>
            <option value="convenio">Convênios</option>
            <option value="outro">Outro assunto</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm bg-white resize-none"
            placeholder="Descreva brevemente o motivo do contato..."
          />
        </div>

        <button type="submit" className="btn-secondary w-full justify-center">
          <Send className="w-5 h-5" />
          Enviar Mensagem
        </button>
      </form>
    </div>
  )
}

function MapSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Localização"
          title="Como chegar"
          subtitle={CLINIC.address.full}
        />

        <div
          className={`rounded-3xl overflow-hidden shadow-lg ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
        >
          <iframe
            src={CLINIC.mapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da clínica no mapa"
          />
        </div>
      </div>
    </section>
  )
}

export default function Contato() {
  return (
    <>
      <HeroSection />
      <ContactInfo />
      <MapSection />
    </>
  )
}
