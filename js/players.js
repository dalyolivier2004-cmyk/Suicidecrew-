document.addEventListener("DOMContentLoaded", () => {
  const players = window.SC_PLAYERS;

  if (!Array.isArray(players)) {
    console.error("La liste des joueurs est introuvable.");
    return;
  }

  document.querySelectorAll("#equipe-grid, .subpage-grid").forEach((grid) => {
    const isHome = grid.id === "equipe-grid";

    grid.innerHTML = players.map((player, index) => {
      const stats = player.stats || {};
      const matches = Number(stats.matchesRecorded || 0);
      const wins = Number(stats.wins || 0);
      const losses = Number(stats.losses || 0);
      const winRate = matches > 0 ? Math.round((wins / matches) * 100) : null;

      const heroes = Array.isArray(player.heroes) && player.heroes.length
        ? player.heroes.map(hero => `<span class="sc-hero-tag">${hero}</span>`).join("")
        : '<span class="sc-muted">À renseigner</span>';

      const statistics = matches > 0
        ? `<div class="sc-player-numbers">
             <span><b>${wins}</b> victoires</span>
             <span><b>${losses}</b> défaites</span>
             <span><b>${winRate}%</b> de victoires</span>
           </div>`
        : '<p class="sc-pending">Statistiques : en attente de résultats</p>';

      return `
        <article class="player-card sc-player-card${isHome && index === 0 ? " featured" : ""}">
          <div class="player-portrait ${player.portrait}">
            <span>${player.initials}</span>
          </div>
          <div class="player-info">
            <span class="role">${player.role}</span>
            <h3>${player.name}</h3>
            <p>${player.bio}</p>
            <div class="sc-player-details">
              <div class="sc-player-section">
                <span class="sc-player-label">HÉROS PRINCIPAUX</span>
                <div class="sc-hero-list">${heroes}</div>
              </div>
              <div class="sc-player-section">
                <span class="sc-player-label">PERFORMANCES</span>
                ${statistics}
              </div>
            </div>
          </div>
          <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
        </article>
      `;
    }).join("");
  });
});
