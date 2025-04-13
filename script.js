const paragraph = document.getElementById("changeText");
const button = document.getElementById("changetextBtn");

const messages = [
  "BSIT program is GREAT!!!",
  "You're in the right path 👍",
  "Coding is life...",
  "But tulog is liferr!",
  "That’s the last one!",
  "Back to the beginning!"
];

let index = 0;

button.addEventListener("click", () => {
  paragraph.textContent = messages[index];
  index = (index + 1) % messages.length; 
});
