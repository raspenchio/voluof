// Define the fastCheck function
function fastCheck(event) {
  // Log the key that was pressed
  console.log(`Key pressed: ${event.key}`);
  
  // Example logic: Check if the 'Enter' key was pressed
  if (event.key === 'Enter') {
    console.log('Enter key was pressed.');
    // Add your custom logic here
  }
}

// Add the event listener for 'keydown' events
window.addEventListener('keydown', fastCheck);
