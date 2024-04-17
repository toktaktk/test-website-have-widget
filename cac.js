(function() {    
    // Apply styles to the FAB frame
    const fabFrame = document.createElement('iframe');

    fabFrame.id = "fab-frame";
    fabFrame.style.position = 'fixed';
    fabFrame.style.bottom = '20px';
    fabFrame.style.right = '20px';
    fabFrame.style.width = '60px';
    fabFrame.style.height = '60px';
    fabFrame.style.zIndex = '1100';
    fabFrame.style.border = 'none';
    fabFrame.src="fab.html"
    
    // Apply styles to the chat box frame
    const chatboxFrame = document.createElement('iframe');
    chatboxFrame.id = "chatbox-frame";
    chatboxFrame.style.display = 'none'; // Hidden by default
    chatboxFrame.style.position = 'fixed';
    chatboxFrame.style.bottom = '90px';
    chatboxFrame.style.right = '20px';
    chatboxFrame.style.width = '350px';
    chatboxFrame.style.height = '430px';
    chatboxFrame.style.border = '1px solid #ccc';
    chatboxFrame.style.zIndex = '1000';
    chatboxFrame.src = "chatbox.html";

    if(document.body != null){
        document.body.appendChild(fabFrame);
        document.body.appendChild(chatboxFrame);
    }
    
        window.addEventListener('message', function(event) {
            if (event.data === 'toggle-chatbox') {
                var chatBoxFrame = document.getElementById('chatbox-frame');
                chatBoxFrame.style.display = chatBoxFrame.style.display === 'none' ? 'block' : 'none';
            }
        });

})();