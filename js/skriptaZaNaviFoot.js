function ucitajElemente() {
  // ucitavam navigaciju
  fetch('nav.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('nav-placeholder').innerHTML = data;

      //logika za hamburger meni
      const hamburger = document.getElementById("hamburger-dugme");
      const navMeni = document.getElementById("nav-meni");

      if (hamburger && navMeni) {
        hamburger.addEventListener("click", function() {
          hamburger.classList.toggle("otvoren"); // pravi 'X' animaciju
          navMeni.classList.toggle("aktivan");   // pomera meni na ekran
        });

        // zatvara meni kada se klikne na bilo koji link unutra
        const linkovi = navMeni.querySelectorAll("a");
        linkovi.forEach(link => {
          link.addEventListener("click", function() {
            hamburger.classList.remove("otvoren");
            navMeni.classList.remove("aktivan");
          });
        });
      }
    });

  // ucitavanje futera
  fetch('footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
}

// pokrece se funkcija kada se ucita stranica
ucitajElemente();
