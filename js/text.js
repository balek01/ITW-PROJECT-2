async function typeWriter(texts) {
  let j = 0;

  while (true) {
    let i = 0;
    let text;

    text = (j === 9) ? " fix her?" : texts[j % texts.length];
    j++;
    let offset = document.getElementById('typewriter').innerHTML.length;
    while (i < text.length) {
      addLetter(text, i);
      i++;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    while (i >= 0) {
      removeLetter(text, i, offset);
      i--;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
}

function addLetter(text, i) {
  document.getElementById('typewriter').innerHTML += text.charAt(i);
}

function removeLetter(text, i, offset) {
  text = document.getElementById('typewriter').innerHTML;
  document.getElementById('typewriter').innerHTML = text.substring(
    0,
    i + offset
  );
}

document.addEventListener('DOMContentLoaded', function () {
  let texts = [' fix it!', ' build it!', ' do it!', ' make it!', ' repair it!'];
  typeWriter(texts);
  console.log('typeWriter loaded');
});
