const prefix = window.location.hostname === 'waldm4rk.github.io' ? '/interactive-map' : '';

  // Функция для изменения всех src атрибутов на страницы
  document.querySelectorAll('[src]').forEach((el) => {
      const src = el.getAttribute('src');
      if (!src.startsWith('/interactive-map')) {
          el.setAttribute('src', prefix + src);
      }
  });