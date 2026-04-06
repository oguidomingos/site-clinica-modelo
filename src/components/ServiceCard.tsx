import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ServiceItem } from '../data/clinic'

interface ServiceCardProps {
  service: ServiceItem
  delay?: number
}

export default function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  const Icon = service.icon
  return (
    <div
      className="group glass rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
        <Icon className="w-7 h-7 text-accent" />
      </div>
      <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.shortDescription}</p>
      <Link
        to={`/servicos#${service.id}`}
        className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all no-underline"
      >
        Saiba mais <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
