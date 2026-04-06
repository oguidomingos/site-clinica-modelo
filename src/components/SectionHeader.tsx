import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface SectionHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeader({ tag, title, subtitle, center = true }: SectionHeaderProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`mb-12 lg:mb-16 ${center ? 'text-center' : ''} ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {tag && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3 bg-accent/10 px-3 py-1 rounded-full">
          {tag}
        </span>
      )}
      <h2 className="text-3xl lg:text-4xl font-bold text-primary leading-tight">{title}</h2>
      {subtitle && (
        <p className="text-slate-500 mt-3 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
