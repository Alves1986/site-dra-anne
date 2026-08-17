/**
 * Direção visual: Jardim de Linho — editorial orgânico em marfim, rosa camélia
 * e vinho ameixa; layout assimétrico, amplo e acolhedor para cuidado feminino.
 */
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Baby,
  CalendarDays,
  Check,
  ChevronDown,
  HeartHandshake,
  HeartPulse,
  Instagram,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Sun,
  X,
} from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/draanneginecologista";
const LINKTREE_URL = "https://linktr.ee/draannelisegaldino";

const services = [
  {
    index: "01",
    title: "Consulta ginecológica",
    description:
      "Uma escuta cuidadosa para compreender suas necessidades, orientar e acompanhar sua saúde.",
    icon: Stethoscope,
  },
  {
    index: "02",
    title: "Pré-natal",
    description:
      "Acompanhamento atento em cada etapa da gestação, com informação clara e proximidade.",
    icon: Baby,
  },
  {
    index: "03",
    title: "Saúde preventiva",
    description:
      "Cuidado preventivo e avaliações voltadas à saúde feminina ao longo da vida.",
    icon: ShieldCheck,
  },
  {
    index: "04",
    title: "Saúde sexual",
    description:
      "Um espaço seguro para conversar com respeito sobre dúvidas, escolhas e bem-estar.",
    icon: HeartPulse,
  },
  {
    index: "05",
    title: "Menopausa",
    description:
      "Orientação para atravessar a climatopausa com acolhimento e qualidade de vida.",
    icon: Sun,
  },
  {
    index: "06",
    title: "Cuidado integral",
    description:
      "Uma abordagem que olha para a mulher de forma ampla, respeitando sua história.",
    icon: HeartHandshake,
  },
];

const careSteps = [
  {
    number: "01",
    title: "Você compartilha",
    text: "Começamos pela sua história, suas dúvidas e o que é importante para você agora.",
  },
  {
    number: "02",
    title: "A conversa ganha clareza",
    text: "Informações e possibilidades são explicadas de forma respeitosa e compreensível.",
  },
  {
    number: "03",
    title: "O cuidado continua",
    text: "O acompanhamento é pensado para apoiar suas escolhas e sua saúde em cada fase.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a href="#inicio" className="brand" aria-label="Ir para o início">
            <img
              src="/manus-storage/dra-anne-monograma_f950f555.png"
              alt="Monograma AG da Dra. Anne"
              className="brand-mark"
            />
            <span className="brand-copy">
              <strong>Dra. Anne</strong>
              <small>Ginecologia &amp; Obstetrícia</small>
            </span>
          </a>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <a href="#especialidades" onClick={closeMenu}>Especialidades</a>
            <a href="#cuidado" onClick={closeMenu}>Meu cuidado</a>
            <a href="#instagram" onClick={closeMenu}>Instagram</a>
          </nav>

          <a className="header-cta" href={LINKTREE_URL} target="_blank" rel="noreferrer">
            Agendar consulta <ArrowUpRight size={16} />
          </a>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fechar navegação" : "Abrir navegação"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span /> Ginecologia com ciência e delicadeza</div>
              <h1>
                Seu cuidado merece <em>tempo, escuta</em> e clareza.
              </h1>
              <p className="hero-intro">
                Dra. Annelise Galdino Luciano é ginecologista e obstetra. Em cada consulta,
                acolhe a saúde feminina com olhar integral, humano e responsável.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={LINKTREE_URL} target="_blank" rel="noreferrer">
                  <CalendarDays size={18} /> Agendar pelo Instagram
                </a>
                <a className="text-link" href="#especialidades">
                  Conheça as especialidades <ArrowRight size={17} />
                </a>
              </div>
              <div className="hero-footnote">
                <div className="petal-seal" aria-hidden="true"><Sparkles size={18} /></div>
                <p><strong>Telêmaco Borba · PR</strong><br />Informações e agendamentos pelos canais oficiais.</p>
              </div>
            </div>

            <div className="hero-visual reveal reveal-delay" aria-label="Ambiente de consultório acolhedor">
              <div className="hero-arch">
                <img
                  src="/manus-storage/dra-anne-hero-consultorio_1fc4f4fd.jpg"
                  alt="Ambiente acolhedor de consultório em tons claros"
                />
              </div>
              <div className="hero-caption">
                <span>Saúde da mulher</span>
                <span>com presença</span>
              </div>
              <div className="hero-linework" aria-hidden="true" />
            </div>
          </div>
          <a href="#sobre" className="scroll-cue" aria-label="Explorar o conteúdo">
            <span>Conheça a Dra. Anne</span><ChevronDown size={17} />
          </a>
        </section>

        <section id="sobre" className="about-section">
          <div className="section-rail"><span>Escuta</span><i /></div>
          <div className="about-grid">
            <div className="about-visual reveal">
              <div className="about-image-frame">
                <img
                  src="/manus-storage/dra-anne-retrato-editorial_1e51b5f4.jpg"
                  alt="Dra. Anne em seu consultório, em fotografia publicada no perfil oficial"
                />
              </div>
              <div className="about-note">
                <span>Para cada fase,</span>
                <strong>um cuidado<br />possível.</strong>
              </div>
            </div>
            <div className="about-copy reveal reveal-delay">
              <p className="kicker">Sobre a Dra. Anne</p>
              <h2>Cuidar também é <em>ouvir sem pressa.</em></h2>
              <p>
                A Dra. Anne acredita que uma boa consulta nasce da confiança. Sua prática une
                conhecimento em ginecologia e obstetrícia a uma presença acolhedora, respeitando
                a individualidade de cada mulher.
              </p>
              <p>
                Da prevenção à menopausa, do planejamento à gestação, o objetivo é tornar o cuidado
                mais compreensível e próximo da sua realidade.
              </p>
              <ul className="check-list">
                <li><Check size={17} /> Atendimento humanizado e individualizado</li>
                <li><Check size={17} /> Orientações claras para decisões conscientes</li>
                <li><Check size={17} /> Olhar integral para a saúde feminina</li>
              </ul>
              <a className="text-link plum-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Conheça mais da sua trajetória <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section id="especialidades" className="services-section">
          <div className="services-heading reveal">
            <div>
              <p className="kicker">Especialidades</p>
              <h2>Um cuidado que acompanha os seus <em>ciclos.</em></h2>
            </div>
            <p>
              Cada fase traz perguntas diferentes. O consultório é um espaço para conversar,
              prevenir e cuidar com informação responsável.
            </p>
          </div>
          <div className="service-grid">
            {services.map(({ index, title, description, icon: Icon }) => (
              <article className="service-card" key={index}>
                <div className="service-number">{index}</div>
                <div className="service-petal" aria-hidden="true" />
                <Icon className="service-icon" size={25} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={LINKTREE_URL} target="_blank" rel="noreferrer" aria-label={`Solicitar informações sobre ${title}`}>
                  <ArrowUpRight size={19} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="cuidado" className="care-section">
          <div className="care-image reveal">
            <img
              src="/manus-storage/dra-anne-servicos_fc0f0106.jpg"
              alt="Espaço de consulta sereno com móveis em tons neutros"
            />
            <div className="care-image-quote">“Uma consulta para cuidar da sua saúde e da sua história.”</div>
          </div>
          <div className="care-content reveal reveal-delay">
            <p className="kicker">O seu caminho de cuidado</p>
            <h2>Uma consulta que começa pela <em>sua história.</em></h2>
            <div className="care-steps">
              {careSteps.map((step) => (
                <div className="care-step" key={step.number}>
                  <span>{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </div>
              ))}
            </div>
            <a className="button button-outline" href={LINKTREE_URL} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Tirar uma dúvida sobre agendamento
            </a>
          </div>
        </section>

        <section id="instagram" className="instagram-section">
          <div className="instagram-intro reveal">
            <div className="instagram-icon"><Instagram size={21} /></div>
            <p className="kicker">Conteúdo que aproxima</p>
            <h2>Informação confiável para o seu dia a dia.</h2>
            <p>
              No Instagram, a Dra. Anne compartilha conteúdos sobre saúde íntima, menopausa,
              gestação, prevenção e qualidade de vida.
            </p>
            <a className="button button-dark" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <Instagram size={18} /> Seguir @draanneginecologista
            </a>
          </div>
          <div className="instagram-panel reveal reveal-delay">
            <div className="profile-mini">
              <img src="/manus-storage/dra-anne-perfil_a3a3239a.jpg" alt="Foto de perfil da Dra. Anne" />
              <div><strong>draanneginecologista</strong><span>Ginecologia &amp; Obstetrícia</span></div>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Abrir Instagram"><ArrowUpRight size={18} /></a>
            </div>
            <img className="instagram-signature" src="/manus-storage/dra-anne-logo-extraida_50c88e9e.jpg" alt="Assinatura visual AG identificada em publicação do perfil oficial" />
            <div className="instagram-posts">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="instagram-post post-maternity">
                <img src="/manus-storage/instagram-1_5584ac69.jpg" alt="Publicação do Instagram sobre maternidade" />
                <span>Gestação</span>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="instagram-post post-experiences">
                <img src="/manus-storage/instagram-2_72e9981d.jpg" alt="Publicação do Instagram sobre experiências na gestação" />
                <span>Conteúdos</span>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="instagram-post post-profile">
                <img src="/manus-storage/instagram-3_fd94f863.jpg" alt="Publicação profissional com a Dra. Anne no consultório" />
                <span>Consultório</span>
              </a>
            </div>
            <p className="panel-note">Acompanhe as atualizações e os destaques diretamente no perfil oficial.</p>
          </div>
        </section>

        <section className="booking-section">
          <div className="booking-pattern" aria-hidden="true" />
          <div className="booking-content reveal">
            <div className="booking-symbol"><img src="/manus-storage/dra-anne-monograma_f950f555.png" alt="" /></div>
            <p className="kicker">Vamos conversar?</p>
            <h2>Um espaço seguro para cuidar de <em>você.</em></h2>
            <p>
              Para informações, disponibilidade e agendamento, acesse os canais oficiais da Dra. Anne.
            </p>
            <div className="booking-actions">
              <a className="button button-plum" href={LINKTREE_URL} target="_blank" rel="noreferrer">
                <CalendarDays size={18} /> Consultar agendamento
              </a>
              <a className="booking-instagram" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <Instagram size={18} /> Instagram oficial
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a href="#inicio" className="brand footer-brand" aria-label="Ir para o início">
            <img src="/manus-storage/dra-anne-monograma_f950f555.png" alt="Monograma da Dra. Anne" className="brand-mark" />
            <span className="brand-copy"><strong>Dra. Anne</strong><small>Ginecologia &amp; Obstetrícia</small></span>
          </a>
          <p>Ginecologia com ciência e delicadeza.<br />Telêmaco Borba · PR</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="footer-social"><Instagram size={18} /> @draanneginecologista</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Dra. Anne. Todos os direitos reservados.</span>
          <span>Este site oferece informações educativas e não substitui uma consulta médica.</span>
        </div>
      </footer>

      <a className="floating-contact" href={LINKTREE_URL} target="_blank" rel="noreferrer" aria-label="Abrir opções de agendamento">
        <CalendarDays size={20} /><span>Agendar</span>
      </a>
    </div>
  );
}
