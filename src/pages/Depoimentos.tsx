import { Star, MessageCircle } from 'lucide-react'
import { CLINIC, TESTIMONIALS } from '../data/clinic'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import TestimonialCard from '../components/TestimonialCard'

function HeroSection() {
  return (
    <section className="pt-28 lg:pt-36 pb-16 bg-gradient-to-br from-surface to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3 bg-accent/10 px-3 py-1 rounded-full">
          Depoimentos
        </span>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-primary leading-tight mb-4">
          Histórias de recuperação
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Cada depoimento representa uma vida transformada pelo cuidado e dedicação da nossa equipe.
        </p>

        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="glass rounded-2xl px-6 py-4 flex items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-primary font-bold text-lg">{CLINIC.googleRating}/5</p>
              <p className="text-slate-400 text-xs">{CLINIC.googleReviews} avaliações no Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      <div className={`max-w-3xl mx-auto px-4 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Faça parte dessa história
        </h2>
        <p className="text-white/70 text-lg mb-8 leading-relaxed">
          Agende sua consulta e descubra como podemos ajudar na sua recuperação.
        </p>
        <a href={CLINIC.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
          <MessageCircle className="w-5 h-5" />
          Agendar Consulta
        </a>
      </div>
    </section>
  )
}

export default function Depoimentos() {
  return (
    <>
      <HeroSection />
      <TestimonialsGrid />
      <CTASection />
    </>
  )
}
