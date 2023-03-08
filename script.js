// Get references to the form and input fields
const form = document.querySelector('.container form');
const departureInput = document.getElementById('departure');
const arrivalInput = document.getElementById('arrival');
const dateInput = document.getElementById('date');

// Add an event listener for the form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve the values of the input fields
  const departureValue = departureInput.value;
  const arrivalValue = arrivalInput.value;
  const dateValue = dateInput.value;

  // Do something with the form data
  console.log(`Departure: ${departureValue}, Arrival: ${arrivalValue}, Date: ${dateValue}`);
});
