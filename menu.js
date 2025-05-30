document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', e => {
    const target = e.currentTarget;

    const itemName = target.dataset.itemName;
    const itemUrl = target.dataset.itemPath;
    const itemPrice = target.dataset.itemPrice;

    console.log(`Item Name: ${itemName}`);
    console.log(`Item URL: ${itemUrl}`);
    console.log(`Item Price: ${itemPrice}`);

    const itemDetails = {
      name: itemName,
      url: itemUrl,
      price: itemPrice
    };

    localStorage.setItem('itemData', JSON.stringify(itemDetails));

    window.location.href = 'order.htm';
  });
});