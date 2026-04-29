"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  items: NavItem[];
  ctaHref: string;
  ctaLabel: string;
  switchHref?: string;
  switchLabel?: string;
  logoSrc?: string;
  logoAlt?: string;
};

export function SiteHeader({
  items,
  ctaHref,
  ctaLabel,
  switchHref,
  switchLabel,
  logoSrc = "/images/1-jones-idiomas.jpg",
  logoAlt = "Jones Idiomas",
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[color:var(--vinho-deep)]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-1" aria-label="Menu principal">
        <Link href="/" className="inline-flex items-center" aria-label="Ir para página inicial">
          <Image src={logoSrc} alt={logoAlt} width={220} height={52} priority className="h-[52px] w-auto" />
        </Link>

        <button
          type="button"
          className="rounded-md border border-[color:var(--rosa)]/40 px-3 py-2 text-sm text-[color:var(--creme)] md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "Fechar" : "Menu"}
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-[12px] tracking-[1.8px] uppercase text-[color:var(--creme)]/80 hover:text-[color:var(--pessego)]">
                {item.label}
              </a>
            </li>
          ))}
          {switchHref && switchLabel ? (
            <li>
              <Link
                href={switchHref}
                className="rounded-full border border-[color:var(--dourado)]/50 px-4 py-2 text-[11px] text-[color:var(--dourado)] hover:bg-[color:var(--dourado)]/10"
              >
                {switchLabel}
              </Link>
            </li>
          ) : null}
          <li>
            <a
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[color:var(--rosa)] px-5 py-2.5 text-[13px] font-semibold text-[color:var(--vinho)] hover:bg-[color:var(--pessego)]"
            >
              {ctaLabel}
            </a>
          </li>
        </ul>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-[color:var(--vinho-deep)] px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-sm text-[color:var(--creme)]/90"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {switchHref && switchLabel ? (
              <li>
                <Link href={switchHref} className="block text-sm text-[color:var(--dourado)]" onClick={() => setOpen(false)}>
                  {switchLabel}
                </Link>
              </li>
            ) : null}
            <li>
              <a
                href={ctaHref}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block rounded-full bg-[color:var(--rosa)] px-4 py-2 text-sm font-semibold text-[color:var(--vinho)]"
              >
                {ctaLabel}
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
