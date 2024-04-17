async function typeSentence(e, delay = 50) {
  const letters = e.innerText.split("");
  e.innerHTML = "";
  let i = 0;
  while(i < letters.length) {
    e.append(letters[i]);
    await waitForMs(delay);
    i++
  }
  return;
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

typeSentence(document.getElementById("typewriter"))

document.addEventListener("DOMContentLoaded", function() {
  const h4Element = document.querySelector('h4');
  const textLength = h4Element.innerText.length;
  const delay = textLength * 600; 
  h4Element.style.setProperty('--animation-delay', `${delay}ms`);
});