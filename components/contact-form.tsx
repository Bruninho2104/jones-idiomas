"use client";

import { FormEvent } from "react";

export function ContactForm() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const tel = (form.elements.namedItem("tel") as HTMLInputElement).value;
    const msg = (form.elements.namedItem("msg") as HTMLTextAreaElement).value;
    const texto = `Olá! Vim pelo site da Jones Idiomas 😊%0A%0ANome: ${encodeURIComponent(nome)}%0ATelefone: ${encodeURIComponent(tel)}%0AMensagem: ${encodeURIComponent(msg)}`;
    window.open(`https://wa.me/5511941144832?text=${texto}`, "_blank");
  };

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4 text-left">
      <div>
        <label htmlFor="nome" className="mb-2 block text-xs uppercase tracking-wider text-[color:var(--creme)]/70">
          Seu nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          placeholder="Como posso te chamar?"
          className="w-full rounded-xl border border-[color:var(--pessego)]/30 bg-white/10 px-4 py-3 text-[color:var(--creme)] placeholder:text-[color:var(--creme)]/50"
        />
      </div>
      <div>
        <label htmlFor="tel" className="mb-2 block text-xs uppercase tracking-wider text-[color:var(--creme)]/70">
          WhatsApp
        </label>
        <input
          id="tel"
          name="tel"
          type="tel"
          placeholder="(11) 99999-9999"
          className="w-full rounded-xl border border-[color:var(--pessego)]/30 bg-white/10 px-4 py-3 text-[color:var(--creme)] placeholder:text-[color:var(--creme)]/50"
        />
      </div>
      <div>
        <label htmlFor="msg" className="mb-2 block text-xs uppercase tracking-wider text-[color:var(--creme)]/70">
          Mensagem
        </label>
        <textarea
          id="msg"
          name="msg"
          required
          placeholder="Qual idioma te interessa? Qual o seu nível hoje?"
          className="min-h-28 w-full rounded-xl border border-[color:var(--pessego)]/30 bg-white/10 px-4 py-3 text-[color:var(--creme)] placeholder:text-[color:var(--creme)]/50"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-[color:var(--rosa)] px-5 py-3 font-semibold text-white hover:bg-[color:var(--pessego)] hover:text-[color:var(--vinho)]"
      >
        Enviar no WhatsApp
      </button>
    </form>
  );
}
