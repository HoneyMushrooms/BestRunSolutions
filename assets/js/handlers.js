document.addEventListener('DOMContentLoaded', () => {
  const burgerButtons = document.querySelectorAll('.header__burger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (mobileNav && burgerButtons.length > 0) {
    // Обработка открытия меню по кнопкам
    burgerButtons.forEach(burger => {
      burger.addEventListener('click', () => {
        mobileNav.classList.toggle('mobile-nav_active');
      });
    });

    // Обработка закрытия меню при клике на любую ссылку внутри меню
    const navLinks = mobileNav.querySelectorAll('a');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Закрываем меню
        mobileNav.classList.remove('mobile-nav_active');
      });
    });
  }
});