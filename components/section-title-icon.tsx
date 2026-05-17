import type { LucideIcon } from "lucide-react"
import { PawPrint } from "lucide-react"

import { cn } from "@/lib/utils"

type SectionTitleIconProps = {
  icon?: LucideIcon
  className?: string
  iconClassName?: string
}

export function SectionTitleIcon({
  icon: Icon = PawPrint,
  className,
  iconClassName,
}: SectionTitleIconProps) {
  return (
    <span
      className={cn(
        "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary shadow-sm",
        className
      )}
      aria-hidden="true"
    >
      <Icon className={cn("h-5 w-5", iconClassName)} aria-hidden="true" />
    </span>
  )
}
