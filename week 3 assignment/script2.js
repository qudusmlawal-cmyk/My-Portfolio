
const chatForm =
document.getElementById("chatForm");

const messageInput =
document.getElementById("messageInput");

const chatHistory = 
document.getElementById("chatHistory");

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();


 const  messageText =
messageInput.value.trim();

    if(messageText ==="") {
      return;
    }

    const messageDiv = 
    document.createElement("div");
      messageDiv.classList.add("message", 
        "user-message");

        messageDiv.textContent = messageText;

        chatHistory.appendChild(messageDiv)

        chatHistory.scrollTop =
        chatHistory.scrollHeight;

        messageInput.value = "";
});

