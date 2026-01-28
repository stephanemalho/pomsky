import Link from 'next/link';
import { AlertCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page non trouvée - Royal POMSKY',
    description: 'La page que tu cherches n\'existe pas.',
};

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-muted/30">
            <div className="max-w-md w-full text-center space-y-6">
                {/* Icône */}
                <div className="flex justify-center">
                    <AlertCircle className="h-16 w-16 text-muted-foreground" />
                </div>

                {/* Titre et description */}
                <div className="space-y-2">
                    <h1 className="text-5xl font-bold">404</h1>
                    <p className="text-muted-foreground text-lg">
                        La page que tu cherches n'existe pas ou a été supprimée.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                    <Link
                        href="/"
                        className="bg-primary hover:bg-primary/80 text-white dark:text-[#5b3a1a] font-semibold py-3 px-6 rounded-md transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        Retour à l'accueil
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-muted hover:bg-muted/80 text-foreground font-semibold py-3 px-6 rounded-md transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        Nous contacter
                    </Link>
                </div>

                {/* Suggestions */}
                <div className="pt-4 border-t border-muted text-sm text-muted-foreground">
                    <p className="mb-3">Ou explore nos sections :</p>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/chiots-disponibles" className="text-primary hover:underline">
                                Nos chiots disponibles
                            </Link>
                        </li>
                        <li>
                            <Link href="/femelles-reproductrices" className="text-primary hover:underline">
                                Nos reproducteurs
                            </Link>
                        </li>
                        <li>
                            <Link href="/presentation-elevage" className="text-primary hover:underline">
                                À propos de nous
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
