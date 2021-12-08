import Cart from "./Cart";

describe('Carts', () => {
  let cart
  beforeEach(() => {
    cart = new Cart();    
  })

  it('should returned 0 when getTotal() is executed in a newly created instance  ', () => {
    expect(cart.getTotal()).toEqual(0);
  });

  it('should multiply quantity and prices and receive the total amount', () => {
    const item = {
      product: {
        title: 'Adidas',
        price: 35388 // 353.88
      },
      quantity: 2
    }

    cart.add(item);

    expect(cart.getTotal()).toEqual(70776);

    
  });
});