const sections = document.querySelectorAll('#title,#sobremim, #skills, #hobbies, #formacao, #xp, #contato');
const btnToTop = document.querySelector('.to-top');

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.menu__list a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
}
initScrollSuave();

function initAnimacaoScroll() {
    
    if(sections.length) {
      const windowMetade = window.innerHeight * 0.6;
  
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = (sectionTop - windowMetade) < 0;
          if(isSectionVisible)
            section.classList.add('ativo');
        })
      }
      animaScroll();
      window.addEventListener('scroll', animaScroll);
    }
}
initAnimacaoScroll();

btnToTop.addEventListener('click', ()=> {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})