// Get the HTML elements
const departureInput = document.getElementById('departure');
const arrivalInput = document.getElementById('arrival');
const dateInput = document.getElementById('date');
const searchButton = document.querySelector('.btn');
const boxRight = document.querySelector('.box-right');

// Add an event listener to the "Search" button
searchButton.addEventListener('click', () => {
  // Get the values of the input fields
  const departure = departureInput.value;
  const arrival = arrivalInput.value;
  const date = dateInput.value;

  // Check if any input field is empty
  if (!departure || !arrival || !date) {
    boxRight.innerHTML = `<p>Please fill in all the fields.</p>`;
    return;
  }

  // Create a message to display in the box-right div
  const message = `Your journey from ${departure} to ${arrival} on ${date} is being processed...`;

  // Update the box-right div with the message
  boxRight.innerHTML = `<p>${message}</p>`;

  // Simulate a search delay of 2 seconds
  setTimeout(() => {
    // Check if any result is found
    const resultFound = false; // replace this with your own code to check if a result is found

    if (resultFound) {
      // Display the result
      // Replace this with your own code to display the result
    } else {
      // Display the "not found" message
      boxRight.innerHTML = `<img src="./images/notfound.png" alt="not found image"><p>Trip not found</p>`;
    }
  }, 2000); // change the delay time as needed
});

