export const siteConfig = {
  name: "Nave Cine Metro",
  org: "Asociación Cultural Azoro",
  description:
    "Espacio independiente y comprometido con el arte y la cultura en el Centro Histórico de San Salvador.",
  url: "https://navecinemetro.org",
  crowdfundingUrl: "https://crowdfunding.navecinemetro.org/",
  shopUrl: process.env.NEXT_PUBLIC_SHOP_URL || "http://localhost:3002",
  phone: "+503 7844 4692",
  email: "navecinemetro@gmail.com",
  address: "#231 Calle Delgado, esquina 4ª Avenida Sur, Centro Histórico, San Salvador",
  coordinates: { lat: 13.6986449, lng: -89.1896252 },
  mapsUrl: "https://maps.app.goo.gl/BF8swUJ4j5Bropvg9",
  hours: "Lunes a sábado · 10:00 – 18:00",
  social: {
    facebook: "https://www.facebook.com/navecinemetro",
    instagram: "https://www.instagram.com/navecinemetro",
    twitter: "https://twitter.com/navecinemetro",
  },
  busRoutes: ["42B", "Ruta A", "Ruta 1", "26", "22", "29A", "29D", "5A", "5B"],
}

function shopPath(path: string) {
  return `${siteConfig.shopUrl.replace(/\/$/, "")}${path}`
}

export const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Cartelera", href: shopPath("/cartelera") },
  { name: "Servicios", href: "/servicios" },
  { name: "Tripulantes", href: "/tripulantes" },
  { name: "Conócenos", href: "/quienes-somos" },
  { name: "Contáctanos", href: "/contactanos" },
]

export const footerLinks = [
  { title: "Acerca de NCM", href: "/" },
  { title: "Cartelera", href: shopPath("/cartelera") },
  { title: "Servicios", href: "/servicios" },
  { title: "Tripulantes", href: "/tripulantes" },
  { title: "Conócenos", href: "/quienes-somos" },
  { title: "Tour virtual", href: "/tour-virtual" },
  { title: "Contáctanos", href: "/contactanos" },
  { title: "Descubre San Salvador", href: "/descubre-san-salvador" },
  { title: "Privacidad", href: "/privacy-policy" },
]

export const missionBullets = [
  "Una alternativa cultural para vos, que querés ser parte de cómo se vive y se desarrolla el arte y la cultura en El Salvador desde el corazón de la capital.",
  "Un espacio físico para la creación, exhibición, formación e investigación especializada en las artes escénicas (teatro, música, cine, danza y performance).",
  "Un lugar de convivencia y articulación para todo el sector cultural y artístico.",
]

export const partners = [
  { name: "PISSCA", src: "/partners/pissca.jpg" },
  { name: "ACNUR", src: "/partners/acnur.png" },
  { name: "UAM", src: "/partners/uam.png" },
  { name: "FCAM", src: "/partners/fcam.png" },
  { name: "PNUD", src: "/partners/undp.png" },
  { name: "Fundación Poma", src: "/partners/fundacion-poma.png" },
  { name: "Avon", src: "/partners/avon.png" },
  { name: "Súperate", src: "/partners/superate.png" },
  { name: "Glasswing", src: "/partners/glasswing.png" },
  { name: "FEDECRÉDITO", src: "/partners/fedecredito.png" },
  { name: "Hanns Seidel", src: "/partners/hanns.png" },
  { name: "FUNDASAL", src: "/partners/fundasal.jpg" },
]

export const services = [
  {
    title: "Alquileres",
    subtitle: "Un espacio ideal en el Centro Histórico de San Salvador",
    description:
      "Utilizá completamente las instalaciones para la realización de tus eventos, desde presentaciones artísticas hasta capacitaciones.",
    icon: "building",
  },
  {
    title: "Programar Presentación",
    subtitle: "Todas las herramientas para montar tu obra",
    description:
      "Contá con nuestro equipo de sonido, iluminación y acompañamiento del equipo técnico de la Nave Cine Metro.",
    icon: "mic",
  },
  {
    title: "Formación y creación",
    subtitle:
      "Talleres, capacitaciones, laboratorios, residencias y espacio para ensayos.",
    description:
      "Tenemos equipo de sonido, proyector, pantalla, mesas y escenario.",
    icon: "graduation",
  },
  {
    title: "Audiovisual",
    subtitle: "Utilizá nuestra pantalla",
    description:
      "También contamos con sonido profesional para tus presentaciones y estrenos.",
    icon: "film",
  },
] as const

export const stats = [
  {
    value: "+200",
    label: "Personas, aproximadamente, caben en el interior de la Nave.",
  },
  {
    value: "+300",
    label:
      "Artistas nacionales e internacionales han exhibido sus obras desde finales de 2019.",
  },
  {
    value: "+10.000",
    label: "Personas han disfrutado de nuestra programación.",
  },
]

export const azoro = {
  name: "Teatro del Azoro",
  href: "/teatro-del-azoro",
  logo: "/images/companies/teatro-del-azoro-logo.png",
  logoFit: "wide" as const,
  teaser:
    "Compañía que ha producido una dramaturgia propia a partir de procesos profundos de investigación, que trata del dolor, la violencia y el amor y que se compromete con la realidad contemporánea de El Salvador.",
  history: [
    "Teatro del Azoro comienza su andadura en 2011 con la obra «Partidas», que indaga sobre la migración. Las historias migratorias de sus propias integrantes son el punto inicial para construir la dramaturgia. Posteriormente, el Instituto Nacional de la Mujer (ISDEMU) selecciona al grupo para realizar «Buscando mi nombre» sobre las mujeres en el período de la Independencia de El Salvador.",
    "Estas dos experiencias fueron suficientes para realizar un proyecto de mayor envergadura: «Los más solos», basada en la crónica periodística «La Caverna de Choreja», de Carlos Martínez, publicada en El Faro, y una investigación de 10 meses dentro del pabellón penitenciario del hospital psiquiátrico.",
    "Tras haber presentado la obra «Los más solos» desde 2013 ante más de 10.000 personas y haber participado en festivales internacionales, el Teatro del Azoro recibe la invitación de Brücke Le Pont y Mujeres Transformando para crear «Made in El Salvador» mediante su metodología de investigación antropológica.",
    "Cuatro mujeres, actrices, hermanas, se conocieron en las tablas y emprendieron este viaje artístico que ha producido obras tan incisivas como «El fenómeno» y «Polvo de gallo». Hoy son referentes regionales en montaje teatral y gestión cultural.",
  ],
  cast: [
    {
      name: "Egly Larreynaga",
      image: "/images/cast/azoro/egly-larreynaga.png",
    },
    {
      name: "Alicia Chong",
      image: "/images/cast/azoro/alicia-chong.png",
    },
    {
      name: "Paola Miranda",
      image: "/images/cast/azoro/paola-miranda.png",
    },
    {
      name: "Pamela Palenciano",
      image: "/images/cast/azoro/pamela-palenciano.jpg",
    },
  ],
  productions: [
    {
      title: "El Fenómeno",
      image: "/events/teatro-01.jpg",
    },
    {
      title: "Made In El Salvador",
      image: "/events/teatro-02.jpg",
    },
    {
      title: "Los Más Solos",
      image: "/events/popup-01.jpg",
    },
    {
      title: "Todas Las Santas",
      image: "/events/cinema-01.jpg",
    },
    {
      title: "Polvo de Gallo",
      image: "/events/popup-02.jpg",
    },
    {
      title: "Como Dios Manda",
      image: "/events/cinema-02.jpg",
    },
  ],
}

export const cachada = {
  name: "La Cachada Teatro",
  href: "/la-cachada-teatro",
  logo: "/images/companies/la-cachada-transparent.png",
  logoFit: "round" as const,
  teaser:
    "Esta compañía ha montado una interpretación de sus vidas cotidianas que les ha permitido reconocer experiencias personales de agresión e iniciar un proceso de sanación, llevando estos relatos al escenario.",
  history: [
    "En septiembre de 2011 «La Cachada Teatro» se une como grupo a partir de un taller de teatro y es fruto de un trabajo intensivo de empoderamiento femenino a través de las artes escénicas. La compañía está integrada por mujeres procedentes de comunidades urbano-marginales de San Salvador y trabajadoras del sector informal: vendedoras ambulantes, del mercado y trabajadoras domésticas —madres solteras todas.",
    "En los talleres iniciales las participantes, ahora actrices, empezaron a compartir sus experiencias de vida con otras mujeres y a comprender el impacto de sus acciones sobre el desarrollo de sus hijos e hijas. Así comenzaron a reconocerse, a crear una identidad grupal y a construir lazos de apoyo.",
    "Este proceso teatral pudo ablandar la dureza que llevaban dentro: entendieron que sus padres y madres también fueron criados con violencia; las perdonaron. También se dieron cuenta de que replicaban esa violencia con sus hijos, entonces les pidieron perdón y cambiaron.",
    "La Cachada Teatro busca que el arte sea herramienta de visibilización, concientización y llamado a la acción, en especial para jóvenes. Ahora las actrices también facilitan talleres para otras mujeres: son una esperanza viva en El Salvador.",
  ],
  cast: [
    {
      name: "Wendy Hernández",
      image: "/images/cast/cachada/wendy-hernandez.png",
    },
    {
      name: "Magaly Lemus",
      image: "/images/cast/cachada/magaly-lemus.png",
    },
    {
      name: "Evelyn Chileno",
      image: "/images/cast/cachada/evelyn-chileno.png",
    },
    {
      name: "Magdalena Henríquez",
      image: "/images/cast/cachada/magdalena-henriquez.png",
    },
  ],
  productions: [
    {
      title: "Algún Día",
      image: "/events/teatro-02.jpg",
    },
    {
      title: "Si Vos No Hubieras Nacido",
      image: "/events/teatro-01.jpg",
    },
    {
      title: "La Casa de Bernarda Alba",
      image: "/events/cinema-01.jpg",
    },
    {
      title: "La última Cachada",
      image: "/events/popup-01.jpg",
    },
    {
      title: "Lo Extraño es Quedarse",
      image: "/events/cinema-02.jpg",
    },
    {
      title: "Radio Cachada",
      image: "/events/concierto-01.jpg",
    },
    {
      title: "Retazos",
      image: "/events/popup-02.jpg",
    },
    {
      title: "Estoy Aquí",
      image: "/events/concierto-02.jpg",
    },
    {
      title: "Destapabocas",
      image: "/events/teatro-01.jpg",
    },
  ],
}

export const tripulantesIntro = {
  title: "¡El viaje comienza con vos!",
  description:
    "El arte es un viaje que nos transforma, pero ningún viaje se emprende solo. Tripulantes es una comunidad internacional que promueve el arte y la cultura para re-encontrarnos como humanidad.",
}

export const tripulantesImpact = [
  {
    title: "El espacio",
    description:
      "Invertimos constantemente en seguir dignificando y mejorando nuestro centro cultural. Este año, queremos invertir en equipo de sonido e iluminación, seguridad contra incendios, la zona de baños e instalar un aire acondicionado de 5 toneladas.",
  },
  {
    title: "Las personas",
    description:
      "Nuestras actividades permanentes de cine, música, teatro y danza son posibles gracias a las personas que dan vida a cada propuesta. Reconocemos su trabajo garantizando honorarios por su esfuerzo y creatividad.",
  },
  {
    title: "La comunidad",
    description:
      "El acceso al arte y la cultura es un derecho humano. Organizamos actividades para niños, niñas, adolescencias, juventudes y mujeres de todo el territorio, tanto en la Nave como en sus comunidades.",
  },
] as const

export type MembershipTier = {
  id: string
  name: string
  featured?: boolean
  note?: string
  /** Path to physical card artwork */
  card: string
  monthly: number | null
  /** null = solo mensual / sin plan anual */
  annual: number | null
  benefits: string[]
}

/** Pases de abordaje (selector 3D). Orden estable para SSR. */
export const membershipTiers: MembershipTier[] = [
  {
    id: "cadete",
    name: "Cadete",
    note: "Estudiantes mayores de 18 años",
    card: "/images/memberships/cadete.png",
    monthly: 5,
    annual: 60,
    benefits: [
      "¡Cada mes un boleto gratuito del evento que prefieras!",
      "¡Comparte el viaje! Descuentos especiales en boletos adicionales (10%)",
      "Acceso a actividades especiales para Tripulantes y contenido online exclusivo",
      "Beneficios fiscales con tu donación si tributas en El Salvador",
    ],
  },
  {
    id: "explorador",
    name: "Explorador",
    card: "/images/memberships/explorador.png",
    monthly: 10,
    annual: 120,
    benefits: [
      "¡Cada mes un boleto gratuito del evento que prefieras!",
      "¡Comparte el viaje! Descuentos especiales en boletos adicionales (10%)",
      "Acceso a actividades especiales para Tripulantes y contenido online exclusivo",
      "Beneficios fiscales con tu donación si tributas en El Salvador",
    ],
  },
  {
    id: "navegante",
    name: "Navegante",
    card: "/images/memberships/navegante.png",
    monthly: 20,
    annual: 240,
    benefits: [
      "¡Cada mes dos boletos gratuitos del evento que prefieras!",
      "¡Comparte el viaje! Descuentos especiales en boletos adicionales (15%)",
      "Acceso a actividades especiales para Tripulantes y contenido online exclusivo",
      "Beneficios fiscales con tu donación si tributas en El Salvador",
    ],
  },
  {
    id: "capitan",
    name: "Capitán",
    featured: true,
    card: "/images/memberships/capitan.png",
    monthly: 30,
    annual: 360,
    benefits: [
      "¡Cada mes tres boletos gratuitos a todas nuestras actividades!",
      "¡Comparte el viaje! Descuentos especiales en boletos adicionales (20%)",
      "Equipo listo para la travesía: acceso especial a artículos de la Nave (15%)",
      "¡Aborda antes que nadie! Podrás disfrutar de preestrenos y ensayos.",
      "Acceso a actividades especiales para Tripulantes y contenido online exclusivo",
      "Beneficios fiscales con tu donación si tributas en El Salvador",
    ],
  },
  {
    id: "viajero",
    name: "Viajero",
    card: "/images/memberships/viajero.png",
    monthly: 5,
    annual: null,
    benefits: [
      "Contribuyes a la democratización del arte y sostienes los proyectos de la Nave.",
      "Descuentos para actividades especiales para Tripulantes y contenido online exclusivo.",
      "Beneficios fiscales con tu donación si tributas en El Salvador",
    ],
  },
]

/** Donación única (sin tarjeta física en el deck). */
export const membershipExtras = [
  {
    id: "propulsor",
    name: "Propulsor",
    priceLabel: "Donación única",
    description: "Tú elegís el monto.",
    benefits: [
      "Contribuyes a la democratización del arte y sostienes los proyectos de la Nave.",
      "Descuentos para actividades especiales para Tripulantes y contenido online exclusivo.",
      "Beneficios fiscales con tu donación si tributas en El Salvador",
    ],
  },
] as const

export const tripulantesOrbit = [
  {
    year: "2021",
    title: "Mantenimiento general y limpieza profunda",
  },
  {
    year: "2022",
    title: "Cambio de techo y remoción de residuos",
  },
  {
    year: "2023",
    title: "Construcción de tarima y colocación de iluminación",
  },
  {
    year: "2024",
    title: "Estreno de programación permanente con Groove Productions",
  },
  {
    year: "2025",
    title: "Posicionamiento y expansión",
  },
  {
    year: "2026",
    title: "Remodelaciones y programación itinerante «Nave en movimiento»",
  },
] as const

export const sanSalvadorGuide = [
  {
    title: "Templos",
    items: [
      "Catedral Metropolitana de San Salvador",
      "Cripta Monseñor Romero",
      "Iglesia El Rosario",
      "Iglesia El Calvario",
      "Iglesia de Nuestra Señora de Candelaria",
      "Basílica del Sagrado Corazón de Jesús",
    ],
  },
  {
    title: "Parques y plazas",
    items: [
      "Plaza Gerardo Barrios",
      "Plaza Libertad",
      "Plaza Francisco Morazán",
      "Parque San José",
      "Parque Simón Bolívar",
    ],
  },
  {
    title: "Bares, restaurantes y cafés",
    items: [
      "Café Fulanos",
      "Café Luz Negra",
      "Club La Dalia",
      "Pipirisnais",
      "Le Café",
      "Mori's Rooftop",
      "Típicos La Cuscatleca",
      "Mia Pizza",
    ],
  },
  {
    title: "Edificios emblemáticos",
    items: [
      "Palacio Nacional",
      "Teatro Nacional de El Salvador",
      "Biblioteca Nacional",
      "Mercado Ex-Cuartel",
      "Casa Dueñas",
      "Plaza Sagrado Corazón",
    ],
  },
]
