import {
  Bone,
  Syringe,
  Activity,
  SplineIcon,
  type LucideIcon,
} from 'lucide-react'

export const CLINIC = {
  name: 'Clínica Ortopédica Dr. José Pedro',
  fullName: 'Clínica Ortopédica Dr. José Pedro Rego Neto',
  doctor: 'Dr. José Pedro Rego Neto',
  crm: 'CRM/DF 00000',
  specialty: 'Ortopedia e Traumatologia',
  experience: '30+',
  phone: '(61) 99999-0000',
  whatsapp: '5561999990000',
  whatsappLink: 'https://wa.me/5561999990000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.',
  email: 'contato@clinicadrjosepedro.com.br',
  address: {
    street: 'QNA 2, Lote 12',
    neighborhood: 'Taguatinga Norte',
    city: 'Taguatinga',
    state: 'DF',
    cep: '72110-000',
    full: 'QNA 2, Lt 12 — Taguatinga Norte, DF',
  },
  hours: {
    weekdays: 'Segunda a Sexta: 08h — 18h',
    saturday: 'Sábado: 08h — 12h',
  },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.5!2d-48.0517!3d-15.8267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTaguatinga+Norte!5e0!3m2!1spt-BR!2sbr!4v1',
  googleRating: 4.9,
  googleReviews: 127,
} as const

export interface ServiceItem {
  id: string
  icon: LucideIcon
  title: string
  shortDescription: string
  description: string
  benefits: string[]
}

// Using Bone as a stand-in for knee icon
const KneeIcon = Bone
const SpineReplace = SplineIcon ?? Activity

export const SERVICES: ServiceItem[] = [
  {
    id: 'ortopedia',
    icon: Bone,
    title: 'Ortopedia Geral',
    shortDescription: 'Diagnóstico e tratamento de lesões e doenças do sistema musculoesquelético.',
    description:
      'Avaliação completa do sistema musculoesquelético com abordagem moderna e individualizada. Utilizamos os mais avançados métodos de diagnóstico para oferecer o melhor tratamento.',
    benefits: [
      'Avaliação clínica detalhada',
      'Diagnóstico por imagem avançado',
      'Tratamento conservador e cirúrgico',
      'Acompanhamento pós-operatório',
    ],
  },
  {
    id: 'infiltracao',
    icon: Syringe,
    title: 'Infiltração Articular',
    shortDescription: 'Procedimento minimamente invasivo para alívio de dor e inflamação nas articulações.',
    description:
      'A infiltração articular é um procedimento ambulatorial que consiste na aplicação de medicamentos diretamente na articulação afetada, proporcionando alívio rápido da dor e inflamação.',
    benefits: [
      'Alívio rápido da dor',
      'Procedimento ambulatorial',
      'Recuperação imediata',
      'Sem necessidade de internação',
    ],
  },
  {
    id: 'reabilitacao',
    icon: Activity,
    title: 'Reabilitação',
    shortDescription: 'Programa personalizado de reabilitação para recuperação funcional completa.',
    description:
      'Programa de reabilitação personalizado que combina técnicas modernas de fisioterapia e exercícios terapêuticos para restaurar a função e mobilidade.',
    benefits: [
      'Programa individualizado',
      'Equipe multidisciplinar',
      'Retorno funcional progressivo',
      'Prevenção de recidivas',
    ],
  },
  {
    id: 'coluna',
    icon: SpineReplace,
    title: 'Coluna Vertebral',
    shortDescription: 'Tratamento especializado para dores e patologias da coluna cervical, torácica e lombar.',
    description:
      'Diagnóstico e tratamento de patologias da coluna vertebral, incluindo hérnias de disco, estenose, escoliose e lombalgia crônica, com abordagem conservadora prioritária.',
    benefits: [
      'Diagnóstico preciso',
      'Tratamento conservador prioritário',
      'Técnicas minimamente invasivas',
      'Orientação postural',
    ],
  },
  {
    id: 'joelho',
    icon: KneeIcon,
    title: 'Joelho',
    shortDescription: 'Especialidade em lesões e doenças do joelho, do atleta ao idoso.',
    description:
      'Tratamento especializado para lesões ligamentares, meniscais, artrose e outras patologias do joelho, com abordagem personalizada para cada perfil de paciente.',
    benefits: [
      'Artroscopia avançada',
      'Tratamento de lesões esportivas',
      'Prótese de joelho',
      'Reabilitação integrada',
    ],
  },
]

export interface Testimonial {
  id: string
  name: string
  age: number
  condition: string
  text: string
  rating: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    age: 62,
    condition: 'Artrose no joelho',
    text: 'Depois de anos sofrendo com dores no joelho, encontrei no Dr. José Pedro o profissional que mudou minha qualidade de vida. O tratamento com infiltração foi transformador.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Carlos Eduardo',
    age: 45,
    condition: 'Hérnia de disco',
    text: 'Profissional excepcional. O tratamento conservador da minha hérnia de disco me livrou da cirurgia. Atendimento humanizado e resultado surpreendente.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Ana Beatriz',
    age: 35,
    condition: 'Lesão no ombro',
    text: 'A reabilitação após a cirurgia do ombro foi conduzida com excelência. Voltei a praticar esportes em menos tempo do que imaginava. Equipe nota 10!',
    rating: 5,
  },
  {
    id: '4',
    name: 'Roberto Almeida',
    age: 70,
    condition: 'Prótese de joelho',
    text: 'Realizei a prótese de joelho com o Dr. José Pedro e foi a melhor decisão da minha vida. Profissional competente, atencioso e que transmite muita confiança.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Fernanda Costa',
    age: 28,
    condition: 'Lesão no ligamento',
    text: 'Atleta amadora, tive uma lesão no ligamento cruzado. O Dr. José Pedro cuidou de tudo com maestria. Recuperação dentro do prazo e sem complicações.',
    rating: 5,
  },
  {
    id: '6',
    name: 'José Henrique',
    age: 55,
    condition: 'Dor lombar crônica',
    text: 'Sofria com lombalgia há mais de 10 anos. O tratamento integrado proposto pelo doutor foi certeiro. Hoje vivo sem dor e com muito mais disposição.',
    rating: 5,
  },
]

export const FAQ = [
  {
    question: 'Quais convênios são aceitos?',
    answer:
      'Atendemos os principais convênios do DF, além de consultas particulares. Entre em contato para verificar se o seu convênio é aceito.',
  },
  {
    question: 'A infiltração articular dói?',
    answer:
      'O procedimento é realizado com anestesia local, tornando-o praticamente indolor. Pode haver um leve desconforto no momento da aplicação, mas é bem tolerado pela maioria dos pacientes.',
  },
  {
    question: 'Preciso de encaminhamento para agendar consulta?',
    answer:
      'Não é necessário encaminhamento. Você pode agendar diretamente pelo WhatsApp ou telefone.',
  },
  {
    question: 'Qual é o tempo de recuperação de uma artroscopia?',
    answer:
      'O tempo de recuperação varia conforme o procedimento realizado, mas geralmente o paciente retorna às atividades leves em 2 a 4 semanas.',
  },
  {
    question: 'É possível tratar hérnia de disco sem cirurgia?',
    answer:
      'Sim. A maioria dos casos de hérnia de disco pode ser tratada de forma conservadora, com medicação, fisioterapia e, quando indicado, infiltrações.',
  },
]
