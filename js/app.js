document.addEventListener('DOMContentLoaded', () => {
  const mreza = document.getElementById('portfolio-grid');

  if(mreza && typeof projekti !== 'undefined') {
    mreza.innerHTML = '';

    projekti.forEach(projekt => {
      const kartica = `
                <a href="${projekt.link}" target="_blank" class="portfolio-link">
                    <div class="portfolio-kartica">
                        <div class="kontejner-slike">
                            <img src="${projekt.slika}" alt="${projekt.naslov}">
                        </div>
                        <div class="sadrzaj-kartice">
                            <span class="kategorija">${projekt.kategorija}</span>
                            <h3>${projekt.naslov}</h3>
                            <p>${projekt.opis}</p>
                            <div class="dugme-akcija">
                                Pogledaj projekat <span>→</span>
                            </div>
                        </div>
                    </div>
                </a>
            `;
      mreza.innerHTML += kartica;
    });
  }
});
/*isto ne radi nego tek treba */
