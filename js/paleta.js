
(function() {
  // html prebacivac
  const html = `
    <div class="paleta-prebacivac">
      <label for="paleta-izbor">🎨 Paleta:</label>
      <select id="paleta-izbor">
        <option value="">Default</option>
        <option value="paleta-midnight">Midnight Tech</option>
        <option value="paleta-slate">Slate & Silver</option>
        <option value="paleta-obsidian">Obsidian Gold</option>
        <option value="paleta-marble">Marble</option>
        <option value="paleta-ocean">Ocean Blue</option>
      </select>
    </div>
  `;

  // kreiranje css stilova
  const css = `
    /* Fiksni prebacivač paletа */
    .paleta-prebacivac {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      padding: 15px 20px;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: 'Sora', sans-serif;
    }

    .paleta-prebacivac label {
      font-weight: 600;
      font-size: 0.9rem;
      color: #0c1424;
      margin: 0;
      white-space: nowrap;
    }

    .paleta-prebacivac select {
      padding: 8px 12px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      background: #ffffff;
      color: #0c1424;
      font-family: 'Sora', sans-serif;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      outline: none;
      appearance: none;
      background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%220c1424%22 stroke-width=%222%22%3E%3Cpolyline points=%226 9 12 15 18 9%22%3E%3C/polyline%3E%3C/svg%3E');
      background-repeat: no-repeat;
      background-position: right 8px center;
      background-size: 20px;
      padding-right: 30px;
    }

    .paleta-prebacivac select:hover {
      border-color: #183969;
      box-shadow: 0 4px 12px rgba(24, 57, 105, 0.1);
    }

    .paleta-prebacivac select:focus {
      border-color: #183969;
      box-shadow: 0 0 0 3px rgba(24, 57, 105, 0.15);
    }

    /* Dark mode prebacivač */
    body.paleta-midnight .paleta-prebacivac,
    body.paleta-obsidian .paleta-prebacivac {
      background: rgba(30, 41, 59, 0.95);
    }

    body.paleta-midnight .paleta-prebacivac label,
    body.paleta-obsidian .paleta-prebacivac label {
      color: #f8fafc;
    }

    body.paleta-midnight .paleta-prebacivac select,
    body.paleta-obsidian .paleta-prebacivac select {
      background-color: #1e293b;
      color: #f8fafc;
      border-color: #334155;
      background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22f8fafc%22 stroke-width=%222%22%3E%3Cpolyline points=%226 9 12 15 18 9%22%3E%3C/polyline%3E%3C/svg%3E');
    }

    body.paleta-midnight .paleta-prebacivac select:hover,
    body.paleta-obsidian .paleta-prebacivac select:hover {
      border-color: #60a5fa;
      box-shadow: 0 4px 12px rgba(60, 165, 250, 0.15);
    }

    /* Slate & Silver mode */
    body.paleta-slate .paleta-prebacivac {
      background: rgba(248, 250, 252, 0.95);
    }

    body.paleta-slate .paleta-prebacivac label {
      color: #334155;
    }

    body.paleta-slate .paleta-prebacivac select {
      background-color: #ffffff;
      color: #334155;
      border-color: #e2e8f0;
      background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22334155%22 stroke-width=%222%22%3E%3Cpolyline points=%226 9 12 15 18 9%22%3E%3C/polyline%3E%3C/svg%3E');
    }

    body.paleta-slate .paleta-prebacivac select:hover {
      border-color: #0f172a;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.1);
    }

    /* Mobilni prikaz */
    @media (max-width: 768px) {
      .paleta-prebacivac {
        bottom: 20px;
        right: 20px;
        padding: 12px 15px;
        font-size: 0.85rem;
      }

      .paleta-prebacivac label {
        display: none;
      }

      .paleta-prebacivac select {
        padding: 8px 12px;
        padding-right: 28px;
        font-size: 0.85rem;
        background-size: 18px;
      }
    }
  `;

  // css u head
  const styleTag = document.createElement('style');
  styleTag.textContent = css;
  document.head.appendChild(styleTag);

  // html na kraju bodija
  document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const prebacivac = document.createElement('div');
    prebacivac.innerHTML = html;
    body.appendChild(prebacivac);

    // ucitaj sacuvanu paletu deo
    const savedPaleta = localStorage.getItem('selected-paleta');
    const select = document.getElementById('paleta-izbor');

    if (savedPaleta) {
      select.value = savedPaleta;
      document.body.className = savedPaleta;
    }

    // event listener za promenu paleta
    select.addEventListener('change', function() {
      const paleta = this.value;
      document.body.className = paleta;
      localStorage.setItem('selected-paleta', paleta);
    });
  });
})();
