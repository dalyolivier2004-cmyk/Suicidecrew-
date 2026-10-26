from pathlib import Path

page = Path("pages/matchs.html")
html = page.read_text(encoding="utf-8")

ancien = '''      function updateCountdown() {
        const remaining = target - Date.now();

        if (remaining <= 0) {
          countdown.innerHTML = "<p>Le coup d'envoi est passé. Résultat à mettre à jour après le match.</p>";
          status.textContent = "MATCH EN COURS OU TERMINÉ";
          return;
        }'''

nouveau = '''      let timer = null;

      function updateCountdown() {
        const remaining = target - Date.now();

        if (remaining <= 0) {
          countdown.innerHTML = "<p>Le coup d'envoi prévu est passé. Résultat à confirmer.</p>";
          status.textContent = "EN ATTENTE DU RÉSULTAT";
          if (timer !== null) {
            clearInterval(timer);
            timer = null;
          }
          return;
        }'''

ancien_fin = '''      updateCountdown();
      setInterval(updateCountdown, 1000);'''

nouveau_fin = '''      updateCountdown();
      if (Date.now() < target) {
        timer = setInterval(updateCountdown, 1000);
      }'''

if html.count(ancien) != 1 or html.count(ancien_fin) != 1:
    print("ARRÊT : le code attendu n'a pas été trouvé exactement une fois.")
    print("La page originale n'a pas été modifiée.")
    raise SystemExit(1)

html = html.replace(ancien, nouveau, 1)
html = html.replace(ancien_fin, nouveau_fin, 1)
page.write_text(html, encoding="utf-8")

print("Correction appliquée avec succès.")
