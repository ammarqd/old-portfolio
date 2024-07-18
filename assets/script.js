function typeSentence(e, sentence, typingDelay) {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      e.textContent += sentence.charAt(i);
    }, i * typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');
  const body = document.querySelector('body');
  const h4Element = document.querySelector('h4');

  if (h4Element) {
    const sentence = h4Element.getAttribute('data-content');
    const textLength = sentence.length;
    const typingDelay = 50;
    const blinkerDelay = textLength * typingDelay;
    h4Element.style.setProperty('--animation-delay', `${blinkerDelay}ms`);
    typeSentence(h4Element, sentence, typingDelay);
  }

  menuToggle.addEventListener('click', () => {
    [menuToggle, navUl, body].forEach(e => e.classList.toggle('mobile-nav'));
  });
});
