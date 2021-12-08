export default class Cart {
  item = []
  add(item) {
    this.item.push(item)
  }
  getTotal() {
    return this.item.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
  }
}