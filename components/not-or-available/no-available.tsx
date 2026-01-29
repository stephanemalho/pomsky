import { PawPrint } from 'lucide-react'

function NoAvailable() {
    return (
        <section className="max-w-4xl mx-auto bg-muted/30 border border-muted rounded-2xl p-8 md:p-10 space-y-6 text-left mb-12">
            <div className="flex items-start gap-3">
                <PawPrint className="text-2xl text-primary" aria-hidden="true" />
                <div>
                    <h2
                        className="text-xl md:text-2xl font-semibold leading-tight">Pas de chiots disponibles pour le moment</h2>
                    <p className="text-muted-foreground mt-2">
                        À l&apos;heure actuelle, aucun chiot n&apos;est disponible.
                    </p>
                </div>
            </div>
            <p className="text-muted-foreground">
                Les prochaines naissances sont prévues courant 2026, conformément à notre vision d&apos;un élevage
                raisonné, où la qualité prime toujours sur la quantité. Nous choisissons de limiter volontairement
                le nombre de portées afin de pouvoir offrir à chaque chiot :
            </p>
            <div className="grid gap-3">
                {[
                    "un départ dans la vie serein et sécurisé,",
                    "une socialisation précoce soignée,",
                    "une attention individuelle,",
                    "et un environnement riche, doux et structurant.",
                ].map((item) => (
                    <div key={item} className="flex gap-4 items-center">
                        <div className="rounded-full bg-primary/10 p-2 text-primary" aria-hidden="true">
                            <PawPrint className="h-4 w-4" />
                        </div>
                        <p className="text-muted-foreground">{item}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default NoAvailable
