# Suicide Crew — plan de première livraison

## Approche

La première livraison est une vitrine statique mobile-first en HTML5, CSS3 et JavaScript vanilla. Elle concentre l’expérience sur une page d’accueil immersive, avec des ancres vers les grandes rubriques prévues : équipe, exploits, directs, classement, recrutement et espace membre. Les données présentées sont explicitement des données de démonstration et sont regroupées dans le HTML pour être remplacées facilement.

## Design

- **Mouvement** : e-sport cinématique néo-gothique, inspiré des interfaces de jeux compétitifs et des affiches anime nocturnes.
- **Principes** : contraste rouge/noir très fort, lecture rapide par cartes, hiérarchie éditoriale dramatique, détails techniques discrets.
- **Philosophie couleur** : le noir profond crée le silence et la tension ; le rouge signale l’action, le danger et l’énergie compétitive ; les bleus-gris des surfaces gardent l’interface lisible.
- **Paradigme de mise en page** : composition en diagonales et panneaux asymétriques, avec une ligne de scan rouge qui relie les sections plutôt qu’une grille uniforme.
- **Éléments signature** : bordures angulaires, micro-étiquettes monospace, halos rouges et texture de grille en arrière-plan.
- **Interactions** : les boutons répondent comme des commandes de HUD ; les cartes se soulèvent légèrement et les onglets changent le contexte sans rechargement.
- **Animation** : apparition progressive des sections, pulsation légère des statuts LIVE, balayage lumineux au survol et mouvement lent du décor de héros.
- **Typographie** : Bebas Neue pour les titres et le wordmark ; Inter/Arial pour le corps ; IBM Plex Mono pour les métadonnées.
- **Essence** : une base officielle de team Honor of Kings pour transformer chaque match en chapitre de légende. Personnalité : intense, mystérieuse, précise.
- **Voix** : directe, courte, compétitive. Exemples : « La prochaine bataille commence maintenant. » / « Les résultats parleront pour nous. »
- **Logo** : monogramme SC géométrique dans un blason, accompagné du wordmark condensé.
- **Couleur propriétaire** : rouge signal `#ff162d`, utilisé uniquement pour les actions et moments de tension.

## Structure

- `index.html` : page d’accueil et sections de démonstration.
- `css/style.css` : tokens, layout responsive, composants et animations.
- `js/app.js` : menu mobile, onglets, modal de connexion, formulaire de recrutement et compteurs.
- `pages/` : réservé aux futures pages autonomes Django/HTML.
- `assets/` : réservé aux vrais logos, portraits et captures fournis ultérieurement.
- `manus-routes.json` : routes publiques déclarées pour le preview.
