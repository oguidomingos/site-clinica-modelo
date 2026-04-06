import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Star,
  Shield,
  Award,
  Users,
  CheckCircle,
  MessageCircle,
} from 'lucide-react'
import { CLINIC, SERVICES, TESTIMONIALS } from '../data/clinic'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-white/80 text-sm">Mais de {CLINIC.experience} anos de experiência</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
              Sua saúde em{' '}
              <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
                boas mãos
              </span>
            </h1>

            <p className="text-white/70 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
              Ortopedia, medicina da dor, infiltrações e reabilitação com atendimento humanizado e tecnologia de ponta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CLINIC.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-base justify-center">
                <MessageCircle className="w-5 h-5" />
                Agendar Consulta
              </a>
              <Link to="/servicos" className="btn-secondary !bg-white/10 !border !border-white/20 backdrop-blur-sm text-base justify-center">
                Nossos Serviços
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/60 text-sm">
                {CLINIC.googleRating}/5 — {CLINIC.googleReviews} avaliações no Google
              </span>
            </div>
          </div>

          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white/80">JP</span>
                  </div>
                  <p className="text-white font-bold text-xl">{CLINIC.doctor}</p>
                  <p className="text-white/60 text-sm mt-1">{CLINIC.specialty}</p>
                  <p className="text-white/40 text-xs mt-1">{CLINIC.crm}</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass-dark rounded-2xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{CLINIC.googleReviews}+ pacientes</p>
                    <p className="text-white/50 text-xs">avaliaram positivamente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()
  const stats = [
    { icon: Users, value: '5.000+', label: 'Pacientes atendidos' },
    { icon: Award, value: '30+', label: 'Anos de experiência' },
    { icon: Star, value: '4.9', label: 'Avaliação Google' },
    { icon: Shield, value: '100%', label: 'Conformidade CFM' },
  ]

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-3xl lg:text-4xl font-extrabold text-primary">{stat.value}</p>
              <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Especialidades"
          title="Nossos Serviços"
          subtitle="Cuidamos da sua saúde com excelência em ortopedia e reabilitação."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 100} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/servicos" className="btn-secondary">
            Ver todos os serviços
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Depoimentos"
          title="O que nossos pacientes dizem"
          subtitle="A satisfação dos nossos pacientes é o nosso maior resultado."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} delay={i * 100} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/depoimentos" className="btn-secondary">
            Ver todos os depoimentos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-accent rounded-full blur-3xl" />
      </div>

      <div className={`max-w-3xl mx-auto px-4 text-center relative z-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Agende sua consulta hoje
        </h2>
        <p className="text-white/70 text-lg mb-8 leading-relaxed">
          Não deixe a dor limitar a sua vida. Nossa equipe está pronta para cuidar de você com atenção e excelência.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={CLINIC.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-base justify-center">
            <MessageCircle className="w-5 h-5" />
            Falar pelo WhatsApp
          </a>
          <Link to="/contato" className="btn-secondary !bg-white/10 !border !border-white/20 backdrop-blur-sm text-base justify-center">
            Outras formas de contato
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
