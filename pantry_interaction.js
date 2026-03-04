// Select pantry essentials and find input bar
const pantryIngredients = document.querySelectorAll('.ingredient');
const findInput = document.querySelector('#mealmagician-search input');

// Create and style a search button to align with the find bar
const findBarContainer = document.querySelector('#mealmagician-search');
findBarContainer.style.display = 'flex';
findBarContainer.style.alignItems = 'center';

const searchButton = document.createElement('button');
searchButton.textContent = 'Search';
searchButton.style.marginLeft = '10px';
searchButton.style.padding = '10px';
searchButton.style.border = '1px solid #ccc';
searchButton.style.borderRadius = '5px';
searchButton.style.cursor = 'pointer';
searchButton.style.backgroundColor = '#fff';
findBarContainer.appendChild(searchButton);

// Event listener to append selected ingredient to the find bar
pantryIngredients.forEach(ingredient => {
  ingredient.addEventListener('click', () => {
    const ingredientText = ingredient.textContent.trim();

    // Check if ingredient already exists in the find bar
    const currentValue = findInput.value.split(', ').filter(val => val.trim() !== '');

    if (!currentValue.includes(ingredientText)) {
      currentValue.push(ingredientText); // Add ingredient to the list
    }

    findInput.value = currentValue.join(', '); // Update find bar with the new list
  });
});

// Event listener for the search button
searchButton.addEventListener('click', () => {
  const searchValue = findInput.value.trim();
  if (searchValue) {
    console.log(`Searching recipes for: ${searchValue}`); // Replace with actual search logic
    alert(`Searching recipes for: ${searchValue}`);
  } else {
    alert('Please select or enter ingredients to search.');
  }
});
