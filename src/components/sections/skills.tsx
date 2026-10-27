"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { techIcons } from "@/components/tech-icons";

type Category = { name: string; items: string[] };

export function Skills() {
  const t = useTranslations("skills");
  const categories = t.raw("categories") as Category[];

  return (
    <section id="skills" className="border-t border-border py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <Reveal key={category.name} delay={i * 0.05}>
              <div className="h-full rounded-lg border border-border bg-background-elevated p-4">
                <h3 className="font-mono text-xs font-medium uppercase tracking-wide text-accent-2">
                  {category.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {category.items.map((item) => {
                    const tech = techIcons[item];
                    const Icon = tech?.icon;
                    return (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                      >
                        {Icon ? (
                          <Icon size={13} style={{ color: tech.color }} aria-hidden="true" />
                        ) : null}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
