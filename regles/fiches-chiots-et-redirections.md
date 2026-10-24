# Fiches chiots et redirections

Les fiches individuelles de chiots sont générées à partir des données de
`app/chiots-disponibles/puppies.ts` et leur URL utilise le slug du nom.
Les redirections permanentes sont définies dans `next.config.ts`.

## Ajouter ou renommer un chiot

- Calculer le slug qui sera utilisé par la fiche et vérifier dans `next.config.ts`
  qu'il n'est pas déjà présent comme `source` d'une redirection.
- Si une ancienne redirection utilise ce slug, la retirer ou la remplacer afin
  que la nouvelle fiche soit accessible. Une règle de redirection prioritaire
  peut sinon détourner la nouvelle URL vers une autre page.
- Vérifier aussi les anciens noms et les variantes de slug pertinentes avant de
  publier une fiche renommée.

## Retirer un chiot

- Avant de retirer un chiot de `app/chiots-disponibles/puppies.ts`, relever le
  slug de sa fiche individuelle (`/chiots-disponibles/<slug>`).
- Dans le même changement, ajouter ou mettre à jour une redirection permanente
  dans `next.config.ts` pour chaque ancienne URL de fiche retirée. Ne jamais
  supprimer une fiche sans traiter son URL historique.
- Rediriger vers la fiche d'un chiot actuellement disponible présentant les
  caractéristiques les plus proches, en priorité la même couleur, si un tel
  chiot existe et est encore disponible.
- Sinon, rediriger vers `/chiots-disponibles`.
- Ne pas rediriger vers une fiche réservée, adoptée ou retirée. Vérifier la
  destination dans les données actuelles avant de choisir la redirection.
- Préserver les redirections existantes. Pour une URL retirée mais inconnue des
  données actuelles, rechercher dans l'historique Git, les anciennes URL, les
  rapports Google Search Console ou les journaux disponibles avant de conclure
  qu'il n'y a rien à ajouter.
- Vérifier toutes les destinations de redirections de chiots à chaque
  modification : elles ne doivent pas pointer vers une ancienne fiche qui
  n'existe plus. Si la destination est retirée, choisir une fiche disponible
  appropriée ou `/chiots-disponibles`.
- Avant de terminer, comparer les sources de redirection avec les slugs des
  fiches actuelles. Toute collision doit être résolue en retirant la règle
  obsolète ou en modifiant explicitement la redirection concernée.
- Inclure dans le compte rendu les anciennes URLs traitées et leurs
  destinations. Vérifier que les règles ne créent ni chaîne ni boucle.
