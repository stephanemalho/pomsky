# Accessibilité - Améliorations Apportées

## 📋 Résumé des changements

Cet document détaille toutes les améliorations d'accessibilité apportées au site Royal POMSKY pour assurer une expérience inclusive pour tous les utilisateurs, notamment ceux utilisant des lecteurs d'écran et la navigation au clavier.

---

## 🎯 Améliorations par Composant

### 1. **Navigation (`components/navigation.tsx`)**

#### ✅ Améliorations

- **Skip to Main Content**: Ajout d'un lien `<a href="#main-content">` caché mais accessible au clavier
    - Visible au focus avec classe `sr-only focus:not-sr-only`
    - Permet aux utilisateurs de clavier de sauter le contenu répétitif
- **Semantic Navigation**:
    - Ajout d'`aria-label` sur les éléments `<nav>` ("Navigation principale", "Navigation mobile")
    - `aria-current="page"` sur le lien actif pour indiquer la page courante
- **Mobile Menu**:
    - `aria-label="Ouvrir le menu de navigation"` sur le bouton de menu
    - `aria-expanded={isOpen}` pour indiquer l'état du menu
- **Focus Management**:
    - Classes `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary` sur tous les liens
    - Visible focus indicator pour la navigation au clavier
- **Logo Alt Text**: Amélioration du texte alt de l'image logo

---

### 2. **Theme Toggle (`components/theme-toggle.tsx`)**

#### ✅ Améliorations

- **Aria Label**: `aria-label` dynamique indiquant le thème cible
    - "Passer au thème sombre" (en mode clair)
    - "Passer au thème clair" (en mode sombre)
- **Screen Reader Text**: `<span className="sr-only">` pour contexte supplémentaire
- **Focus Indicator**: `focus-visible` styling cohérent

---

### 3. **FAQ Section (`components/faq.tsx`)**

#### ✅ Améliorations

- **Section Landmark**:
    - Utilisation de `<section>` avec `aria-labelledby="faq-title"`
    - `id="faq-title"` sur le titre pour liaison ARIA
- **Interactive Elements**:
    - `aria-expanded="false"` sur les balises `<summary>`
    - Focus visible sur les éléments cliquables
    - Classes `focus-within:outline` pour le feedback visuel
- **Semantic HTML**:
    - Utilisation de `<details>` et `<summary>` (éléments natifs accessibles)
    - Icônes décoratives avec `aria-hidden="true"`

---

### 4. **Footer (`components/footer.tsx`)**

#### ✅ Améliorations

- **Semantic Structure**:
    - `<nav>` pour la section navigation (au lieu de `<div>`)
    - `<address>` pour les informations de contact avec `not-italic`
- **Link Accessibility**:
    - `aria-label` sur les liens email et réseaux sociaux
    - `aria-label="Envoyer un email à exoticperleteckel@gmail.com"`
    - `aria-label="Suivez-nous sur [Plateforme] (lien externe)"`
- **Focus Indicators**: Classes `focus-visible` sur tous les liens
- **Decorative Icons**: `aria-hidden="true"` sur les icônes décoratives

---

### 5. **Pages Principales**

#### **Home Page (`app/page.tsx`)**

- **Main Landmark**:
    - Wrappé dans `<main id="main-content">`
    - Cible du skip link de navigation
- **Section Labels**:
    - `aria-label` sur chaque section majeure
    - "Présentation du service d'élevage"
    - "Présentation de l'élevage Royal POMSKY"
    - "Avantages de la race teckel"
    - "À propos de l'éleveur"
- **Semantic HTML**:
    - `<section>` avec `aria-label` pour chaque zone
    - `<article>` pour les cartes de valeurs
    - Utilisation appropriée des niveaux de titre (h1 → h2 → h3)
- **Button Accessibility**:
    - `focus-visible` styling sur tous les boutons
    - Alt text améliora sur les images
- **Decorative Elements**: `aria-hidden="true"` sur les ornements visuels (barres de couleur)

---

#### **Contact Page (`app/contact/page.tsx`)**

- **Main Landmark**: `<main id="main-content">`
- **Section Organization**:
    - Section principale avec `aria-label="Formulaire de contact"`
    - Elements visuels (`aria-hidden="true"`)
- **Call-to-Action**: Focus visible sur le bouton "Planifier une visite"

---

#### **Nos Chiots Page (`app/chiots-disponibles/page.tsx`)**

- **Main Landmark**: `<main id="main-content">`
- **Section Labels**:
    - `aria-label="Nos chiots"`
    - `aria-label="Statut des chiots"`
    - `aria-label="Liste d'attente"`
- **Decorative Icons**: `aria-hidden="true"` appliqué

---

#### **Présentation Page (`app/presentation-elevage/page.tsx`)**

- **Main Landmark**: `<main id="main-content">`
- **Section Labels**:
    - `aria-label="À propos d'Royal POMSKY"`
    - `aria-label="Notre philosophie"`
    - `aria-label="Nos valeurs"`
    - `aria-label="Nous contacter"`
- **Button Focus**: Styling amélioré avec `focus-visible`

---

#### **Bien-être Animal Page (`app/bien-etre-animal/page.tsx`)**

- **Main Landmark**: `<main id="main-content">`
- **Section Semantics**:
    - `<section>` avec `aria-label` approprié
    - Images avec alt text descriptif
- **Decorative Elements**: `aria-hidden="true"`

---

#### **Nos Reproducteurs Page (`app/femelles-reproductrices/page.tsx`)**

- **Main Landmark**: `<main id="main-content">`
- **Section Labels**: `aria-label="Nos reproducteurs"`

## 🎨 Patterns Appliqués Globalement

### Skip Links

```tsx
<a href="#main-content" className="sr-only focus:not-sr-only ...">
    Aller au contenu principal
</a>
```

### Focus Visible Styling

```tsx
className =
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded";
```

### Semantic Landmarks

- `<header>` pour la navigation
- `<main id="main-content">` pour le contenu principal
- `<footer>` pour le pied de page
- `<section>` avec `aria-label` pour les zones logiques
- `<nav>` pour les menus de navigation
- `<address>` pour les informations de contact

### ARIA Labels & Attributes

- `aria-label`: Étiquettes pour les éléments sans texte visible
- `aria-expanded`: État des menus déroulants
- `aria-current="page"`: Lien actif dans la navigation
- `aria-hidden="true"`: Éléments purement décoratifs
- `aria-labelledby`: Liaison titre-section

### Accessible Form Elements

- Email: `<a href="mailto:...">` avec `aria-label` contextuel
- Téléphone: `<a href="tel:...">` (si présent)

---

## 📱 Navigabilité au Clavier

### ✅ Éléments Testables

- **Tab Navigation**: Tous les éléments interactifs reçoivent le focus dans l'ordre logique
- **Entrée/Espace**: Boutons et détails cliquables
- **Échap**: Fermeture des menus (gérée par le composant Sheet de Radix UI)
- **Focus Visible**: Indicateur visible sur tous les éléments focusables

---

## 🔊 Lecteurs d'Écran

### ✅ Améliorations

- **Navigation**: Annonce correcte des sections et des pages actives
- **Buttons**: Étiquettes claires et contexte fourni
- **Links**: Texte de lien descriptif (pas "Cliquez ici")
- **Icônes**: Décoratives masquées avec `aria-hidden="true"`
- **Formulaires**: Étiquettes associées (email, téléphone)

---

## 🎯 Niveaux de Titre

### ✅ Structure

Tous les niveaux de titre suivent une hiérarchie appropriée:

- **h1**: Titre principal de chaque page (un seul par page)
- **h2**: Titres de section majeure
- **h3**: Sous-titres (utilisés modérément)

---

## 🧪 Recommandations de Test

### Tester avec:

1. **Lecteurs d'écran**:
    - NVDA (gratuit, Windows)
    - JAWS (payant, Windows)
    - VoiceOver (macOS/iOS)
    - TalkBack (Android)

2. **Navigation au clavier**:
    - Aucune souris utilisée
    - Tab pour avancer, Shift+Tab pour reculer
    - Entrée/Espace pour activer

3. **Outils de vérification**:
    - axe DevTools (extension Chrome/Firefox)
    - Lighthouse (Chrome DevTools)
    - WAVE (WebAIM)
    - ColorOracle (contraste des couleurs)

---

## 📊 Statut des Améliorations

| Composant         | Skip Link | ARIA | Focus | Semantique | Statut  |
| ----------------- | --------- | ---- | ----- | ---------- | ------- |
| Navigation        | ✅        | ✅   | ✅    | ✅         | Complet |
| ThemeToggle       | -         | ✅   | ✅    | ✅         | Complet |
| FAQ               | -         | ✅   | ✅    | ✅         | Complet |
| Footer            | -         | ✅   | ✅    | ✅         | Complet |
| Home              | ✅        | ✅   | ✅    | ✅         | Complet |
| Contact           | ✅        | ✅   | ✅    | ✅         | Complet |
| Nos Chiots        | ✅        | ✅   | ✅    | ✅         | Complet |
| Présentation      | ✅        | ✅   | ✅    | ✅         | Complet |
| Bien-être Animal  | ✅        | ✅   | ✅    | ✅         | Complet |
| Nos Reproducteurs | ✅        | ✅   | ✅    | ✅         | Complet |
| Réservations      | ✅        | ✅   | ✅    | ✅         | Complet |

---

## 🚀 Prochaines Étapes (Optionnel)

- [ ] Test complet avec lecteurs d'écran
- [ ] Audit de contraste des couleurs (WCAG AA minimum)
- [ ] Test de navigabilité au clavier
- [ ] Vérification des images avec alt text
- [ ] Test de zoom et de responsive design
- [ ] Vérification des formulaires (s'il y en a)

---

## 📚 Ressources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Radix UI Accessibility](https://www.radix-ui.com/docs/primitives/overview/accessibility)

---

**Date**: Décembre 2025
**Version**: 1.0
**Statut**: Complet
