"use client";

import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { RouteFaq } from "@/data/routes";

type RouteFaqProps = {
  items: RouteFaq[];
};

export function RouteFaq({ items }: RouteFaqProps) {
  return (
    <section aria-labelledby="faq-heading">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="h-5 w-5 text-primary" aria-hidden="true" />
        <h2 id="faq-heading" className="text-xl font-bold text-slate-900">
          Perguntas frequentes
        </h2>
      </div>
      <Accordion
        type="single"
        collapsible
        className="rounded-xl border border-slate-200 bg-white px-4"
      >
        {items.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger>{item.q}</AccordionTrigger>
            <AccordionContent>{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
