// Select all elements with the class 'item'
const items = document.querySelectorAll('.item');

// Function to update the total price
function updateTotal() {
  // Select the element with the id 'total'
  const total = document.getElementById('total');
  let totals = 0; // Initialize total variable

  // Loop through each item
  items.forEach(item => {
    // Get the quantity of the item
    let quantity = parseInt(item.querySelector('.quantity').textContent);
    // Get the price per item
    const tot = parseInt(item.querySelector('.indtot').innerHTML);
    // Calculate the total price for this item
    totals += tot
  });

  // Set the total price in the HTML
  total.textContent = totals;
}

// Loop through each item
items.forEach(item => {
  // Select relevant elements within each item
  const increment = item.querySelector('.increment');
  const decrement = item.querySelector('.decrement');
  const deleteBtn = item.querySelector('.delete');
  const like = item.querySelector('.like');
  const pink = item.querySelector('.pink');
  const quantityDisplay = item.querySelector('.quantity');
  const amnt = item.querySelector('.amnt');
  const tot = item.querySelector('.indtot');
  let quantity = parseInt(quantityDisplay.textContent);

  // Event listener for increment button
  increment.addEventListener('click', () => {
    quantity++; // Increment quantity
    quantityDisplay.textContent = quantity; // Update quantity display
    tot.textContent = amnt.innerHTML * quantity; // Update total display
    updateTotal(); // Update total price
  });

  // Event listener for decrement button
  decrement.addEventListener('click', () => {
    if (quantity > 0) {
      quantity--; // Decrement quantity if greater than zero
      quantityDisplay.textContent = quantity; // Update quantity display
      tot.textContent = amnt.innerHTML * quantity; // Update total display
      updateTotal(); // Update total price
    }
  });

  // Event listener for delete button
  deleteBtn.addEventListener('click', () => {
    item.remove(); // Remove item from the cart
    updateTotal(); // Update total price
  });

  // Event listener for like button
  like.addEventListener('click', () => {
    // Toggle between pink and red heart images
    if (pink.getAttribute("src") == "res/R.gif") {
      pink.setAttribute('src', 'res/RC.gif'); // Change to pink heart
    } else {
      pink.setAttribute('src', 'res/R.gif'); // Change to red heart
    }
  });
});

// Call updateTotal function initially to calculate total price
updateTotal();