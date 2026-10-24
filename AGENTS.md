# Consignes du projet

## Branche et synchronisation Git

- Avant toute modification, vérifier la branche courante, l'état du dépôt et sa synchronisation avec `origin`.
- Ne jamais modifier le projet depuis une branche autre que `main` ou `Aurelie` (respecter la casse exacte des branches présentes dans le dépôt).
- La branche de travail doit être à jour avec sa branche distante correspondante (`origin/main` ou `origin/Aurelie`) avant de commencer les changements.
- Si la branche autorisée est en retard sur `origin`, lancer `git pull --ff-only` avant toute modification. Si cette mise à jour échoue, ou si la branche courante n'est pas `main` ou `Aurelie`, s'arrêter avant de modifier et demander à la personne de mettre le dépôt en état conforme ou de changer de branche.
- Ne jamais écraser, réinitialiser ou mettre de côté silencieusement des changements locaux pour effectuer cette synchronisation.

## Règles détaillées

Pour les règles éditoriales et techniques du projet, lire les documents pertinents dans [`regles/`](regles/), notamment [`fiches-chiots-et-redirections.md`](regles/fiches-chiots-et-redirections.md) lors de chaque ajout, retrait ou changement de nom d'un chiot.
