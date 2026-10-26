# Suicide Crew — site officiel

Première version statique du site officiel de l’équipe e-sport **SUICIDE CREW** sur Honor of Kings.

## Lancer localement

Le projet ne dépend d’aucune bibliothèque. Ouvre `index.html` directement dans un navigateur, ou lance un serveur statique :

```bash
python3 -m http.server 3000
```

Puis ouvre `http://localhost:3000`.

## Structure

- `index.html` — accueil et sections de démonstration
- `css/style.css` — identité visuelle responsive
- `js/app.js` — interactions de démonstration
- `assets/` — emplacement des vrais médias
- `pages/` — futures pages autonomes

Les résultats et statistiques affichés sont fictifs et servent uniquement à illustrer la maquette. L’espace membre présent est une interface de démonstration : une authentification sécurisée devra être développée côté serveur avec Django.
