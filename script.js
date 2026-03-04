const buttonTexts = ["Salad", "Sweet", "Curry", "Non-Veg", "Juice"];

// Get the container where buttons will be placed
const container = document.querySelector(".container");

// Loop through each flex-item and add a button dynamically
const flexItems = document.querySelectorAll(".flex-item");
flexItems.forEach((item, index) => {
  // Create a new button element
  const button = document.createElement("button");

  // Set the button text
  button.textContent = buttonTexts[index];

  // Add a class to style the button
  button.classList.add("action-button");

  // Add a click event to the button
  button.addEventListener("click", () => {
    alert(`${buttonTexts[index]} added to cart!`);
  });

  // Insert the button outside and centered relative to the flex-item
  item.parentElement.appendChild(button); // Append outside the flex-item but within the container

  // Position the button closer to the flex-item
  button.style.position = 'absolute';
  button.style.top = `${item.offsetTop + item.offsetHeight}px`; // Directly below, no extra margin
  button.style.left = `${item.offsetLeft + (item.offsetWidth / 2) - (button.offsetWidth / 2)}px`; // Center horizontally
});

// Add styles to make the buttons and background look beautiful
document.body.style.backgroundColor = "black";

const style = document.createElement("style");
style.textContent = `
  .action-button {
    padding: 5px 10px;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
  }
  .action-button:hover {
    background-color: #1c6ec6;
  }

  .flex-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative; /* Positioning context for the button */
    margin-bottom: 10px; /* Reduced margin to bring buttons closer */
    height:200px;
    
    
  }
  }
 

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5px;
    margin-top: 50px; /* Adjust spacing */
    position: relative; /* Positioning context for the buttons */
  }
`;
document.head.appendChild(style);
