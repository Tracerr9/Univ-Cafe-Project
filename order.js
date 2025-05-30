function updatePrice() {
  const allItems = document.querySelectorAll('.item .price');

  let totalPrice = 0;

  allItems.forEach(item => {
    const price = item.textContent.replace('Rp', '').replace(',', '').trim();
    console.log(price);
    const priceNumber = parseInt(price.replace('.', ''));
    totalPrice += priceNumber;
  });

  document.querySelector('#totalPrice').innerHTML = `Rp ${totalPrice.toLocaleString('id-ID')}`;
}

function updateItemDetails() {
  const itemDetails = JSON.parse(localStorage.getItem('itemData'));

  if (itemDetails) {
    const itemName = itemDetails.name;
    const itemUrl = itemDetails.url;
    const itemPrice = parseInt(itemDetails.price);

    let html = `
      <div class="item">
        <div class="item-image">
          <img src="${itemUrl}" alt="${itemName}" />
        </div>
        <div class="item-desc">
          <p class="name">
            ${itemName}
          </p>
          <p class="price">
            Rp ${itemPrice.toLocaleString('id-ID')}
          </p>
        </div>
      </div>
    `;

    document.querySelector('.items').innerHTML += html;
  }
}

function addAddOns(itemUrl, itemName, itemPrice) {

  const addOnHtml = `
    <div class="item">
        <div class="item-image">
          <img src="${itemUrl}" alt="${itemName}" />
        </div>
        <div class="item-desc">
          <p class="name">
            Add Ons -  ${itemName}
          </p>
          <p class="price">
            Rp ${itemPrice.toLocaleString('id-ID')}
          </p>
        </div>
      </div>
  `;

   document.querySelector('.items').innerHTML += addOnHtml;

}

document.addEventListener("DOMContentLoaded", () => {
  updateItemDetails();

  updatePrice();

  document.querySelectorAll('.add-on').forEach(addOn => {
    addOn.addEventListener('click', function() {
      const imgPath = this.dataset.itemPath;
      const name = this.dataset.itemName;
      const price = parseInt(this.dataset.itemPrice);
      console.log(imgPath, name, price);
      addAddOns(imgPath, name, price);
      updatePrice();
    });
  });

  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.querySelector('#firstName').value.trim();
    const lastName = document.querySelector('#lastName').value.trim();
   
    const email = document.querySelector('#email').value.trim();
    const address = document.querySelector('#address').value.trim();

    const itemDetails = document.querySelectorAll('.items .item');

    // Validasi 1
    if (!email|| !address || !lastName || !firstName) {
      alert('Please fill in all fields');
      return;
    }

    // Validasi 2
    if (!email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

     const name = `${firstName} ${lastName}`;

    // Validasi 3
    if (!name.includes(' ')) {
      alert('Please enter your full name');
      return;
    }

    // Validasi 4
    if (address.length < 10) {
      alert('Address must be at least 10 characters long');
      return;
    }

    // Validasi 5
    if (itemDetails.length === 0) {
      alert('Please order at least one item to your order');
      return;
    }

    let text = '';

    text = `Thank you ${name} for your order!\n
    Your order details are as follows:\n\n
    
    Items:\n`;
    itemDetails.forEach(item => {
      const itemName = item.querySelector('.name').textContent;
      const itemPrice = item.querySelector('.price').textContent;
      text += `${itemName} - ${itemPrice}\n`;
    });

    text += `\nTotal Price: ${document.querySelector('#totalPrice').textContent}\n\n
    Your order will be delivered to:\n
    ${address}\n\n`;

    text += `Thank you for your order!`;

    alert(text);

    localStorage.removeItem('itemData');
  });
});

