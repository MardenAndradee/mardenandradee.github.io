"use client";

import { useTranslations } from "next-intl";
import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="section-glow relative border-t border-border py-16 sm:py-20"
    >
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <span className="font-mono text-sm font-medium tracking-wide text-accent">
            {t("eyebrow")}
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            {t("subtitle")}
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-strong px-6 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:brightness-110"
          >
            <Mail size={16} />
            {t("emailCta")}
          </a>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} />
              {t("location")}
            </span>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <GithubIcon size={15} />
              GitHub
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <LinkedinIcon size={15} />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
