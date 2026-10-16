"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ZoomIn, X } from "lucide-react";

export default function PhotoZoom({ src, alt, compact = false }: { src: string; alt: string; compact?: boolean }) {
    const imageSrc = src.startsWith("/") ? src : `/${src}`;

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button type="button" aria-label={`Zoomer : ${alt}`} className={`absolute bottom-3 left-3 z-10 inline-flex cursor-zoom-in items-center justify-center rounded-full text-foreground transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${compact ? "h-9 w-9 bg-background/65 hover:bg-background/95" : "gap-2 bg-background/95 px-3 py-2 text-xs font-semibold shadow-md ring-1 ring-primary/20 hover:bg-background"}`}>
                    <ZoomIn className="h-4 w-4" aria-hidden="true" />
                    {!compact ? "Zoomer" : null}
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm" />
                <Dialog.Content aria-describedby={undefined} className="fixed left-1/2 top-1/2 z-[101] w-[96vw] -translate-x-1/2 -translate-y-1/2 outline-none">
                    <Dialog.Title className="sr-only">{alt}</Dialog.Title>
                    <div className="flex justify-end pb-3">
                        <Dialog.Close asChild>
                            <button type="button" className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm text-foreground shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                <X className="h-5 w-5" aria-hidden="true" /> Fermer
                            </button>
                        </Dialog.Close>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imageSrc} alt={alt} className="mx-auto max-h-[82dvh] max-w-full object-contain" />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
