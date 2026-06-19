import { Megaphone } from "lucide-react";
import { cn } from "@/lib/cn";

type AdBannerProps = {
  slot?: string;
  format?: "horizontal" | "rectangle" | "sidebar";
  className?: string;
  label?: string;
};

const formatStyles = {
  horizontal: "min-h-[90px] sm:min-h-[120px]",
  rectangle: "min-h-[250px]",
  sidebar: "min-h-[300px] sm:min-h-[600px]",
};

export function AdBanner({
  slot = "placeholder",
  format = "horizontal",
  className,
  label = "Espaço reservado para anúncio",
}: AdBannerProps) {
  return (
    <aside
      role="complementary"
      aria-label={label}
      data-ad-slot={slot}
      className={cn(
        "flex items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50",
        formatStyles[format],
        className
      )}
    >
      <div className="flex flex-col items-center text-center px-4 py-6">
        <Megaphone className="h-6 w-6 text-slate-300 mb-2" aria-hidden="true" />
        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
          Publicidade
        </p>
        <p className="mt-1 text-sm text-slate-500">{label}</p>
        <p className="mt-1 text-xs text-slate-400">AdSense — slot: {slot}</p>
      </div>
    </aside>
  );
}
