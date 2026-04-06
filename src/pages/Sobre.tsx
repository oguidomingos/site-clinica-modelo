import { Award, GraduationCap, Heart, Shield, Users, Target } from 'lucide-react'
import { CLINIC } from '../data/clinic'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeader from '../components/SectionHeader'

function HeroSection() {
  return (
    <section className="pt-28 lg:pt-36 pb-20 bg-gradient-to-br from-surface to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3 bg-accent/10 px-3 py-1 rounded-full">
              Sobre Nós
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary leading-tight mb-6">
              Tradição e inovação em{' '}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                ortopedia
              </span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Com mais de {CLINIC.experience} anos dedicados à ortopedia e medicina da dor, o {CLINIC.doctor} construiu uma trajetória marcada pela excelência no cuidado e constante atualização científica.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Localizada em Taguatinga Norte, nossa clínica oferece um ambiente acolhedor e equipado com tecnologia de ponta para diagnóstico e tratamento das mais diversas condições ortopédicas.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary/60">JP</span>
                  </div>
                  <p className="text-primary font-bold text-2xl">{CLINIC.doctor}</p>
                  <p className="text-slate-500 mt-1">{CLINIC.specialty}</p>
                  <p className="text-slate-400 text-sm mt-1">{CLINIC.crm}</p>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Award className="w-5 h-5 text-gold" />
                    <span className="text-slate-500 text-sm">+{CLINIC.experience} anos de experiência</span>
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

function HistorySection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Nossa História"
          title="Uma carreira dedicada ao cuidado"
          subtitle="Conheça a trajetória de excelência que construímos ao longo de décadas."
        />

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {[
              {
                icon: GraduationCap,
                title: 'Formação Acadêmica',
                text: 'Graduação em Medicina com especialização em Ortopedia e Traumatologia. Constante atualização por meio de congressos nacionais e internacionais.',
              },
              {
                icon: Award,
                title: 'Experiência Clínica',
                text: `Mais de ${CLINIC.experience} anos de prática clínica, com milhares de pacientes atendidos e alto índice de satisfação comprovado.`,
              },
              {
                icon: Target,
                title: 'Abordagem Moderna',
                text: 'Utilização de técnicas minimamente invasivas e tratamentos baseados em evidências científicas, priorizando o conforto e a recuperação rápida do paciente.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`flex gap-5 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  const values = [
    {
      icon: Heart,
      title: 'Humanização',
      text: 'Cada paciente é único. Nosso atendimento é personalizado e acolhedor.',
    },
    {
      icon: Shield,
      title: 'Ética',
      text: 'Atuamos com total transparência e respeito às normas do CFM.',
    },
    {
      icon: Award,
      title: 'Excelência',
      text: 'Buscamos os melhores resultados com as técnicas mais avançadas.',
    },
    {
      icon: Users,
      title: 'Cuidado Integral',
      text: 'Tratamos o paciente como um todo, não apenas a lesão.',
    },
  ]

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Nossos Valores"
          title="O que nos guia"
          subtitle="Princípios que norteiam cada atendimento na nossa clínica."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <div
              key={value.title}
              className={`glass rounded-2xl p-6 text-center hover:shadow-lg transition-shadow ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-primary mb-2">{value.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClinicSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="A Clínica"
          title="Estrutura e conforto"
          subtitle="Um espaço pensado para oferecer o melhor atendimento em ortopedia."
        />

        <div className={`grid md:grid-cols-3 gap-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {[
            { title: 'Consultórios Modernos', text: 'Ambientes amplos e equipados com tecnologia de diagnóstico por imagem.' },
            { title: 'Sala de Procedimentos', text: 'Espaço dedicado para infiltrações e procedimentos ambulatoriais com total segurança.' },
            { title: 'Localização Privilegiada', text: `${CLINIC.address.full} — fácil acesso e estacionamento disponível.` },
          ].map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <span className="text-primary/30 text-6xl font-bold">{i + 1}</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Sobre() {
  return (
    <>
      <HeroSection />
      <HistorySection />
      <ValuesSection />
      <ClinicSection />
    </>
  )
}
