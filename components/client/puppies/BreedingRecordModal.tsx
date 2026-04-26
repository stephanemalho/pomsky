"use client"

import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/image"
import { ScrollText, XIcon } from "lucide-react"

type BreedingRecordModalProps = {
  imageSrc: string
  title: string
  description: string
}

export default function BreedingRecordModal({
  imageSrc,
  title,
  description,
}: BreedingRecordModalProps) {
  const [open, setOpen] = React.useState(false)
  const [hoverSuppressed, setHoverSuppressed] = React.useState(false)

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen)

    if (!nextOpen) {
      setHoverSuppressed(true)
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label={title}
          title="Voir la fiche du mariage"
          onMouseEnter={() => {
            if (!hoverSuppressed) {
              setOpen(true)
            }
          }}
          onMouseLeave={() => setHoverSuppressed(false)}
          className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-primary/20 bg-primary/8 text-primary transition hover:border-primary/40 hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ScrollText className="h-4 w-4" aria-hidden="true" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,980px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-primary/15 bg-background shadow-[0_24px_90px_rgba(0,0,0,0.35)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 dark:border-primary/20">
          <div className="flex items-start justify-between gap-4 border-b border-primary/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,240,236,0.9))] px-6 py-5 dark:border-primary/15 dark:bg-[linear-gradient(135deg,rgba(39,19,16,0.98),rgba(64,30,25,0.94))]">
            <div className="space-y-1">
              <Dialog.Title className="text-lg font-semibold text-foreground md:text-2xl">
                {title}
              </Dialog.Title>
              <Dialog.Description className="text-sm text-muted-foreground md:text-base">
                {description}
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-background/80 text-foreground transition hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-primary/20 dark:bg-white/8"
              >
                <XIcon className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">Fermer</span>
              </button>
            </Dialog.Close>
          </div>

          <div className="bg-[radial-gradient(circle_at_top_left,rgba(196,86,55,0.08),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,239,235,0.92))] p-4 dark:bg-[linear-gradient(180deg,rgba(39,19,16,0.98),rgba(28,13,11,0.98))] md:p-6">
            <div className="relative mx-auto aspect-[4/5] max-h-[78vh] w-full overflow-hidden rounded-[1.5rem] border border-primary/12 bg-white shadow-sm dark:border-primary/18 dark:bg-white/5">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 900px, 92vw"
                priority={false}
              />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
