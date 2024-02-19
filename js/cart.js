const items = document.querySelectorAll('.item');

  items.forEach(item => {
    const increment = item.querySelector('.increment');
    const decrement = item.querySelector('.decrement');
    const deleteBtn = item.querySelector('.delete');
    const like = item.querySelector('.like');
    const pink =item.querySelector('.pink')
    const quantityDisplay = item.querySelector('.quantity');
    const priceDisplay = item.querySelector('.price');
    let quantity = parseInt(quantityDisplay.textContent);
    
    increment.addEventListener('click', () => {
      quantity++;
      quantityDisplay.textContent = quantity;
      updateTotal();
    });

    decrement.addEventListener('click', () => {
      if (quantity > 0) {
        quantity--;
        quantityDisplay.textContent = quantity;
        updateTotal();
      }
    });

    deleteBtn.addEventListener('click', () => {
      item.remove();
      updateTotal();
    });

    like.addEventListener('click', () => {
      if (pink.getAttribute("src") == "res/pink.png") {
        pink.setAttribute('src','res/red.png')
        
      } else {
        pink.setAttribute('src','res/pink.png')
      }
    });
  });

  if (item.liked) {
    itemElement.querySelector('.like').classList.add('liked');
}
cartContainer.appendChild(itemElement);

document.getElementById('priceDisplay').addEventListener('click', () => {
  let price = 5000; 
  if (increment) {
    price *= increment;
  } else {
    price /= decrement;
  }
  document.getElementById('priceDisplay').innerText = `&#x20A6 ${price.toFixed(2)}`;
});





