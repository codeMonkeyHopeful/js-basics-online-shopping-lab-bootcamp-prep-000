var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({'itemName': item, 'itemPrice': Math.floor(Math.random() * 100)})
 return `${item} has been added to your cart.`;
}

function viewCart() {
  
}

function total() {
  var total = 0;
  for(let i = 0; i < cart.length; i++) {
    total += cart[i]['itemPrice'];
  }
  return total;
}

function removeFromCart(item) {
  var modCart = cart.splice();
  for(let i = 0; i < cart.length; i++) {
    if(cart[i]['itemName'] === item){
      cart.splice(i,1);
    }
  }
  if(modCart !== cart){
  return cart;
  } else { return 'That item isn not in your cart.'}
}

function placeOrder(cardNumber) {
  // write your code here
}
