import { Star, Quote } from 'lucide-react'
import type { Testimonial } from '../data/clinic'

interface TestimonialCardProps {
  testimonial: Testimonial
  delay?: number
}

export default function TestimonialCard({ testimonial, delay = 0 }: TestimonialCardProps) {
  return (
    <div
      className="glass rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Quote className="w-8 h-8 text-accent/20 mb-4" />
      <p className="text-slate-600 leading-relaxed mb-6 text-sm lg:text-base">
        "{testimonial.text}"
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-primary text-sm">{testimonial.name}</p>
          <p className="text-slate-400 text-xs">{testimonial.age} anos — {testimonial.condition}</p>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </div>
  )
}
