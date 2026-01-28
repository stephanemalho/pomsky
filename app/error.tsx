'use client';

import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Optionnel : logger l'erreur dans un service d'erreur
        console.error('Error:', error);
    }, [error]);

    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-muted/30">
            <div className="max-w-md w-full text-center space-y-6">
                {/* Icône */}
                <div className="flex justify-center">
                    <AlertTriangle className="h-16 w-16 text-destructive" />
                </div>

                {/* Titre et description */}
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold">Oups !</h1>
                    <p className="text-muted-foreground text-lg">
                        Une erreur est survenue. Nous travaillons pour corriger ce problème.
                    </p>
                </div>

                {/* Code erreur (optionnel) */}
                {error.digest && (
                    <div className="bg-muted p-3 rounded-md text-sm text-muted-foreground">
                        <code>Erreur ID: {error.digest}</code>
                    </div>
                )}

                {/* Actions */}
                <div className="flex flex-col gap-3">
                    <button
                        onClick={reset}
                        className="bg-primary hover:bg-primary/80 text-white dark:text-[#5b3a1a] font-semibold py-3 px-6 rounded-md transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        Réessayer
                    </button>
                    <Link
                        href="/"
                        className="bg-muted hover:bg-muted/80 text-foreground font-semibold py-3 px-6 rounded-md transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        Retour à l'accueil
                    </Link>
                </div>

                {/* Contact */}
                <p className="text-sm text-muted-foreground">
                    Le problème persiste ?{' '}
                    <Link href="/contact" className="text-primary hover:underline">
                        Nous contacter
                    </Link>
                </p>
            </div>
        </main>
    );
}
