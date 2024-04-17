const headers = {
  "about.html": "More about me",
  "projects.html": "My Projects",
  "contact.html": "Get in touch"
};

const currentPage = window.location.pathname.split('/').pop();

const header = headers[currentPage]

function typeSentence(e, text, delay = 50) {
  const letters = text.split("");
  letters.forEach((letter, i) => {
    setTimeout(() => {
      e.append(letter);
    }, i * delay);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const h4Element = document.querySelector('h4');
  const textLength = header.length;
  const typewriterDelay = 50;
  const blinkerDelay = textLength * 50;
  h4Element.classList.add('typewriter');
  h4Element.style.setProperty('--animation-delay', `${blinkerDelay}ms`);
  typeSentence(h4Element, header, typewriterDelay);
});