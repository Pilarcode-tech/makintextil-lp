import Image from "next/image";
import DragCarousel from "./components/DragCarousel";
import Header from "./components/Header";

const projectCards = [
  {
    num: "01",
    category: "Ventilação",
    title: "Dutos de Exaustão",
    desc: "Sistemas de exaustão industrial para controle de ar, gases e partículas, garantindo segurança e eficiência operacional.",
    img: "/images/card-01.png",
  },
  {
    num: "02",
    category: "Processos Térmicos",
    title: "Trocadores de Calor",
    desc: "Soluções térmicas para controle de temperatura e otimização energética em processos industriais.",
    img: "/images/card-02.png",
  },
  {
    num: "03",
    category: "Estruturas Metálicas",
    title: "Calderaria",
    desc: "Fabricação de estruturas e componentes metálicos sob medida para aplicações industriais.",
    img: "/images/card-03.png",
  },
  {
    num: "04",
    category: "Manutenção Industrial",
    title: "Manutenção de Ramas",
    desc: "Manutenção e melhorias técnicas em ramas industriais, focadas em desempenho e confiabilidade.",
    img: "/images/ramas.png",
  },
  {
    num: "05",
    category: "Implantação Técnica",
    title: "Instalação de Máquinas",
    desc: "Instalação e comissionamento técnico de máquinas industriais com integração segura ao processo produtivo.",
    img: "/images/card-05.png",
  },
  {
    num: "06",
    category: "Transporte de Materiais",
    title: "Rosca Transportadora",
    desc: "Sistemas mecânicos para transporte contínuo de materiais sólidos em ambientes industriais.",
    img: "/images/card-06.png",
  },
];

const services = [
  {
    icon: "/icons/tools.svg",
    title: "Manutenção e Instalações Industriais",
    desc: "Execução técnica com segurança, precisão e continuidade operacional.",
  },
  {
    icon: "/icons/clock.svg",
    title: "Paradas Programadas De Manutenção",
    desc: "Planejamento e execução estratégica para reduzir tempo de parada e riscos.",
  },
  {
    icon: "/icons/wrench.svg",
    title: "Fornecimento de Peças e Serviços",
    desc: "Componentes e suporte técnico para manter sua operação em funcionamento.",
  },
  {
    icon: "/icons/blockchain.svg",
    title: "Comercialização de Peças e Materiais",
    desc: "Materiais industriais selecionados com padrão técnico e confiabilidade.",
  },
  {
    icon: "/icons/settings.svg",
    title: "Gestão e Manutenção de Facilities Industriais",
    desc: "Soluções integradas para infraestrutura, manutenção e apoio operacional.",
  },
];

const portfolioItems = [
  [
    {
      title: "Peças sobressalentes",
      desc: "Fabricação e fornecimento de peças sobressalentes para manutenção e reposição de equipamentos industriais.",
    },
    {
      title: "Inspeção de vasos de pressão",
      desc: "Inspeção técnica e avaliação de vasos de pressão conforme normas e requisitos de segurança.",
    },
    {
      title: "Tanques, silos e misturadores",
      desc: "Projeto, fabricação e manutenção de tanques, silos e sistemas de mistura industriais.",
    },
  ],
  [
    {
      title: "Reforma de máquinas",
      desc: "Reforma, revisão e adequação técnica de máquinas industriais para melhoria de desempenho e segurança.",
    },
    {
      title: "Caldeiraria industrial",
      desc: "Fabricação e manutenção de estruturas e componentes metálicos para aplicações industriais.",
    },
    {
      title: "Roscas e reduções técnicas",
      desc: "Fabricação de roscas, reduções e componentes técnicos sob medida para sistemas industriais.",
    },
  ],
  [
    {
      title: "Adequações NR 12 e NR 13",
      desc: "Adequação de máquinas e equipamentos às normas NR 12 e NR 13, garantindo conformidade e segurança operacional.",
    },
    {
      title: "Usinagem geral",
      desc: "Serviços de usinagem para fabricação e recuperação de peças e componentes industriais.",
    },
    {
      title: "Tubulações e dutos de exaustão",
      desc: "Projeto e fabricação de tubulações e dutos para sistemas de exaustão e ventilação industrial.",
    },
  ],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MakinTêxtil",
  description:
    "Soluções industriais completas e sob medida para a indústria têxtil. Projetos mecânicos, melhorias de máquinas e engenharia aplicada.",
  url: "https://makintextil.com.br",
  telephone: "+5511998488438",
  email: "contato@makintextil.com.br",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Itaquaquecetuba",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.4868,
    longitude: -46.3486,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  serviceArea: {
    "@type": "Country",
    name: "Brasil",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços Industriais",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Manutenção e Instalações Industriais",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paradas Programadas de Manutenção",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Caldeiraria Industrial" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Manutenção de Ramas" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Instalação de Máquinas" },
      },
    ],
  },
};

export default function Home() {
  return (
    <main
      className="w-full overflow-x-hidden bg-[#fefefe] scroll-smooth"
      style={{ scrollPaddingTop: "120px" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* ============ HERO SECTION ============ */}
      <section
        id="inicio"
        className="relative w-full bg-[#041f34] pt-[100px] md:pt-[120px]"
      >
        <div className="max-w-[1680px] mx-auto relative overflow-hidden">
          {/* Hero BG image — Figma: x=-11, y=-80, w=1696, h=1167 */}
          <div
            className="absolute inset-x-0 top-0 h-[1087px] overflow-visible"
            style={{
              backgroundImage: "url(/images/hero-bg.png)",
              backgroundSize: "100% auto",
              backgroundPosition: "center top -210px",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Hero Content */}
          <div className="relative z-10 px-6 lg:px-[75px] pt-16 pb-10">
            {/* Top area with decorative elements and text */}
            <div className="flex items-start gap-8 mb-16">
              {/* Yellow border decorative element — Figma: x=-270, y=267, w=320, h=205, rounded-63, border-18 */}
              <div className="hidden xl:block w-[320px] h-[205px] rounded-[63px] border-[18px] border-[#fedf01] flex-shrink-0 -ml-[270px] mt-[10px]" />

              {/* Small image (blueprint) — Figma: x=136, y=258, w=157, h=224 */}
              <div className="hidden lg:block relative w-[211px] h-[186px] flex-shrink-0">
                <Image
                  src="/images/logo_makintextil.png"
                  alt=""
                  fill
                  className=""
                />
              </div>

              {/* Hero Text — Figma: x=393, y=219 (label), y=255 (heading) */}
              <div>
                <p className="font-eurostile font-medium text-[14px] text-[#60717f] uppercase mb-[18px]">
                  ESPECIALISTA TÊXTIL
                </p>
                <h1 className="font-eurostile text-[24px] md:text-[30px] text-white uppercase leading-normal max-w-[375px]">
                  Em Cada Fio, um{" "}
                  <span className="text-[#0037ff]">Projeto </span>
                  de Engenharia
                </h1>
                <p className="font-medium text-[14px] text-[#60717f] leading-[1.55] tracking-[-0.28px] max-w-[261px] mt-[15px]">
                  A Makintêxtil oferece soluções industriais para a indústria
                  têxtil, com expertise em projetos, melhorias de máquinas e
                  engenharia aplicada. Atuamos como parceiros estratégicos em
                  manutenção e inovação.
                </p>
              </div>
            </div>

            {/* Services Strip */}
            <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-[50px] opacity-75 mb-16">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="flex-1 min-w-[200px] flex flex-col gap-[20px] items-start"
                >
                  <div className="w-[28px] h-[28px] relative">
                    <Image src={service.icon} alt="" fill sizes="28px" />
                  </div>
                  <div className="w-full h-[1px] bg-white/30" />
                  <div className="flex flex-col gap-[6px] max-w-[232px]">
                    <p className="font-medium text-[16px] text-white tracking-[-0.64px] leading-[1.12]">
                      {service.title}
                    </p>
                    <p className="font-normal text-[12px] text-white/50 tracking-[-0.24px]">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hero Images */}
            <div className="flex gap-4 -mx-6 lg:-mx-[75px]">
              <div className="relative w-[40%] aspect-[811/484] rounded-[14px] overflow-hidden -ml-[20%] lg:-ml-[15%]">
                <Image
                  src="/images/hero-left.png"
                  alt=""
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative flex-1 aspect-[1262/484] rounded-[14px] overflow-hidden -mr-[5%]">
                <Image
                  src="/images/hero-right-3.png"
                  alt=""
                  fill
                  sizes="80vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ QUEM SOMOS SECTION ============ */}
      <section id="quem-somos" className="relative w-full bg-[#fefefe]">
        <div className="max-w-[1680px] mx-auto px-6 lg:px-[94px] py-16 lg:py-[94px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            {/* Left Content */}
            <div className="lg:w-[400px] flex-shrink-0">
              <p className="font-extrabold text-[14px] text-[#8f8f8f] mb-4">
                QUEM SOMOS NÓS
              </p>
              <h2 className="font-eurostile text-[24px] md:text-[30px] text-[#414141] uppercase leading-normal mb-8">
                Soluções completas e sob medida para a indústria.
              </h2>
              <p className="font-medium text-[14px] text-[#8f8f8f] leading-[1.55] tracking-[-0.28px] max-w-[334px] mb-10">
                A Makintêxtil é especializada no desenvolvimento de soluções
                industriais para a indústria têxtil, com atuação em projetos
                mecânicos, melhorias de máquinas e engenharia aplicada.
              </p>
              <div className="flex items-center gap-[8px]">
                <Image
                  src="/icons/whatsapp-dark.svg"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                />
                <span className="font-medium text-[14px] text-black">
                  Whatsapp
                </span>
                <span className="font-medium text-[14px] text-[#8c8c8c]">
                  +55 11 99848-8438
                </span>
              </div>
            </div>

            {/* Right Content - Images */}
            {/* Mobile: stacked layout */}
            <div className="flex-1 flex flex-col gap-6 lg:hidden">
              <p className="font-medium text-[16px] text-[#8f8f8f] leading-[1.55] tracking-[-0.32px] max-w-[308px]">
                Trabalhamos de forma personalizada, analisando cada processo
                produtivo para entregar soluções eficientes, seguras e alinhadas
                às necessidades operacionais de cada cliente.
              </p>
              <div className="flex gap-4">
                <div className="relative w-[50%] aspect-square overflow-hidden">
                  <Image
                    src="/images/image-12.png"
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="relative w-[50%] aspect-square overflow-hidden">
                  <Image
                    src="/images/image-13.png"
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
            {/* Desktop: absolute positioned layout */}
            <div className="flex-1 relative min-h-[580px] hidden lg:block">
              <div className="absolute left-0 top-0 w-[55%] aspect-square overflow-hidden">
                <Image
                  src="/images/image-12.png"
                  alt=""
                  fill
                  sizes="35vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute right-0 top-[40%] w-[55%] aspect-square overflow-hidden">
                <Image
                  src="/images/image-13.png"
                  alt=""
                  fill
                  sizes="35vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <p className="absolute right-0 top-[10%] w-[45%] max-w-[308px] font-medium text-[16px] text-[#8f8f8f] leading-[1.55] tracking-[-0.32px]">
                Trabalhamos de forma personalizada, analisando cada processo
                produtivo para entregar soluções eficientes, seguras e alinhadas
                às necessidades operacionais de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT PANORAMIC IMAGE ============ */}
      {/* Image overlaps half into the dark portfolio section below */}
      <div className="relative z-10 max-w-[1680px] mx-auto px-6 lg:px-[80px] -mb-[140px] lg:-mb-[194px]">
        <div className="relative w-full h-[280px] lg:h-[388px] rounded-[17px] overflow-hidden">
          <Image
            src="/images/about-overlay.png"
            alt="Industrial facility"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* ============ PORTFOLIO DARK SECTION ============ */}
      {/* Cards overflow half below into the next white section */}
      <section id="servicos" className="relative w-full bg-[#1c3446]">
        <div className="max-w-[1680px] mx-auto pt-[180px] lg:pt-[254px] pb-[40px]">
          <div className="px-6 lg:px-[110px] mb-[24px]">
            <p className="font-extrabold text-[12px] text-white mb-[10px]">
              PORTFÓLIO TÉCNICO
            </p>
            <div className="flex flex-col gap-[10px]">
              <h2 className="font-eurostile text-[24px] lg:text-[30px] text-white uppercase leading-normal max-w-[983px]">
                Engenharia aplicada para ambientes industriais de alta
                exigência.
              </h2>
              <p className="font-medium text-[16px] text-white/70 tracking-[-0.32px] max-w-[468px]">
                Projetamos, fabricamos e implementamos soluções industriais sob
                medida, com foco em eficiência operacional, segurança técnica e
                durabilidade dos sistemas.
              </p>
            </div>
          </div>

          {/* Cards Carousel — overflows below the dark bg */}
          <DragCarousel className="pl-6 lg:pl-[100px] relative z-10 -mb-[220px] lg:-mb-[254px]">
            <div className="flex gap-[12px] pb-[20px]">
              {projectCards.map((card) => (
                <div
                  key={card.num}
                  className="relative w-[300px] lg:w-[350px] h-[440px] lg:h-[508px] flex-shrink-0 rounded-[10px] overflow-hidden snap-start"
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    sizes="350px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-[12px]" />
                  <p className="absolute top-[53px] left-[41px] font-bold text-[14px] text-[#c4c4c4] uppercase leading-[1.12]">
                    {card.category}
                  </p>
                  <p className="absolute top-[53px] right-[38px] font-medium text-[36px] text-[#c4c4c4] leading-[1.12] tracking-[-1.44px]">
                    {card.num}
                  </p>
                  <div className="absolute bottom-[97px] left-[41px] w-[260px]">
                    <p className="font-semibold text-[25px] text-white tracking-[-1px] leading-[1.12] mb-[5px]">
                      {card.title}
                    </p>
                    <p className="font-medium text-[14px] text-white/70 tracking-[-0.28px] w-[211px]">
                      {card.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-[50px] left-[41px] flex items-center w-[260px]">
                    <span className="font-medium text-[14px] text-white/70 tracking-[-0.28px]">
                      Solicitar Cotação
                    </span>
                    <div className="absolute right-[5px] w-[18px] h-[18px]">
                      <Image
                        src="/icons/arrow-right.svg"
                        alt=""
                        fill
                        sizes="18px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DragCarousel>
        </div>
      </section>

      {/* ============ PORTFOLIO GRID SECTION ============ */}
      <section id="projetos" className="relative w-full bg-[#fefefe]">
        <div className="max-w-[1680px] mx-auto px-6 lg:px-[96px] pt-[260px] lg:pt-[314px] pb-[60px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            {/* Left heading */}
            <div className="lg:w-[400px] flex-shrink-0">
              <h2 className="font-eurostile text-[24px] md:text-[30px] text-black uppercase leading-normal mb-[10px]">
                Portfólio completo de soluções industriais.
              </h2>
              <p className="font-medium text-[16px] text-black/70 tracking-[-0.32px] max-w-[300px]">
                Projetos, fabricação, instalação e manutenção de equipamentos
                industriais com foco em desempenho, segurança e conformidade
                técnica.
              </p>
            </div>

            {/* Grid columns */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
              {portfolioItems.flat().map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-[25px] max-w-[240px]"
                >
                  <div className="w-[44px] h-[44px] bg-[#ebebeb] rounded-[7px]" />
                  <div className="flex flex-col gap-[4px]">
                    <p className="font-semibold text-[17px] text-[#303030] tracking-[-0.67px] leading-[1.12]">
                      {item.title}
                    </p>
                    <p className="font-medium text-[12px] text-[#7b7b7b]/70 tracking-[-0.23px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MAP SECTION ============ */}
      <section className="relative w-full overflow-hidden">
        <div className="max-w-[1680px] mx-auto relative h-[280px] lg:h-[388px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58656.77849736!2d-46.3486!3d-23.4868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6617e69a2d0f%3A0x422e70871e1aa310!2sItaquaquecetuba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(100%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Makintêxtil - Itaquaquecetuba, SP"
          />
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer id="contato" className="relative w-full bg-[#1c3446]">
        <div className="max-w-[1680px] mx-auto">
          {/* Brand marquee */}
          <div className="py-[12px] overflow-hidden">
            <div className="flex gap-[21px] whitespace-nowrap font-eurostile text-[14px] text-black opacity-[0.21]">
              {Array.from({ length: 17 }).map((_, i) => (
                <span key={i}>MAKINTÊXTIL</span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mx-6 lg:mx-[52px] h-[1px] bg-white/10" />

          {/* Contact Section */}
          <div className="relative px-6 lg:px-[50px] py-[40px]">
            {/* Social icons — desktop, far right */}
            <div className="hidden lg:flex flex-col items-end gap-[6px] absolute right-[50px] top-[40px]">
              <div className="flex gap-[6px]">
                <Image
                  src="/icons/social-2.svg"
                  alt=""
                  width={50}
                  height={50}
                />
                <Image
                  src="/icons/social-1.svg"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <Image src="/icons/social-1.svg" alt="" width={50} height={50} />
            </div>
            <div className="flex flex-col lg:flex-row">
              {/* Left side */}
              <div className="flex-1 lg:border-r lg:border-white/10 lg:pr-12 mb-10 lg:mb-0">
                <div className="mb-[40px]">
                  <p className="font-menda font-bold text-[14px] text-[#12222e] uppercase leading-[1.12]">
                    Entre em contato
                  </p>
                  <p className="font-menda font-medium text-[25px] text-white uppercase leading-[1.12] mt-[5px]">
                    Entre em contato
                  </p>
                </div>
                <div className="flex flex-wrap gap-6 md:gap-8">
                  <div className="flex flex-col min-w-[140px] sm:min-w-[200px]">
                    <p className="font-menda font-semibold text-[12px] text-black/50 tracking-[-0.48px] uppercase">
                      WHATSAPP
                    </p>
                    <p className="font-menda font-medium text-[11px] text-white/50 tracking-[-0.44px] mt-[4px]">
                      Fale Conosco
                    </p>
                    <p className="font-menda font-medium text-[14px] text-white uppercase mt-6 md:mt-12">
                      +55 11 99848-8438
                    </p>
                  </div>
                  <div className="flex flex-col min-w-[140px] sm:min-w-[200px]">
                    <p className="font-menda font-semibold text-[12px] text-black/50 tracking-[-0.48px] uppercase">
                      E-mail
                    </p>
                    <p className="font-menda font-medium text-[11px] text-white/50 tracking-[-0.44px] mt-[4px]">
                      Fale conosco pelo whatsapp
                    </p>
                    <p className="font-menda font-medium text-[14px] uppercase mt-6 md:mt-12">
                      <span className="text-white">contato</span>
                      <span className="text-white/50">@makitextil.com.br</span>
                    </p>
                  </div>
                  <div className="flex flex-col min-w-[140px] sm:min-w-[200px]">
                    <p className="font-menda font-semibold text-[12px] text-black/50 tracking-[-0.48px] uppercase">
                      Telefone
                    </p>
                    <p className="font-menda font-medium text-[11px] text-white/50 tracking-[-0.44px] mt-[4px]">
                      Fale conosco pelo whatsapp
                    </p>
                    <p className="font-menda font-medium text-[14px] text-white uppercase mt-6 md:mt-12">
                      +55 11 99848-8438
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="lg:pl-[67px] relative">
                <div>
                  <p className="font-menda font-bold text-[14px] text-[#12222e] uppercase leading-[1.12]">
                    Entre em contato
                  </p>
                  <p className="font-menda font-medium text-[25px] text-white uppercase leading-[1.12] mt-[5px]">
                    Tem um projeto?
                  </p>
                </div>
                <div className="flex flex-col mt-[30px]">
                  <p className="font-menda font-semibold text-[12px] text-white tracking-[-0.48px] uppercase">
                    Orçamentos e Propostas
                  </p>
                  <p className="font-menda font-medium text-[11px] text-white/50 tracking-[-0.44px] mt-[4px] max-w-[257px]">
                    Quer receber um Orçamento Personalizado?
                  </p>
                  <p className="font-menda font-medium text-[14px] uppercase mt-12">
                    <span className="text-white">orcamentos</span>
                    <span className="text-white/50">@makintextil.com.br</span>
                  </p>
                </div>
                {/* Social icons — mobile only, desktop version is in parent */}
                <div className="flex gap-[6px] mt-6 lg:hidden">
                  <Image
                    src="/icons/social-2.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                  <Image
                    src="/icons/social-1.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                  <Image
                    src="/icons/social-1.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-6 lg:mx-[52px] h-[1px] bg-white/10" />

          {/* Bottom bar */}
          <div className="px-6 lg:px-[52px] py-[16px] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-[8px] md:gap-[16px] font-rajdhani font-semibold text-[11px] md:text-[14px] text-black/50 uppercase">
              <span>56.102.622-0001/85</span>
              <span>CREA</span>
              <span>5071473464</span>
            </div>
            <p className="font-rajdhani font-semibold text-[14px] text-black/50 uppercase">
              2026 © MakinTextil - Todos os Direitos reservados
            </p>
            <a
              href="#inicio"
              className="font-rajdhani font-semibold text-[14px] text-black/50 uppercase cursor-pointer hover:text-black/70 transition-colors"
            >
              Início do site
            </a>
          </div>

          {/* Divider */}
          <div className="mx-6 lg:mx-[52px] h-[1px] bg-white/10" />

          {/* Big brand name */}
          <div className="px-6 lg:px-[36px] py-[20px] overflow-hidden">
            <p className="font-eurostile text-[60px] md:text-[100px] xl:text-[165px] text-black opacity-10 leading-none">
              MAKINTÊXTIL
            </p>
          </div>

          {/* CNPJ bottom */}
          <div className="px-6 lg:px-[50px] pb-[30px] flex items-center justify-between">
            <p className="font-rajdhani font-semibold text-[14px] text-black/50 uppercase">
              CNPJ
            </p>
            <a
              href="#inicio"
              className="font-rajdhani font-semibold text-[14px] text-black/50 uppercase cursor-pointer hover:text-black/70 transition-colors"
            >
              Início do site
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
