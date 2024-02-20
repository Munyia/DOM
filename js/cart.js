const items = document.querySelectorAll('.item');
function updateTotal() {
  const total =document.getElementById('total')
  let totals =0
  items.forEach(item => {
    let quantity = parseInt(item.querySelector('.quantity').textContent);
    const amnt = item.querySelector('.amnt');
    totals+= (amnt.innerHTML * quantity)
  });
  total.textContent= totals ;
  
}
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
      tot.textContent=amnt.innerHTML * quantity ;
      updateTotal();
    });
    
    decrement.addEventListener('click', () => {
      if (quantity > 0) {
        quantity--;
        quantityDisplay.textContent = quantity;        
        tot.textContent=amnt.innerHTML * quantity ;
        updateTotal();
      }
    });
    
    deleteBtn.addEventListener('click', () => {
      item.remove();
      updateTotal();
    });

    like.addEventListener('click', () => {
      if (pink.getAttribute("src") == "res/R.gif") {
        pink.setAttribute('src','res/RC.gif')
        
      } else {
        pink.setAttribute('src','res/R.gif')
      }
    });

    // priceDisplay.addEventListener('click', () => {
    //   let price = 5000; 
    //   if (increment) {
    //     price *= increment;
    //   } else {
    //     price /= decrement;
    //   }
    //   document.getElementsByClassName('priceDisplay').innerText = `&#x20A6 ${price.toFixed(2)}`;
    // });


  });
  
  

  
