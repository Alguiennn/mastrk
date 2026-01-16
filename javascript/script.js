document.addEventListener('DOMContentLoaded', () => {
  /* ---------------------------------------------
     1. AÑO AUTOMÁTICO EN EL FOOTER
     --------------------------------------------- */
  const yearEl = document.getElementById('y');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------------------------
     2. EFECTO SPOTLIGHT (LINTERNA)
     --------------------------------------------- */
  const cards = document.querySelectorAll('.card, .highlight');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  /* ---------------------------------------------
     3. TELEFONO: CLICK TO REVEAL (BASE64 OFUSCADO)
     --------------------------------------------- */
  const phoneBtn = document.getElementById('phone-btn');
  const phoneDisplay = document.getElementById('phone-display');

  if (phoneBtn) {
    const secret = "KzM0IDY0MyAzNzcgNDkw";

    phoneBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const fullNumber = atob(secret);

      if (phoneDisplay.classList.contains('revealed')) {
        navigator.clipboard.writeText(fullNumber).then(() => {
          phoneDisplay.textContent = "¡Copiado!";
          phoneDisplay.style.color = "#ffffff";

          setTimeout(() => {
            phoneDisplay.textContent = fullNumber;
            phoneDisplay.style.color = "#22c55e";
          }, 1500);
        });
        return;
      }

      phoneDisplay.textContent = "Revelando...";

      setTimeout(() => {
        phoneDisplay.textContent = fullNumber;
        phoneDisplay.classList.add('revealed');
        
        phoneDisplay.style.color = "#22c55e"; 
        phoneDisplay.style.fontWeight = "bold";
      }, 400); 
    });
  }
});