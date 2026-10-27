"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="section-glow relative flex min-h-[85vh] items-center overflow-hidden pt-16"
    >
      <Container className="grid items-center gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated px-3 py-1 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {t("available")}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t("greeting")}{" "}
              <span className="text-gradient">{t("name")}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-3 font-mono text-base text-accent-2 sm:text-lg">
              {t("role")}
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("tagline")}
            </p>
          </Reveal>

          <Reveal delay={0.34}>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent-strong px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:brightness-110"
              >
                {t("ctaProjects")}
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {t("ctaContact")}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.42}>
            <div className="mt-7 flex items-center gap-5 text-muted-foreground">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="hidden lg:block">
          <div className="rounded-2xl border border-border bg-background-elevated shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                test-suite.spec.ts
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-muted-foreground">
              <code>
                <span className="text-accent-2">describe</span>
                {"("}
                <span className="text-emerald-300">
                  &apos;checkout flow&apos;
                </span>
                {", () => {"}
                {"\n  "}
                <span className="text-accent-2">it</span>
                {"("}
                <span className="text-emerald-300">
                  &apos;completes purchase&apos;
                </span>
                {", () => {"}
                {"\n    "}cy.visit(
                <span className="text-emerald-300">&apos;/cart&apos;</span>
                {")"}
                {"\n    "}cy.get(
                <span className="text-emerald-300">
                  &apos;[data-cy=checkout]&apos;
                </span>
                {").click()"}
                {"\n    "}cy.contains(
                <span className="text-emerald-300">
                  &apos;Order confirmed&apos;
                </span>
                {")"}
                {"\n  "}
                {"})"}
                {"\n"}
                {"})"}
                {"\n\n"}
                <span className="text-emerald-400">✓ 24 passing</span>
                {"  "}
                <span className="text-muted-foreground">(1.8s)</span>
              </code>
            </pre>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
