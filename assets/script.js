function typeSentence(e, delay = 50) {
  const sentence = e.innerText;
  e.innerHTML = "";
  e.style.opacity = '1';

  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      e.append(sentence.charAt(i));
    }, i * delay);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const h4Element = document.querySelector('h4');
  const textLength = h4Element.innerText.length;
  const delay = textLength * 50;
  h4Element.style.setProperty('--animation-delay', `${delay}ms`);
  typeSentence(h4Element);
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');
  const body = document.querySelector('body');

  menuToggle.addEventListener('click', () => {
      [menuToggle, navUl, body].forEach(e => e.classList.toggle('mobile-nav'));
  });
});