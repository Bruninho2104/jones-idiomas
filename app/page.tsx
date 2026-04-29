import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { SiteHeader } from "@/components/site-header";

const whatsappMain = "https://wa.me/5511941144832";
const instagram = "https://instagram.com/jones_idiomas";

export const metadata: Metadata = {
  title: "Jones Idiomas | Inglês, Espanhol e Português",
  description:
    "Aulas ao vivo e online para quem quer falar de verdade em inglês, espanhol e português.",
};

export default function HomePage() {
  return (
    <div className="bg-[color:var(--branco)]">
      <SiteHeader
        items={[
          { href: "#sobre", label: "Sobre" },
          { href: "#aulas", label: "Aulas" },
          { href: "#contato", label: "Contato" },
        ]}
        ctaHref={whatsappMain}
        ctaLabel="Quero começar"
        switchHref="/nacoes"
        switchLabel="Para as Nações"
        logoSrc="/images/1-jones-idiomas.jpg"
        logoAlt="Jones Idiomas"
      />

      <main className="pt-20">
        <section className="bg-[color:var(--vinho)] px-6 py-16 md:px-[60px] md:py-40" id="inicio">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
            <p className="section-tag mb-4 inline-block rounded-full border border-[color:var(--rosa)]/40 bg-[color:var(--rosa)]/20 px-4 py-1 text-[color:var(--pessego)]">
              🌍 Inglês · Espanhol · Português
            </p>
            <h1 className="font-title text-[44px] leading-[1.05] text-[color:var(--creme)] md:text-[72px]">
              Você veio aqui para <em className="text-[color:var(--rosa)]">falar.</em>
            </h1>
            <p className="mt-5 max-w-2xl text-[17px] leading-[1.85] text-[color:var(--creme)]/75 font-light">
              Na <i>Jones Idiomas</i>, a fala vem primeiro. Sem enrolação, sem anos esperando — você abre a boca desde a primeira aula.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappMain}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[color:var(--rosa)] px-9 py-[15px] text-[14px] font-semibold text-white"
                aria-label="Falar no WhatsApp para iniciar"
              >
                💬 Quero começar
              </a>
              <a
                href="#aulas"
                className="rounded-full border border-[color:var(--creme)]/40 px-9 py-[15px] text-[14px] text-[color:var(--creme)]"
                aria-label="Ir para secao de aulas"
              >
                Conhecer as aulas
              </a>
            </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/2-jones-idiomas.jpg"
                alt="Identidade visual Jones Idiomas"
                width={340}
                height={340}
                priority
                className="h-auto w-[280px] rounded-2xl shadow-2xl lg:w-[340px]"
              />
            </div>
          </div>
        </section>

        <section id="sobre" className="px-6 py-[70px] md:px-[60px] md:py-[110px]">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <div>
              <p className="section-tag text-[color:var(--rosa)]">Quem somos</p>
              <h2 className="font-title mt-3 text-[38px] leading-[1.12] md:text-[52px]">
                Resultado real, <em>sem enrolação.</em>
              </h2>
              <p className="mt-4 text-[16px] leading-[1.85] font-light text-[color:var(--vinho)]/75">
                A <i>Jones Idiomas</i> nasceu com um propósito claro: mudar a forma como as pessoas aprendem idiomas. Sem teoria infinita antes de abrir a boca.
              </p>
              <div className="mt-8 space-y-4 text-[14px] leading-[1.7] text-[color:var(--vinho)]/80">
                <p><strong>Missão:</strong> Fazer nossos alunos falarem — com confiança, desde a primeira aula.</p>
                <p><strong>Valor:</strong> Resultado real, sem enrolação. Sem anos de teoria antes de abrir a boca.</p>
                <p><strong>Visão:</strong> Ajudar milhares de pessoas a se comunicarem em outro idioma de verdade.</p>
              </div>
            </div>
            <div className="rounded-[28px] bg-[color:var(--vinho)] p-10 md:p-[56px] text-[color:var(--creme)]">
              <p className="font-title text-[26px] leading-[1.5]">A fluência vem praticando, não esperando.</p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-[color:var(--pessego)]/30 p-3">100% aulas ao vivo</div>
                <div className="rounded-xl border border-[color:var(--pessego)]/30 p-3">3 idiomas</div>
                <div className="rounded-xl border border-[color:var(--pessego)]/30 p-3">2x por semana</div>
                <div className="rounded-xl border border-[color:var(--pessego)]/30 p-3">100% online</div>
              </div>
            </div>
          </div>
        </section>

        <section id="kit" className="px-6 py-[70px] md:px-[60px] md:py-[110px]">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-title text-center text-[38px] md:text-[52px]">Muito mais do que <em>aulas</em></h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[color:var(--vinho)]/70">
              Ao se matricular na <i>Jones Idiomas</i>, você recebe tudo que precisa para aprender — dentro e fora da tela.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="rounded-[24px] border border-[color:var(--vinho)]/10 bg-white p-10 md:px-10 md:py-11">
                <h3 className="font-title text-[26px]">🎒 Kit Físico do Aluno</h3>
                <p className="mt-2 text-sm text-[color:var(--vinho)]/70">
                  Todo aluno recebe um kit completo entregue em casa — porque aprender também acontece fora do computador.
                </p>
                <p className="mt-3 text-sm text-[color:var(--vinho)]/80">
                  👜 Ecobag · 📘 Livro · 📓 Caderno · 🖊️ Estojo · 📁 Pasta · ✏️ Lápis · 🖊️ Caneta · 🧹 Borracha · 🔧 Apontador · 🖊️ Marca-texto
                </p>
              </article>
              <article className="rounded-[24px] border border-[color:var(--vinho)]/10 bg-white p-10 md:px-10 md:py-11">
                <h3 className="font-title text-[26px]">💻 Acesso às Plataformas de Estudo</h3>
                <p className="mt-2 text-sm text-[color:var(--vinho)]/70">
                  Além das aulas ao vivo, você tem acesso a plataformas e ferramentas digitais para praticar no seu ritmo, reforçar o conteúdo e evoluir todos os dias.
                </p>
                <p className="mt-3 text-sm text-[color:var(--vinho)]/80">
                  🎯 Plataforma de exercícios · 🎧 Áudios e podcasts · 📄 Material digital · 🎬 Vídeos de apoio · 📊 Área do aluno
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="para-quem" className="px-6 py-[70px] md:px-[60px] md:py-[110px]">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-title text-center text-[38px] md:text-[52px]">Você se <em>reconhece</em> aqui?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[color:var(--vinho)]/70">
              Atendemos adultos, adolescentes e crianças que querem mais do que saber um idioma — querem usá-lo de verdade.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { t: "🗣️ Estudou por anos mas ainda trava na hora de falar", d: "E quer finalmente transformar o que sabe em conversa de verdade." },
                { t: "💼 Profissional que precisa do inglês para crescer", d: "E não pode mais perder oportunidade por falta de fluência na hora H." },
                { t: "✈️ Vai viajar e quer chegar lá pronto para falar", d: "Sem depender de tradutor ou travar na frente de um nativo." },
                { t: "🎓 Quer a certificação Cambridge", d: "E sabe que saber a teoria não é suficiente se a voz não sai na hora da prova." },
                { t: "👦 Crianças e adolescentes aprendendo desde o início", d: "Com metodologia adaptada à idade e acompanhamento próximo para evoluir com segurança." },
                { t: "🌎 Quer se comunicar em outro idioma", d: "Inglês, espanhol ou português — o idioma muda, o método é o mesmo: falar desde o dia um." },
              ].map((item) => (
                <article key={item.t} className="rounded-[20px] border border-[color:var(--vinho)]/10 bg-white px-7 py-9 text-[13.5px] text-[color:var(--vinho)]/80">
                  <p className="font-medium text-[color:var(--vinho)]">{item.t}</p>
                  <p className="mt-2">{item.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="aulas" className="bg-[color:var(--vinho)] px-6 py-[70px] md:px-[60px] md:py-[110px]">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-title text-center text-[38px] text-[color:var(--creme)] md:text-[52px]">Escolha o formato <em>ideal para você</em></h2>
            <p className="mt-3 text-center text-[color:var(--creme)]/70">Inglês e espanhol em todos os formatos. 100% ao vivo, 100% online.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                { t: "Aula Particular", b: "🎯 Particular", d: "Atenção 100% no seu desenvolvimento. Conteúdo, ritmo e objetivos giram em torno de você." },
                { t: "Aula em Dupla", b: "👥 Dupla", d: "Aprenda com um parceiro e evolua o dobro. Conversas naturais desde o início." },
                { t: "Aula em Grupo", b: "🏫 Grupo", d: "Turmas de até 8 alunos para praticar, interagir e desenvolver fluência em ambiente dinâmico." },
                { t: "Preparatório Cambridge", b: "🎓 Cambridge", d: "Para quem quer a certificação até o B2 First. Foco nas quatro habilidades — especialmente a fala." },
              ].map((item) => (
                <article key={item.t} className="rounded-[24px] border border-[color:var(--pessego)]/25 bg-white/5 px-9 py-10">
                  <p className="text-xs uppercase tracking-widest text-[color:var(--pessego)]">{item.b}</p>
                  <h3 className="font-title text-[28px] text-[color:var(--creme)]">{item.t}</h3>
                  <p className="mt-2 text-sm text-[color:var(--creme)]/70">
                    {item.d}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="depoimentos" className="px-6 py-[70px] md:px-[60px] md:py-[110px]">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-title text-center text-[38px] md:text-[52px]">O que nossos <em>alunos dizem</em></h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { text: "Glórias a Deus! Agradecemos de coração por toda a dedicação, carinho e empenho. Todo esforço de vocês dois valeu muito a pena! O resultado é maravilhoso. Estamos muito felizes e emocionados com o fruto de tanto esforço.", author: "Érica", role: "Mãe do Eduardo — aprovado na Cambridge" },
                { text: "Nem sei como te agradecer, por ter tido paciência comigo, ter me ensinado tudo com tanta dedicação. Graças a Deus e você, deu tudo certo! 🥳", author: "Eduardo", role: "Aprovado na prova de proficiência Cambridge" },
                { text: "Perguntei pra Isa sobre as aulas, ela disse que está gostando muito. Ela fica um pouco travada quando não conhece as pessoas — vejo que ela já está se sentindo confortável em conversar com você.", author: "Renata", role: "Mãe da Isa — 1 mês de aula, ótimo desempenho" },
              ].map((dep) => (
                <article key={dep.author} className="rounded-[20px] border border-[color:var(--vinho)]/10 bg-white px-7 py-9 text-[14.5px] text-[color:var(--vinho)]/80">
                  <p>{dep.text}</p>
                  <p className="mt-3 font-semibold text-[color:var(--vinho)]">{dep.author}</p>
                  <p className="text-xs">{dep.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--vinho-deep)] px-6 py-[70px] text-[color:var(--creme)] md:px-[60px] md:py-[80px]">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="section-tag text-[color:var(--dourado)]">🌍 Braço missionário</p>
              <h2 className="font-title mt-2 text-[38px] md:text-[42px]">Jones Idiomas <em>Para as Nações</em></h2>
              <p className="mt-2 max-w-2xl text-sm text-[color:var(--creme)]/70">
                Um programa especializado para missionários e vocacionados que querem aprender inglês ou espanhol com propósito — comunicar o evangelho, construir pontes e servir além das fronteiras. <strong className="text-[color:var(--dourado)]">Sem fins lucrativos.</strong>
              </p>
            </div>
            <Link href="/nacoes" className="rounded-full bg-[color:var(--dourado)] px-6 py-3 font-semibold text-[color:var(--vinho-deep)]">
              Conhecer o projeto →
            </Link>
          </div>
        </section>

        <section id="contato" className="px-6 py-[70px] md:px-[60px] md:py-[110px]">
          <div className="mx-auto max-w-[520px] rounded-[24px] bg-[color:var(--vinho)] px-10 py-11 text-center">
            <h2 className="font-title text-[38px] text-[color:var(--creme)] md:text-[52px]">Pronto para <em>começar a falar?</em></h2>
            <p className="mt-3 text-[color:var(--creme)]/70">
              Entre em contato agora e dê o primeiro passo.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappMain}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white"
                aria-label="Abrir conversa no WhatsApp"
              >
                WhatsApp
              </a>
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[color:var(--rosa)] px-6 py-3 font-semibold text-white"
                aria-label="Abrir perfil no Instagram"
              >
                Instagram
              </a>
            </div>
            <h3 className="font-title mt-8 text-3xl text-[color:var(--creme)]">Manda uma mensagem 👋</h3>
            <ContactForm />
          </div>
        </section>

        <footer className="bg-[color:var(--vinho-deep)] px-4 py-8 text-[color:var(--creme)]/70 md:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
            <Image src="/images/3-jones-idiomas.jpg" alt="Jones Idiomas" width={140} height={36} className="h-9 w-auto" />
            <p className="text-sm">© 2026 Jones Idiomas · Todos os direitos reservados</p>
            <Link href="/nacoes" className="text-sm text-[color:var(--dourado)] hover:text-[color:var(--pessego)]">
              🌍 Para as Nações
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
