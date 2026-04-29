import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

const whatsappNacoes =
  "https://wa.me/5511941144832?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Jones%20Idiomas%20Para%20as%20Na%C3%A7%C3%B5es%20%F0%9F%8C%8D";

export const metadata: Metadata = {
  title: "Jones Idiomas Para as Nacoes",
  description:
    "Projeto de preparacao linguistica missionaria para servir com clareza, excelencia e proposito.",
};

export default function NacoesPage() {
  return (
    <div className="bg-[color:var(--branco)]">
      <SiteHeader
        items={[
          { href: "#n-sobre", label: "Sobre" },
          { href: "#n-como", label: "Como funciona" },
          { href: "#n-interesse", label: "Interesse" },
        ]}
        ctaHref={whatsappNacoes}
        ctaLabel="Quero me preparar"
        switchHref="/"
        switchLabel="Jones Idiomas"
        logoSrc="/images/4-jones-idiomas-para-as-na-es.png"
        logoAlt="Jones Idiomas Para as Nações"
      />

      <main className="pt-24">
        <section className="bg-[color:var(--vinho-deep)] px-6 py-16 md:px-[60px] md:py-24" id="n-inicio">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
            <p className="section-tag mb-4 inline-block rounded-full border border-[color:var(--dourado)]/40 bg-[color:var(--dourado)]/10 px-4 py-1 text-[color:var(--dourado)]">
              🌍 Missão · Idiomas · Propósito
            </p>
            <h1 className="font-title text-[44px] leading-[1.05] text-[color:var(--creme)] md:text-[68px]">
              Jones Idiomas <em className="text-[color:var(--rosa)]">Para as Nações</em>
            </h1>
            <p className="mt-3 font-title text-2xl italic text-[color:var(--creme)]/80">Preparando vozes para cumprir o chamado</p>
            <p className="mt-5 max-w-[520px] text-[16px] leading-[1.85] font-light text-[color:var(--creme)]/75">
              Um programa especializado para missionários e vocacionados que desejam aprender inglês ou espanhol com propósito — comunicar o evangelho, construir pontes e servir além das fronteiras.
            </p>
            <a
              href={whatsappNacoes}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-[color:var(--rosa)] px-10 py-[17px] text-[15px] font-semibold text-white"
              aria-label="Entrar na lista de interesse para o projeto Para as Nacoes"
            >
              Entrar na lista de interesse
            </a>
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/4-jones-idiomas-para-as-na-es.png"
                alt="Logo Jones Idiomas Para as Nações"
                width={280}
                height={280}
                priority
                className="h-auto w-[220px] lg:w-[280px]"
              />
            </div>
          </div>
        </section>

        <section id="n-sobre" className="px-6 py-[70px] md:px-[60px] md:py-[110px]">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <div>
              <p className="section-tag text-[color:var(--dourado)]">Sobre o projeto</p>
              <h2 className="font-title text-[38px] md:text-[52px]">Idiomas com <em>propósito missionário</em></h2>
              <p className="mt-4 text-[color:var(--vinho)]/75">
                A <i>Jones Idiomas</i> Para as Nações nasceu de uma convicção: quem tem um chamado precisa de uma voz preparada. Não basta querer ir — é preciso poder comunicar, conectar e servir no idioma do outro.
              </p>
              <p className="mt-3 text-[color:var(--vinho)]/75">
                Aqui o ensino de idiomas é inseparável da missão. Cada aula é pensada para situações reais de campo: evangelismo, discipulado, vivência intercultural e construção de relacionamentos genuínos.
              </p>
            </div>
            <div className="rounded-[28px] bg-[color:var(--vinho)] p-10 md:p-[56px] text-[color:var(--creme)]">
              <p className="font-title text-3xl">&quot;Ide por todo o mundo e pregai o evangelho a toda criatura.&quot;</p>
              <p className="mt-2 text-sm text-[color:var(--dourado)]">Marcos 16:15</p>
              <p className="mt-3 text-sm text-[color:var(--creme)]/75">
                Na <i>Jones Idiomas</i> Para as Nações, o idioma não é um fim — é o meio pelo qual o chamado se cumpre. Ensino aplicado, ambiente acolhedor e preparação que vai além das palavras.
              </p>
              <p className="mt-4 inline-block rounded-full border border-[color:var(--dourado)]/40 px-3 py-1 text-xs text-[color:var(--dourado)]">
                🤝 Projeto sem fins lucrativos — o chamado não tem preço
              </p>
            </div>
          </div>
        </section>

        <section id="n-como" className="bg-[color:var(--vinho)] px-6 py-[70px] md:px-[60px] md:py-[110px]">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-title text-center text-[38px] text-[color:var(--creme)] md:text-[52px]">Aulas pensadas <em>para o campo</em></h2>
            <p className="mt-3 text-center text-[color:var(--creme)]/70">100% ao vivo, 100% online, com foco em conversação real e situações missionárias concretas.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { t: "01 · Aulas ao vivo e online", d: "Encontros em tempo real com professora especializada, em turmas pequenas e acolhedoras. Você aprende onde estiver." },
                { t: "02 · Foco em conversação real", d: "Você pratica situações reais: apresentar-se, orar, explicar a fé, navegar em culturas diferentes — desde a primeira aula." },
                { t: "03 · Simulações de campo", d: "Diálogos e situações inspirados em experiências missionárias reais: viagens, hospitais, comunidades, igrejas locais." },
                { t: "04 · Inglês e Espanhol", d: "Os dois idiomas mais usados no campo missionário global, com abordagem contextualizada para cada cultura." },
                { t: "05 · Turmas pequenas", d: "Grupos reduzidos para garantir atenção personalizada e criar uma comunidade de apoio entre os alunos." },
                { t: "06 · 2x por semana", d: "Frequência ideal para evolução consistente — sem sobrecarregar a rotina de quem está em preparação missionária." },
              ].map((item) => (
                <article key={item.t} className="rounded-[22px] border border-[color:var(--pessego)]/20 bg-white/5 px-8 py-10">
                  <h3 className="font-title text-[22px] text-[color:var(--creme)]">{item.t}</h3>
                  <p className="mt-2 text-sm text-[color:var(--creme)]/75">{item.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-[70px] md:px-[60px] md:py-[110px]">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-title text-center text-[38px] md:text-[52px]">Por que é <em>diferente</em></h2>
            <p className="mt-3 text-center text-[color:var(--vinho)]/70">Não ensinamos inglês genérico. Ensinamos o idioma que serve o chamado.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                { t: "🎯 Ensino aplicado à missão", d: "Cada conteúdo é selecionado com contexto missionário em mente. Vocabulário de fé, cultura e serviço desde a primeira aula." },
                { t: "🌐 Preparação intercultural", d: "Além do idioma, trabalhamos sensibilidade cultural — porque comunicar o evangelho exige entender o outro além das palavras." },
                { t: "🎭 Simulações reais de campo", d: "Praticamos situações concretas: evangelismo em praça pública, discipulado em pequenos grupos, pedidos de ajuda, emergências." },
                { t: "🤝 Sem fins lucrativos", d: "Este projeto nasce do chamado, não do lucro. Nosso compromisso é com o Reino — e com cada missionário que precisar de uma voz preparada." },
                { t: "👨‍👩‍👧 A família também ganha", d: "Filhos e cônjuges também têm benefícios para estudar na Jones Idiomas." },
              ].map((item) => (
                <article key={item.t} className="rounded-[22px] border border-[color:var(--vinho)]/10 bg-white px-9 py-10">
                  <p className="font-semibold">{item.t}</p>
                  <p className="mt-2 text-sm text-[color:var(--vinho)]/75">{item.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="n-encontros" className="bg-[color:var(--branco)] px-6 py-[70px] md:px-[60px] md:py-[110px]">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-title text-[38px] md:text-[42px]">Encontros com <em>as Nações</em></h2>
            <p className="mt-3 text-[color:var(--vinho)]/75">
              Uma vez que você estuda aqui, tem acesso a algo único: encontros mensais com missionários reais que estão no campo ou já estiveram — falando no idioma que você estuda, compartilhando a vida que você quer viver.
            </p>
            <div className="mt-6 space-y-2 text-sm text-[color:var(--vinho)]/80">
              <p><strong>1 encontro por mês</strong> com missionários convidados de diferentes campos e nações.</p>
              <p><strong>Conversa no idioma estudado</strong> — inglês ou espanhol, com suporte quando necessário.</p>
              <p><strong>Experiências reais</strong>: cultura, desafios, histórias de fé e vivência no campo missionário.</p>
              <p><strong>Espaço para perguntas</strong> — você interage diretamente com quem já foi, já sabe e já viveu.</p>
            </div>
          </div>
        </section>

        <section id="n-kit" className="px-6 py-[70px] md:px-[60px] md:py-[110px]">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-title text-center text-[38px] md:text-[52px]">Tudo que você precisa <em>para ir preparado</em></h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[color:var(--vinho)]/70">
              Além das aulas e dos Encontros com as Nações, cada aluno recebe um kit completo e acesso às melhores plataformas de estudo.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <article className="rounded-[24px] border border-[color:var(--vinho)]/10 bg-white px-10 py-11">
                <h3 className="font-title text-[26px]">🎒 Kit Físico do Aluno</h3>
                <p className="mt-2 text-sm text-[color:var(--vinho)]/70">Todo aluno recebe um kit completo entregue em casa — porque aprender também acontece fora do computador.</p>
              </article>
              <article className="rounded-[24px] border border-[color:var(--vinho)]/10 bg-white px-10 py-11">
                <h3 className="font-title text-[26px]">💻 Acesso às Plataformas de Estudo</h3>
                <p className="mt-2 text-sm text-[color:var(--vinho)]/70">Você tem acesso a plataformas e ferramentas digitais para praticar no seu ritmo, reforçar o conteúdo e evoluir todos os dias.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="n-quem" className="px-6 py-[70px] md:px-[60px] md:py-[110px]">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-title text-center text-[38px] md:text-[52px]">Você foi <em>chamado?</em></h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                { t: "✈️ Missionários ativos", d: "Que já estão no campo e precisam avançar no idioma para servir melhor." },
                { t: "🙏 Vocacionados", d: "Que sentem o chamado e querem se preparar antes de ir ao campo." },
                { t: "🌎 Viagens missionárias", d: "Que vão em curto prazo e querem se comunicar melhor durante a viagem." },
                { t: "✝️ Igrejas", d: "Se você deseja preparar missionários em sua igreja local." },
              ].map((item) => (
                <article key={item.t} className="rounded-[20px] border border-[color:var(--vinho)]/10 bg-white px-6 py-9">
                  <p className="font-semibold">{item.t}</p>
                  <p className="mt-2 text-sm text-[color:var(--vinho)]/75">{item.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="n-interesse" className="px-6 py-[70px] md:px-[60px] md:py-[110px]">
          <div className="mx-auto max-w-3xl rounded-[24px] bg-[color:var(--vinho-deep)] p-8 text-center md:p-12">
            <h2 className="font-title text-[38px] text-[color:var(--creme)] md:text-[56px]">O chamado não <em>espera a fluência.</em></h2>
            <p className="mt-3 text-[color:var(--creme)]/70">
              Mas a preparação faz toda a diferença. Entre em contato e seja o primeiro a saber quando as turmas abrirem.
            </p>
            <a
              href={whatsappNacoes}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-[color:var(--rosa)] px-6 py-3 font-semibold text-white"
              aria-label="Falar no WhatsApp sobre o projeto Para as Nacoes"
            >
              ✨ Entrar na lista de interesse
            </a>
            <p className="mt-4 text-xs text-[color:var(--creme)]/60">Sem compromisso · Vagas limitadas por turma · Sem fins lucrativos</p>
          </div>
        </section>

        <footer className="bg-[#1a0510] px-4 py-8 text-[color:var(--creme)]/70 md:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
            <Image
              src="/images/5-jones-idiomas-para-as-na-es.png"
              alt="Jones Idiomas Para as Nações"
              width={150}
              height={42}
              className="h-10 w-auto"
            />
            <p className="text-sm">© 2026 Jones Idiomas Para as Nações · Projeto sem fins lucrativos</p>
            <Link href="/" className="text-sm text-[color:var(--dourado)] hover:text-[color:var(--pessego)]">
              ← Voltar para Jones Idiomas
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
