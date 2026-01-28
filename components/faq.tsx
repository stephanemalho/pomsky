import { ChevronDown, PawPrint } from "lucide-react"
import type { ReactNode } from "react"

export type FAQItem = {
  question: string
  answer: ReactNode
}

type FAQSectionProps = {
  title: string
  description?: string
  items: FAQItem[]
}

export function FAQSection({ title, description, items }: FAQSectionProps) {
  return (
    <section className="container mx-auto my-16">
      <div className="text-center mb-10 space-y-3">
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        {description ? (
          <p className="text-muted-foreground max-w-3xl mx-auto">{description}</p>
        ) : null}
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-muted bg-muted/40 p-5 transition hover:border-primary/50 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary"
          >
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none rounded px-2 py-1 -mx-2 -my-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-primary/10 p-2 text-primary" aria-hidden="true">
                  <PawPrint className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-semibold">{item.question}</span>
              </div>
              <ChevronDown
                className="h-4 w-4 text-muted-foreground transition duration-200 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>

            <div className="mt-3 pl-11 text-muted-foreground leading-relaxed space-y-3">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
