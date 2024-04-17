(function() {
  const chatWidget = document.createElement('iframe');
  chatWidget.src = `https://test-run-winget.vercel.app/#widget-container`;
  chatWidget.style.border = 'none';
  chatWidget.style.width = '80px'
  chatWidget.style.height = '80px'
  chatWidget.style.backgroundColor = 'red'
  chatWidget.style.position = 'fixed';
  chatWidget.style.bottom = '20px';
  chatWidget.style.right = '20px';
  chatWidget.style.zIndex = '9999';

  const container = document.createElement('div');
  container.style.backgroundColor = 'green'
  container.appendChild(chatWidget);

  const toggleButton = document.createElement('button');
  // toggleButton.textContent = 'Open Chat';
  chatWidget.onclick = () => {
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
    chatWidget.style.width = '1000px'
    chatWidget.style.height = '1000px'
    container.style.width = '1000px'
    container.style.height = '1000px'  };

  // document.body.appendChild(toggleButton);
  document.body.appendChild(container);
})();