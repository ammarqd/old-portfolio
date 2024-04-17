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