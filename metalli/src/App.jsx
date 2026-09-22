import { useEffect, useState } from 'react'

const WHATSAPP =
  'https://wa.me/554932400613?text=Ol%C3%A1%21%20Vi%20o%20site%20da%20Metalli%20Steel%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'

const capabilities = [
  {
    name: 'Corte a laser',
    detail: 'Geometrias e peças desenvolvidas conforme a necessidade do projeto.',
    image: '/images/corte-personalizado.jpg',
    alt: 'Peças metálicas com recortes circulares produzidas pela Metalli Steel',
  },
  {
    name: 'Plasma e oxicorte',
    detail: 'Processos de corte para transformar a chapa na forma necessária.',
    image: '/images/corte-plasma.jpg',
    alt: 'Processo de corte plasma em uma chapa metálica na Metalli Steel',
  },
  {
    name: 'Dobra CNC',
    detail: 'Conformação da peça com repetibilidade e controle de dobra.',
    image: '/images/dobra-cnc.jpg',
    alt: 'Operação de dobra CNC em chapa metálica',
  },
  {
    name: 'Fabricação metálica',
    detail: 'Fueiros, malhal, porta-paletes e projetos personalizados.',
    image: '/images/fueiros.jpg',
    alt: 'Conjunto de fueiros florestais fabricados pela Metalli Steel',
  },
]

const projects = [
  {
    name: 'Fueiros florestais',
    image: '/images/fueiros.jpg',
    alt: 'Fueiros florestais fabricados e organizados na oficina',
    className: 'project--tall',
  },
  {
    name: 'Caçamba papa-entulho',
    image: '/images/cacamba.jpg',
    alt: 'Caçamba papa-entulho metálica fabricada pela Metalli Steel',
    className: 'project--wide',
  },
  {
    name: 'Escudo de cilindro',
    image: '/images/escudo-cilindro.jpg',
    alt: 'Escudo metálico para cilindro de guindaste florestal',
    className: 'project--detail',
  },
]

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  )
}

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' brand--footer' : ''}`} href="#top" aria-label="Metalli Steel — início">
      <span className="brand__crop">
        <img src="/images/metalli-logo.jpg" alt="" width="885" height="885" />
      </span>
    </a>
  )
}

function WhatsAppLink({ children, className = 'button button--primary' }) {
  return (
    <a className={className} href={WHATSAPP} target="_blank" rel="noreferrer">
      <span>{children}</span>
      <Arrow />
      <span className="sr-only"> (abre o WhatsApp em uma nova aba)</span>
    </a>
  )
}

function Header() {
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="Navegação principal">
        <a href="#capacidades">Capacidades</a>
        <a href="#trabalhos">Trabalhos</a>
        <a href="#contato">Contato</a>
      </nav>
      <WhatsAppLink className="header-cta">Solicitar orçamento</WhatsAppLink>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__coordinates utility" aria-hidden="true">
        LGS · SC / 27°48′S
      </div>
      <div className="hero__copy">
        <p className="eyebrow">Corte · dobra · fabricação</p>
        <h1 id="hero-title">
          O aço
          <br />
          toma <em>forma.</em>
        </h1>
        <p className="hero__lead">
          Corte a laser, plasma e oxicorte, dobra CNC e fabricação metálica em Lages, Santa Catarina.
        </p>
        <div className="hero__actions">
          <WhatsAppLink>Solicitar orçamento</WhatsAppLink>
          <a className="text-link" href="#trabalhos">
            Ver trabalhos <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="hero__visual" aria-label="Processo real de corte plasma na Metalli Steel">
        <div className="hero__plate">
          <img
            src="/images/corte-plasma.jpg"
            alt="Tocha realizando corte plasma em chapa metálica"
            width="1080"
            height="1350"
            fetchPriority="high"
          />
        </div>
        <span className="cut-line" aria-hidden="true" />
        <span className="hero__material utility" aria-hidden="true">
          CHAPA / CORTE
        </span>
      </div>
      <p className="hero__index utility" aria-hidden="true">
        01 — MATÉRIA
      </p>
    </section>
  )
}

function Statement() {
  return (
    <section className="statement section-light reveal" aria-labelledby="statement-title">
      <p className="section-code utility">MATÉRIA / EXECUÇÃO</p>
      <div>
        <h2 id="statement-title">
          A matéria é aço.
          <br />
          O resultado é <span>precisão.</span>
        </h2>
      </div>
      <p>
        Cada peça começa com uma necessidade concreta. A Metalli Steel combina corte, dobra e fabricação para
        entregar forma, resistência e função.
      </p>
    </section>
  )
}

function Capabilities() {
  const [active, setActive] = useState(0)
  const selected = capabilities[active]

  return (
    <section className="capabilities section-dark" id="capacidades" aria-labelledby="capabilities-title">
      <div className="section-heading reveal">
        <p className="eyebrow">Capacidades confirmadas</p>
        <h2 id="capabilities-title">Da chapa à aplicação.</h2>
        <p>Selecione um processo para ver o material correspondente.</p>
      </div>
      <div className="capabilities__layout reveal">
        <figure className="capabilities__media">
          <img src={selected.image} alt={selected.alt} width="640" height="640" />
          <figcaption className="utility">MATERIAL REAL / @METALLI.STEEL</figcaption>
        </figure>
        <div className="capabilities__list" aria-label="Processos e produtos">
          {capabilities.map((item, index) => (
            <button
              type="button"
              className={index === active ? 'is-active' : ''}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
              onFocus={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              key={item.name}
            >
              <span className="utility">0{index + 1}</span>
              <strong>{item.name}</strong>
              <small>{item.detail}</small>
              <span className="capabilities__arrow" aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedWork() {
  return (
    <section className="featured section-dark" aria-labelledby="featured-title">
      <div className="featured__image reveal">
        <img
          src="/images/fueiro-aplicado.jpg"
          alt="Fueiros metálicos instalados em caminhão para transporte florestal"
          width="640"
          height="640"
          loading="lazy"
        />
        <span className="featured__line" aria-hidden="true" />
      </div>
      <div className="featured__copy reveal">
        <p className="section-code utility">APLICAÇÃO / FLORESTAL</p>
        <h2 id="featured-title">Estrutura feita para trabalhar.</h2>
        <p>
          Fueiros florestais fabricados pela Metalli Steel e apresentados em sua aplicação real. Material,
          construção e função no mesmo projeto.
        </p>
        <WhatsAppLink className="button button--outline">Orçar fabricação</WhatsAppLink>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="projects section-light" id="trabalhos" aria-labelledby="projects-title">
      <div className="projects__intro reveal">
        <p className="eyebrow">Trabalhos reais</p>
        <h2 id="projects-title">A execução é a prova.</h2>
        <p>Registros publicados pela própria Metalli Steel.</p>
      </div>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <figure className={`project ${project.className} reveal`} key={project.name}>
            <img src={project.image} alt={project.alt} width="640" height="640" loading="lazy" />
            <figcaption>
              <span className="utility">0{index + 1}</span>
              <strong>{project.name}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function Precision() {
  return (
    <section className="precision section-light" aria-labelledby="precision-title">
      <div className="precision__rule" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="precision__title reveal">
        <p className="section-code utility">ENGENHARIA DO DETALHE</p>
        <h2 id="precision-title">Cortar. Dobrar. Construir.</h2>
      </div>
      <div className="precision__content reveal">
        <p>
          Um bom resultado nasce da relação entre desenho, material e execução. Cada etapa prepara a próxima —
          sem ruído, sem excesso.
        </p>
        <dl>
          <div><dt>Corte</dt><dd>forma</dd></div>
          <div><dt>Dobra</dt><dd>geometria</dd></div>
          <div><dt>Fabricação</dt><dd>função</dd></div>
        </dl>
      </div>
    </section>
  )
}

function Location() {
  return (
    <section className="location section-dark" aria-labelledby="location-title">
      <div className="location__marker" aria-hidden="true">
        <span>+</span>
      </div>
      <div className="location__heading reveal">
        <p className="eyebrow">Onde estamos</p>
        <h2 id="location-title">Lages, Santa Catarina.</h2>
      </div>
      <address className="reveal">
        <strong>Metalli Steel</strong>
        <span>R. Visconde de Inhaúma, 88</span>
        <span>Maria Luíza · Lages — SC</span>
      </address>
      <a
        className="text-link location__link"
        href="https://www.google.com/maps?cid=17695436028897380034"
        target="_blank"
        rel="noreferrer"
      >
        Abrir rota no mapa <Arrow />
        <span className="sr-only"> (abre em uma nova aba)</span>
      </a>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="final-cta" id="contato" aria-labelledby="final-title">
      <span className="final-cta__cut" aria-hidden="true" />
      <p className="section-code utility">PROJETO / ORÇAMENTO</p>
      <h2 id="final-title">
        Seu próximo projeto começa na <em>matéria certa.</em>
      </h2>
      <div className="final-cta__action">
        <p>Conte à Metalli o que você precisa fabricar.</p>
        <WhatsAppLink>Falar com a Metalli Steel</WhatsAppLink>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <Brand footer />
      <p>Metalli Steel · Lages — Santa Catarina</p>
      <div className="footer__links">
        <a href="https://www.instagram.com/metalli.steel/" target="_blank" rel="noreferrer">
          Instagram<span className="sr-only"> (abre em nova aba)</span>
        </a>
        <a href="tel:+554932400613">(49) 3240-0613</a>
      </div>
      <p className="utility">CNPJ 57.287.356/0001-75</p>
    </footer>
  )
}

function App() {
  const [showMobileContact, setShowMobileContact] = useState(false)

  useEffect(() => {
    const updateContactVisibility = () => {
      const threshold = Math.min(window.innerHeight * 0.65, 650)
      setShowMobileContact(window.scrollY > threshold)
    }
    updateContactVisibility()
    window.addEventListener('scroll', updateContactVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateContactVisibility)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Pular para o conteúdo</a>
      <Header />
      <main id="main">
        <div id="top" />
        <Hero />
        <Statement />
        <Capabilities />
        <FeaturedWork />
        <Projects />
        <Precision />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppLink className={`mobile-contact button${showMobileContact ? ' is-visible' : ''}`}>
        Solicitar orçamento
      </WhatsAppLink>
    </>
  )
}

export default App
