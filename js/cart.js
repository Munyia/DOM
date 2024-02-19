const items = document.querySelectorAll('.item');

  items.forEach(item => {
    const increment = item.querySelector('.increment');
    const decrement = item.querySelector('.decrement');
    const deleteBtn = item.querySelector('.delete');
    const like = item.querySelector('.like');
    const pink =item.querySelector('.pink')
    const quantityDisplay = item.querySelector('.quantity');
    const priceDisplay = item.querySelector('.price');
    const amnt = item.querySelector('.amnt');
    const tot = item.querySelector('.indtot');
    let quantity = parseInt(quantityDisplay.textContent);
    
    increment.addEventListener('click', () => {
      quantity++;
      quantityDisplay.textContent = quantity;
      console.log(amnt.innerHTML)
      tot.textContent= amnt.innerHTML * quantity ;

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

    priceDisplay.addEventListener('click', () => {
      let price = 5000; 
      if (increment) {
        price *= increment;
      } else {
        price /= decrement;
      }
      document.getElementsByClassName('priceDisplay').innerText = `&#x20A6 ${price.toFixed(2)}`;
    });


  });

