const factContainer = document.getElementById('fact-container');
const newFactBtn = document.getElementById('new-fact-btn');
const shareFactBtn = document.getElementById('share-fact-btn');
const likeBtn = document.getElementById('like-btn');
const catImage = document.getElementById('cat-image');
const meowAudio = document.getElementById('meow-audio');

const catImages = [
    'cat1.jpg',
    'cat2.jpg',
    'cat3.jpg'
];
let currentImageIndex = 0;

const catFacts = [
    'Cats sleep for around 12-16 hours a day.',
    'A group of cats is called a clowder.',
    'Cats have five toes on their front paws, but only four toes on their back paws.',
    'Cats have a specialized collar bone that allows them to always land on their feet.',
    'Cats have a strong sense of smell and can detect scents that humans cannot.',
    'Cats are Liquid.'
];

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    const fact = catFacts[randomIndex];
    factContainer.classList.remove('loaded');
    setTimeout(() => {
        factContainer.textContent = fact;
        factContainer.classList.add('loaded');
    }, 300);
    // Play meow sound
    meowAudio.currentTime = 0; // Restart audio from the beginning
    meowAudio.play();

    // Change cat image
    currentImageIndex = (currentImageIndex + 1) % catImages.length;
    catImage.src = catImages[currentImageIndex];
}

function shareFact() {
    const factToShare = factContainer.textContent;
    alert('Sharing fact: ' + factToShare);
}

function likeFact() {
    alert('You liked this cat fact!');
}

newFactBtn.addEventListener('click', displayRandomFact);
shareFactBtn.addEventListener('click', shareFact);
likeBtn.addEventListener('click', likeFact);

displayRandomFact();
