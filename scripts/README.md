# 🖼️ Scripts de Conversion d'Images

## 📁 Fichiers

-   **`convert-to-webp.js`** : Convertit toutes les images (JPG, JPEG, PNG) en WebP
-   **`update-image-references.js`** : Met à jour automatiquement les références dans le code

## ✅ Garder ces fichiers ?

**OUI**, garde ces scripts ! Ils te seront utiles à chaque fois que tu ajoutes de nouvelles images.

## 🆕 Ajouter de nouvelles images

### Méthode recommandée :

1. **Ajoute tes images** (JPG, PNG, etc.) dans le dossier `/public`
2. **Lance la conversion** :
    ```bash
    npm run convert:webp
    ```
3. **Mets à jour le code** (si tu as déjà utilisé les images dans ton code) :
    ```bash
    npm run update:images
    ```
4. **Supprime les anciennes** (optionnel) : Tu peux supprimer les `.jpg`, `.png` après conversion

### Exemple pratique :

```bash
# Tu ajoutes une nouvelle image "chiot-2025.jpg" dans /public
# Puis tu lances :
npm run convert:webp
# Cela créera automatiquement "chiot-2025.webp"
```

## 🚀 Commandes Disponibles

| Commande                | Description                                                    |
| ----------------------- | -------------------------------------------------------------- |
| `npm run convert:webp`  | Convertit toutes les images en WebP (skip si déjà converti)    |
| `npm run update:images` | Met à jour les références `.jpg`/`.png` → `.webp` dans le code |

## 💡 Workflow recommandé

### Option 1 : Images déjà dans le code

```bash
# 1. Tu écris ton code avec l'ancienne extension
<Image src="/nouvelle-photo.jpg" />

# 2. Tu lances les deux scripts
npm run convert:webp && npm run update:images

# 3. Tout est converti et mis à jour automatiquement !
```

### Option 2 : Images pas encore utilisées (RECOMMANDÉ)

```bash
# 1. Tu ajoutes les images dans /public
# 2. Tu convertis en WebP
npm run convert:webp

# 3. Tu utilises directement .webp dans ton code
<Image src="/nouvelle-photo.webp" />
```

## 📊 Avantages WebP

-   ✅ **79.7% plus léger** que JPG/PNG (dans ton cas)
-   ✅ **Chargement plus rapide** → meilleur SEO
-   ✅ **Qualité préservée** (quality: 85)
-   ✅ **Supporté par tous les navigateurs modernes**

## 🗑️ Supprimer les anciennes images ?

Après conversion, tu peux supprimer les `.jpg`, `.jpeg`, `.png` pour économiser de l'espace :

```bash
# Supprimer toutes les images JPG/PNG (ATTENTION : sauvegarde avant !)
cd public
rm *.jpg *.jpeg *.png
```

Ou garde-les en backup si tu veux !

## 🔧 Configuration

Si tu veux modifier la qualité WebP, édite `convert-to-webp.js` :

```javascript
await sharp(filePath)
    .webp({
        quality: 85, // ← Change cette valeur (0-100)
        effort: 6 // ← Effort de compression (0-6)
    })
    .toFile(webpPath);
```

## ⚠️ Important

-   Les scripts **ne remplacent pas** les fichiers existants (ils créent les `.webp` à côté)
-   Si un `.webp` existe déjà, il est **skippé** automatiquement
-   Les références sont mises à jour dans `app/` et `components/` uniquement

---

**Date de création** : 30 décembre 2025  
**Dernière mise à jour** : 30 décembre 2025
