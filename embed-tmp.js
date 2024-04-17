(function () {
    function sendMessage() {
      const inputElement = document.getElementById("messageInput");
      const messageContent = inputElement.value.trim();
  
      if (messageContent) {
        // Create message element and append it to chatMessages
        const chatMessages = document.getElementById("chatMessages");
        const messageElement = document.createElement("div");
        messageElement.textContent = messageContent;
        chatMessages.appendChild(messageElement);
  
        // Clear input field after sending
        inputElement.value = "";
  
        // Scroll to the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    }
  
    function closeChatBox() {
      const chatBox = document.getElementById("chatBox");
      chatBox.style.display = "none";
    }
  
    const chatWidget = document.createElement("iframe");
    chatWidget.src = `https://test-run-winget.vercel.app/#widget-container`;
    // chatWidget.style.border = 'none';
    // chatWidget.style.width = '300px';
    // chatWidget.className = "fab"
    // chatWidget.style.backgroundColor = 'red';
    // chatWidget.style.position = 'fixed';
    // chatWidget.style.bottom = '20px';
    // chatWidget.style.right = '20px';
    // chatWidget.style.zIndex = '9999';
  
    // const chatBox = document.createElement("div");
    // chatBox.className = "chat-box";
    // chatBox.id = "chatBox";
  
    // const chatBoxHeader = document.createElement("div");
    // chatBoxHeader.className = "chat-box-header";
  
    // const chatBoxTitle = document.createElement("span");
    // chatBoxTitle.className = "chat-box-title";
    // chatBoxTitle.textContent = "Chat";
  
    // const closeChatBoxButton = document.createElement("span");
    // closeChatBoxButton.className = "close-chat-box";
    // closeChatBoxButton.innerHTML = "&times;";
    // closeChatBoxButton.onclick = closeChatBox; // Close function needs to be defined elsewhere
  
    // const chatBoxMessages = document.createElement("div");
    // chatBoxMessages.className = "chat-box-messages";
    // chatBoxMessages.id = "chatMessages";
  
    // const chatBoxInput = document.createElement("div");
    // chatBoxInput.className = "chat-box-input";
  
    // const messageInput = document.createElement("input");
    // messageInput.type = "text";
    // messageInput.id = "messageInput";
    // messageInput.placeholder = "Type a message...";
  
    // const sendButton = document.createElement("button");
    // sendButton.onclick = sendMessage; // Send function needs to be defined elsewhere
    // sendButton.textContent = "Send";
  
    // // Appending children in hierarchy
    // chatBoxHeader.appendChild(chatBoxTitle);
    // chatBoxHeader.appendChild(closeChatBoxButton);
  
    // chatBoxInput.appendChild(messageInput);
    // chatBoxInput.appendChild(sendButton);
  
    // chatBox.appendChild(chatBoxHeader);
    // chatBox.appendChild(chatBoxMessages);
    // chatBox.appendChild(chatBoxInput);
    // const chatbox = document.createElement('div');
    // chatbox.style.border = 'none';
    // chatbox.className = "chat-box"
    // chatbox.id = "chatBox"
  
    const container = document.createElement("div");
    // document.body.appendChild(chatWidget);
    // document.body.appendChild(chatBox);
  
    container.appendChild(chatWidget);
    // container.appendChild(chatbox);
  
    // toggleButton.textContent = 'Open Chat';
    chatWidget.onclick = () => {
      console.log("chatWidget hehe");
      chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
    };
  
    // document.body.appendChild(toggleButton);
    // document.body.appendChild(container);
  
    // window.addEventListener("load", () => {
    //   const chatbox = document.getElementById("chatBox");
  
    //   setTimeout(() => {
    //     // Show the chat popup
    //     console.log("chatBox is loaded");
    //     chatbox.style.display = "block";
    //   }, 1000); // Popup shows after 1000ms or 1 second
    // });
  })();
  