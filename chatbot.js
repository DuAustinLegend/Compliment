// chatbot.js
const compliments = [
    "Mimi, you light up any room you walk into!",
    "Your smile is so contagious, it brightens my day.",
    "You are truly one of a kind, Mimi!",
    "Everything you do is filled with such grace.",
    "Your laughter is like music to my ears.",
    "Mimi, you have the kindest heart!",
    "You inspire me with your strength and beauty.",
    "You bring warmth and joy wherever you go.",
    "Mimi, your presence is a gift to everyone around you.",
    "Being with you feels like a dream come true."
  ];
  let count = 0;
  
  function sendMessage() {
    const chatBox = document.getElementById("chat-box");
    if (count < compliments.length) {
      const compliment = compliments[count];
      const message = document.createElement("p");
      message.innerText = compliment;
      message.className = "compliment";
      chatBox.appendChild(message);
      chatBox.scrollTop = chatBox.scrollHeight;
      count++;
    } else {
      displayFireworks();
    }
  }
  
  function displayFireworks() {
    document.getElementById("fireworks").style.display = "block";
    document.getElementById("final-message").style.display = "block";
    startFireworks();
  }
  