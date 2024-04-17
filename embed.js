(function() {
  const chatWidget = document.createElement('iframe');
  chatWidget.src = `https://test-run-winget.vercel.app/#widget-container`;
  chatWidget.style.border = 'none';
  // chatWidget.style.width = '300px';
  // chatWidget.style.height = '400px';
  chatWidget.style.position = 'fixed';
  chatWidget.style.bottom = '20px';
  chatWidget.style.right = '20px';
  chatWidget.style.zIndex = '9999';

  const container = document.createElement('div');
  container.appendChild(chatWidget);

  const toggleButton = document.createElement('button');
  // toggleButton.textContent = 'Open Chat';
  // toggleButton.onclick = () => {
  //   container.style.display = container.style.display === 'none' ? 'block' : 'none';
  // };

  // document.body.appendChild(toggleButton);
  document.body.appendChild(container);
})();