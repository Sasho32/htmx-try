const button = document.querySelector('button');
const resultSection = document.querySelector('section#result');

button.addEventListener('click', async e => {
    const response = await fetch('http://127.0.0.1:3001/test');
    const receivedHTML = await response.text();

    resultSection.innerHTML = receivedHTML;
});
