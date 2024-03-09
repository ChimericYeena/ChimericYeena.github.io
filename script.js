// Define a function to add a new button
function addButton(containerId, text, url) {
    const container = document.getElementById(containerId);
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', function() {
        window.location.href = url;
    });
    container.appendChild(button);
}

// Add initial buttons
addButton('buttonContainer', 'Stream', 'stream.html');
addButton('buttonContainer', 'Button 2', 'subdirectory2');
addButton('buttonContainer', 'Button 3', 'subdirectory3');
addButton('buttonContainer', 'Button 4', 'subdirectory4');

// Add initial buttons for stream.html
addButton('topLeftButtonContainer', 'Home', 'index.html');
addButton('topLeftButtonContainer', 'Stream', 'stream.html');
