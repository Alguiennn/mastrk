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
     3. TELEFONO: CLICK TO REVEAL (OFUSCACIÓN)
     --------------------------------------------- */
  const phoneBtn = document.getElementById('phone-btn');
  const phoneDisplay = document.getElementById('phone-display');

  if (phoneBtn) {
    const part1 = "+34"; 
    const part2 = "643";
    const part3 = "377";
    const part4 = "490";
    const fullNumber = `${part1} ${part2} ${part3} ${part4}`;

    phoneBtn.addEventListener('click', (e) => {
      e.preventDefault();

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