import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import { FaTiktok } from "react-icons/fa6";
import Image from "next/image"

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t">
            <div className="container py-12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-4">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="h-10 w-10 relative">
                                <Image
                                    src="/logo-royal-pomsky-black.webp"
                                    alt="logo de Royal POMSKY - Elevage de pomsky pour toute la france"
                                    fill
                                    sizes="40px"
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-lg font-bold text-primary">Royal POMSKY</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Elevage Professionel de pomsky Toys, miniatures, et standards dans le Jura (39). Santé, socialisation et accompagnement des familles.
                        </p>
                    </div>

                    <nav>
                        <h3 className="font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/le-pomsky"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Le Pomsky
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/presentation-elevage"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    L&apos;élevage
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/presentation-eleveuses"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Les éleveuses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/femelles-reproductrices"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Nos reproducteurs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/chiots-disponibles"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Nos chiots
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/bien-etre-animal"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Les conditions de vie
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <nav>
                        <h3 className="font-semibold mb-4">Informations légales</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/mentions-legales"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Mentions légales
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/conditions-generales"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Termes &amp; conditions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/politique-de-confidentialite"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1 py-0.5"
                                >
                                    Politique de confidentialité
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <address className="not-italic">
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Jura (39) commune de SAINT AMOUR</li>
                            <li>Visites sur rendez-vous</li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
                                >
                                    Page contact
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="mailto:royal-pomsky@gmail.com"
                                    className="hover:text-primary transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
                                    aria-label="Envoyer un email à royal-pomsky@gmail.com"
                                >
                                    e-mail : royal-pomsky@gmail.com
                                </a>
                            </li>
                        </ul>
                    </address>

                    <div>
                        <h3 className="font-semibold mb-4">Suivez-nous</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/elevageroyalpomsky"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded p-1"
                                aria-label="Suivez-nous sur Facebook (lien externe)"
                            >
                                <Facebook className="h-5 w-5" aria-hidden="true" />
                            </a>
                            <a
                                href="https://www.instagram.com/royalpomsky/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded p-1"
                                aria-label="Suivez-nous sur Instagram (lien externe)"
                            >
                                <Instagram className="h-5 w-5" aria-hidden="true" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@royalpomsky"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded p-1"
                                aria-label="Suivez-nous sur TikTok (lien externe)"
                            >
                                <FaTiktok className="h-5 w-5" aria-hidden="true" />
                            </a>
                            {/* <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded p-1"
                                aria-label="Suivez-nous sur Twitter (lien externe)"
                            >
                                <Twitter className="h-5 w-5" aria-hidden="true" />
                            </a> */}
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2026 Royal POMSKY. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}
