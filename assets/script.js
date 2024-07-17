function typeSentence(e, typingDelay) {
  const sentence = e.innerText;
  e.innerHTML = "";

  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      e.append(sentence.charAt(i));
    }, i * typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const h4Element = document.querySelector('h4');
  const textLength = h4Element.innerText.length;
  const typingDelay = 60
  const blinkerDelay = textLength * typingDelay;
  h4Element.style.setProperty('--animation-delay', `${blinkerDelay}ms`);
  typeSentence(h4Element, typingDelay);

  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');
  const body = document.querySelector('body');

  menuToggle.addEventListener('click', () => {
      [menuToggle, navUl, body].forEach(e => e.classList.toggle('mobile-nav'));
  });
});