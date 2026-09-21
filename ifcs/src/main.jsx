import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { company } from './data/company'
import { services, projectTypes } from './data/services'
import './styles.css'

const Arrow = () => <span aria-hidden="true">↗</span>

function Brand() {
  return <a className="brand" href="#inicio" aria-label="IFCS Esquadrias — início"><img src="/images/logo-header.png" alt="IFCS Esquadrias" /></a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formState, setFormState] = useState('idle')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll(); window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleForm(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent('Solicitação de orçamento — IFCS Esquadrias')
    const body = encodeURIComponent(`Nome: ${data.get('name')}\nTelefone: ${data.get('phone')}\nCidade: ${data.get('city')}\nTipo de projeto: ${data.get('project')}\n\nDetalhes:\n${data.get('message')}`)
    setFormState('opening')
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
    window.setTimeout(() => setFormState('sent'), 700)
  }

  const tel = company.phones[0]
  return <>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Brand />
        <button className="menu-toggle" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i></i><i></i></button>
        <nav className={menuOpen ? 'open' : ''} aria-label="Navegação principal">
          {['Início', 'Soluções', 'Portões', 'Estruturas', 'Empresa', 'Contato'].map((item) => <a key={item} onClick={() => setMenuOpen(false)} href={`#${item === 'Início' ? 'inicio' : item === 'Soluções' ? 'solucoes' : item === 'Portões' ? 'portoes' : item === 'Estruturas' ? 'estruturas' : item === 'Empresa' ? 'empresa' : 'contato'}`}>{item}</a>)}
        </nav>
        <a className="header-cta" href="#orcamento">Solicitar orçamento <Arrow /></a>
      </div>
    </header>

    <main>
      <section id="inicio" className="hero">
        <img className="hero-image" src="/images/hero-architecture.png" alt="Fachada residencial contemporânea com portão metálico e esquadrias de alumínio" fetchPriority="high" />
        <div className="hero-scrim"></div>
        <div className="container hero-content">
          <p className="eyebrow light">Esquadrias · Ferro · Alumínio · Jaraguá do Sul</p>
          <h1>Soluções em metal<br />feitas para <em>o seu projeto.</em></h1>
          <p className="hero-copy">Portões, cercas, portas, janelas, grades, corrimãos, escadas, coberturas e estruturas para residências, empresas e construtoras.</p>
          <div className="hero-actions"><a className="button button-red" href="#orcamento">Solicitar orçamento <Arrow /></a><a className="text-link light" href="#solucoes">Conhecer soluções <Arrow /></a></div>
          <p className="microcopy">Atendimento em Jaraguá do Sul, região e litoral catarinense.</p>
        </div>
        <div className="hero-mark" aria-hidden="true">IFCS<br /><span>1991 — hoje</span></div>
      </section>

      <section className="trust-strip" aria-label="Diferenciais"><div className="container trust-inner">
        {['+30 anos de experiência', 'Ferro & alumínio', 'Projetos sob medida', 'Atendimento regional'].map((item, i) => <p key={item}><b>0{i + 1}</b>{item}</p>)}
      </div></section>

      <section id="solucoes" className="section solutions">
        <div className="container"><div className="section-heading"><div><p className="eyebrow">01 / Soluções</p><h2>Uma solução para<br /><em>cada projeto.</em></h2></div><p>Da primeira ideia ao acabamento, a IFCS fabrica soluções metálicas alinhadas à necessidade de cada espaço.</p></div>
          <div className="service-grid">{services.map((service) => <article className="service" key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><a href="#orcamento" aria-label={`Solicitar orçamento para ${service.title}`}>Falar sobre o projeto <Arrow /></a></article>)}</div>
        </div>
      </section>

      <section id="portoes" className="feature feature-dark"><div className="container feature-grid"><div className="feature-copy"><p className="eyebrow light">02 / Portões e cercas</p><h2>Segurança,<br /><em>funcionalidade</em><br />e acabamento.</h2><p>Portões residenciais, basculantes, cercas e fechamentos desenvolvidos de acordo com as necessidades do seu projeto.</p><a className="button button-red" href="#orcamento">Quero orçamento para portão <Arrow /></a></div><div className="feature-art gate-art" aria-label="Detalhe abstrato de portão metálico"><span>PORTÕES<br />SOB MEDIDA</span></div></div></section>

      <section className="section editorial"><div className="container editorial-grid"><div className="architecture-block"><p className="eyebrow">03 / Esquadrias</p><h2>Esquadrias que valorizam cada ambiente.</h2><p>Portas e janelas em ferro e alumínio para projetos residenciais, comerciais e corporativos.</p><a className="text-link" href="#orcamento">Falar sobre portas e janelas <Arrow /></a></div><div className="material-note"><span className="line"></span><p>Consulte opções de acabamento, galvanização e pintura conforme o projeto.</p></div></div></section>

      <section className="section safety"><div className="container"><div className="safety-top"><p className="eyebrow">04 / Proteção e circulação</p><h2>Segurança<br />nos <em>detalhes.</em></h2></div><div className="safety-grid"><article><b>Grades & telas</b><p>Proteção sem abrir mão do acabamento.</p></article><article><b>Corrimãos & guarda-corpos</b><p>Para escadas, sacadas, mezaninos e áreas externas.</p></article><article><b>Escadas</b><p>Estrutura que também faz parte da arquitetura.</p></article></div></div></section>

      <section id="estruturas" className="feature structures"><div className="container structure-grid"><div><p className="eyebrow">05 / Estruturas e coberturas</p><h2>Estruturas para<br /><em>projetos maiores.</em></h2></div><div><p>Fabricação de coberturas, fechamentos e estruturas metálicas sob medida para diferentes demandas.</p><a className="button button-outline" href="#orcamento">Falar sobre meu projeto <Arrow /></a></div></div></section>

      <section id="empresa" className="section legacy"><div className="container legacy-grid"><p className="legacy-number">+30<span>anos</span></p><div><p className="eyebrow">06 / A IFCS</p><h2>Experiência construída ao longo de décadas.</h2><p>A IFCS nasceu como uma pequena empresa familiar e cresceu atendendo residências, empresas e construtoras em Jaraguá do Sul e outras regiões de Santa Catarina.</p><p className="family-quote">“Uma empresa familiar que cresceu junto com seus clientes.”</p></div></div></section>

      <section className="section visual-references"><div className="container"><div className="section-heading compact"><div><p className="eyebrow">07 / Referências visuais</p><h2>Metal em diálogo<br />com a arquitetura.</h2></div><p>Imagens ilustrativas para inspirar possibilidades de acabamento e aplicação. Não representam obras executadas pela IFCS.</p></div><div className="reference-grid"><div className="ref-card ref-a"><span>FACHADAS</span></div><div className="ref-card ref-b"><span>GUARDA-CORPOS</span></div><div className="ref-card ref-c"><span>ESTRUTURAS</span></div></div></div></section>

      <section id="orcamento" className="quote-section"><div className="container quote-grid"><div><p className="eyebrow light">08 / Orçamento</p><h2>Conte o que<br />você <em>precisa.</em></h2><p>Descreva seu projeto. Ao enviar, seu aplicativo de e-mail será aberto com as informações preenchidas para envio à IFCS.</p><a className="phone-link" href={tel.href}>{tel.display} <Arrow /></a></div><form onSubmit={handleForm}><label>Nome<input required name="name" autoComplete="name" /></label><label>Telefone / WhatsApp<input required name="phone" inputMode="tel" autoComplete="tel" /></label><label>Cidade<input required name="city" autoComplete="address-level2" /></label><label>Tipo de projeto<select required name="project" defaultValue=""><option value="" disabled>Selecione uma opção</option>{projectTypes.map((type) => <option key={type}>{type}</option>)}</select></label><label className="full">Descreva medidas, local e o que deseja fazer<textarea required name="message" rows="4"></textarea></label><button className="button button-red" type="submit">{formState === 'opening' ? 'Abrindo e-mail...' : formState === 'sent' ? 'E-mail preparado' : <>Enviar solicitação <Arrow /></>}</button><p className="form-note">Prefere falar agora? Ligue para <a href={tel.href}>{tel.display}</a>.</p></form></div></section>

      <section id="contato" className="section contacts"><div className="container"><div className="section-heading"><div><p className="eyebrow">09 / Unidades e contato</p><h2>Vamos conversar<br />sobre <em>seu projeto.</em></h2></div><p>{company.serviceArea}.</p></div><div className="contact-grid">{company.addresses.map((address) => <article className="address" key={address.label}><p className="eyebrow">{address.label}</p><h3>{address.street}<br />{address.district}<br />Jaraguá do Sul - SC</h3><a className="text-link" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.mapQuery)}`}>Como chegar <Arrow /></a></article>)}<article className="contact-details"><p className="eyebrow">Fale com a IFCS</p>{company.phones.map(phone => <a key={phone.href} href={phone.href}>{phone.display}</a>)}<a href={`mailto:${company.email}`}>{company.email}</a></article></div></div></section>

      <section className="final-cta"><div className="container"><p className="eyebrow light">IFCS ESQUADRIAS / JARAGUÁ DO SUL</p><h2>Tem um projeto<br />em mente?</h2><p>Fale com a IFCS e solicite um orçamento para sua residência, empresa ou obra.</p><div><a className="button button-red" href="#orcamento">Solicitar orçamento <Arrow /></a><a className="text-link light" href={tel.href}>Ligar para a IFCS <Arrow /></a></div></div></section>
    </main>
    <footer><div className="container footer-grid"><div><Brand /><p>Esquadrias de ferro e alumínio em Jaraguá do Sul.</p></div><div><p>CONTATO</p><a href={tel.href}>{tel.display}</a><a href={`mailto:${company.email}`}>{company.email}</a></div><div><p>LOCALIZAÇÃO</p><span>Jaraguá do Sul, SC<br />Atendimento regional</span></div><div><p>INSTITUCIONAL</p><span>CNPJ {company.cnpj}<br />© {new Date().getFullYear()} IFCS Esquadrias.</span></div></div></footer>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
