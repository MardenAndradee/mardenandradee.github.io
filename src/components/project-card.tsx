"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, Code2, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  images: string[];
  repoUrl: string;
  demoUrl: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("projects");
  const [index, setIndex] = useState(0);
  const hasImages = project.images.length > 0;

  const next = () => setIndex((i) => (i + 1) % project.images.length);
  const prev = () =>
    setIndex((i) => (i - 1 + project.images.length) % project.images.length);

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background-elevated transition-colors hover:border-border-strong">
      <div className="relative aspect-video overflow-hidden border-b border-border bg-gradient-to-br from-accent/15 via-background-elevated to-accent-2/15">
        {hasImages ? (
          <>
            <Image
              src={project.images[index]}
              alt={project.title}
              fill
              className="object-cover object-left-top"
            />
            {project.images.length > 1 ? (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <ChevronRight size={16} />
                </button>
                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {project.images.map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "h-1.5 w-1.5 rounded-full transition-colors",
                        i === index ? "bg-white" : "bg-white/40"
                      )}
                    />
                  ))}
                </div>
              </>
            ) : null}
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Code2 className="text-foreground/20" size={40} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-foreground">
            {project.title}
          </h3>
          {(project.repoUrl || project.demoUrl) && (
            <div className="flex shrink-0 items-center gap-3 pt-0.5 text-muted-foreground">
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t("viewCode")}
                  title={t("viewCode")}
                  className="transition-colors hover:text-foreground"
                >
                  <GithubIcon size={16} />
                </a>
              ) : null}
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t("viewDemo")}
                  title={t("viewDemo")}
                  className="transition-colors hover:text-foreground"
                >
                  <ExternalLink size={16} />
                </a>
              ) : null}
            </div>
          )}
        </div>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-xs text-accent-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
