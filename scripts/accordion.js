
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = header.nextElementSibling;

      const isOpen = content.style.display === 'block';

      // Fecha todos
      document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

      // Abre o clicado
      if (!isOpen) {
        content.style.display = 'block';
        item.classList.add('active');
      }
    });
  });

