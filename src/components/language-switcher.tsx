"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center rounded-full border border-border bg-background-elevated p-0.5 font-mono text-xs">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => router.replace(pathname, { locale: loc })}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            loc === locale
              ? "bg-accent-strong text-white"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-current={loc === locale}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
