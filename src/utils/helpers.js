function formatPrice(price) {
  price = price.toString();

  if (price.length <= 3) return price;
  let result = price.split('').reverse().join('').replace(/(\d{3})(?=\d)/g, '$1.').split('').reverse().join('');
  return result;
}

export {
  formatPrice,
};
