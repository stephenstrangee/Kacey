const typedText =
  "I just wanted to express how deeply I appreciate and love you. Your presence brings me comfort beyond words, and your unwavering support is my anchor in life's journey. You understand me like no one else, and your love fills my heart with joy. You are not only my comfort but also the love that will forever resonate within me. I promise to stand by your side, cherishing every moment and embracing the future together. With all my love, Arden.";
const typedTextElement = document.getElementById("typed-text");

let charIndex = 0;

function typeText() {
  typedTextElement.textContent = typedText.slice(0, charIndex);
  charIndex++;

  if (charIndex <= typedText.length) {
    setTimeout(typeText, 50); // Adjust the typing speed here
  }
}

typeText();
