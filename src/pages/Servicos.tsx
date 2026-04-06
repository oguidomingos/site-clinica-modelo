import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CheckCircle, MessageCircle } from 'lucide-react'
import { CLINIC, SERVICES, FAQ } from '../data/clinic'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeader from '../components/SectionHeader'

function HeroSection() {
  return (
    <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-br from-surface to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3 bg-accent/10 px-3 py-1 rounded-full">
          Especialidades
        </span>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-primary leading-tight mb-4">
          Nossos Serviços
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Oferecemos tratamento completo em ortopedia, da avaliação ao acompanhamento pós-tratamento, com excelência e cuidado humanizado.
        </p>
      </div>
    </section>
  )
}

function ServiceDetail({ service, index }: { service: typeof SERVICES[number]; index: number }) {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()
  const Icon = service.icon
  const isEven = index % 2 === 0

  return (
    <section
      ref={ref}
      id={service.id}
      className={`py-16 lg:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-surface'} scroll-mt-24`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isVisible ? '' : 'opacity-0'}`}>
          <div className={`${!isEven ? 'lg:order-2' : ''} ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
            <p className="text-slate-500 leading-relaxed mb-6">{service.description}</p>

            <div className="space-y-3 mb-8">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-slate-600 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <a href={CLINIC.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle className="w-5 h-5" />
              Agendar consulta
            </a>
          </div>

          <div className={`${!isEven ? 'lg:order-1' : ''} ${isVisible ? (isEven ? 'animate-slide-in-right' : 'animate-slide-in-left') : ''}`}>
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 flex items-center justify-center">
              <Icon className="w-24 h-24 text-primary/15" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Dúvidas Frequentes"
          title="Perguntas comuns"
          subtitle="Respondemos as principais dúvidas dos nossos pacientes."
        />

        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <details
              key={i}
              className={`group glass rounded-2xl overflow-hidden ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <summary className="cursor-pointer px-6 py-5 flex items-center justify-between text-primary font-semibold text-sm lg:text-base list-none">
                {item.question}
                <span className="ml-4 text-accent text-xl transition-transform group-open:rotate-45 shrink-0">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Servicos() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [hash])

  return (
    <>
      <HeroSection />
      {SERVICES.map((service, i) => (
        <ServiceDetail key={service.id} service={service} index={i} />
      ))}
      <FAQSection />
    </>
  )
}
