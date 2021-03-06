import Cart from "./Cart";

describe('Carts', () => {
  let cart
  let product = {
    title: 'Adidas',
    price: 35388 
  }
  let product2 = {
    title: 'nike',
    price: 41872 
  }
  beforeEach(() => {
    cart = new Cart();    
  })
  describe('getTotal()', () => {
    it('should returned 0 when getTotal() is executed in a newly created instance  ', () => {
      expect(cart.getTotal().getAmount()).toEqual(0);
    });
  
    it('should multiply quantity and prices and receive the total amount', () => {
      const item = {
        product,
        quantity: 2
      }
  
      cart.add(item);
  
      expect(cart.getTotal().getAmount()).toEqual(70776);
    });
  
    it('should ensure no more than on product exist at a time', () => {
      cart.add({
        product,
        quantity: 2
      })
      cart.add({
        product,
        quantity: 1
      })
  
      expect(cart.getTotal().getAmount()).toEqual(35388)
      
    });
  
    it('should update total when a product gets inclued and then removed', () => {
      cart.add({
        product,
        quantity: 2
      })
      cart.add({
        product: product2,
        quantity: 1
      })
  
      cart.remove(product);
  
      expect(cart.getTotal().getAmount()).toEqual(41872);
    });
  })
  describe('checkout()', () => {
    it('should return an object with the total and the list os items ', () => {
      cart.add({
        product,
        quantity: 2
      })
      cart.add({
        product: product2,
        quantity: 1
      })

      expect(cart.checkout()).toMatchSnapshot()
    });
    it('should return an object with the total and the list os items when sumary() called', () => {
      cart.add({
        product,
        quantity: 2
      })
      cart.add({
        product: product2,
        quantity: 1
      })

      expect(cart.sumary()).toMatchSnapshot()
      expect(cart.getTotal().getAmount()).toBeGreaterThan(0)

    });
    it('should reset the cart when checkout() is called', () => {
      cart.add({
        product: product2,
        quantity: 1
      })

      cart.checkout();

      expect(cart.getTotal().getAmount()).toEqual(0);
    });
  })
  describe('special conditions', () => {
    it('should apply percentage discount quantity above mininum is passed', () => {
      const condition = {
        percentage: 30,
        minimum: 2
      }
      cart.add({
        product,
        condition,
        quantity: 3
      })

      expect(cart.getTotal().getAmount()).toEqual(74315)

    });
    it('should apply quantity discount for even quantities', () => {
      const condition = {
        quantity: 2,
      }
      cart.add({
        product,
        condition,
        quantity: 4 
      })

      expect(cart.getTotal().getAmount()).toEqual(70776 )

    });
    it('should apply quantity discount for add quantities', () => {
      const condition = {
        quantity: 2,
      }
      cart.add({
        product,
        condition,
        quantity: 5
      })

      expect(cart.getTotal().getAmount()).toEqual(106164)

    });
    it('should Not apply percentage discount quantity is below or equals  mininum ', () => {
      const condition = {
        percentage: 30,
        minimum: 2
      }
      cart.add({
        product,
        condition,
        quantity: 2
      })

      expect(cart.getTotal().getAmount()).toEqual(70776)

    });
    it('should Not apply quantity discount for even quantities', () => {
      const condition = {
        quantity: 2,
      }
      cart.add({
        product,
        condition,
        quantity: 1
      })

      expect(cart.getTotal().getAmount()).toEqual(35388)

    });
    it('should receive two or more conditions and determine/apply the best discount. Fist case.', () => {
      const condition1 = {
        percentage: 30,
        minimum: 2
      }
      const condition2 = {
        quantity: 2,
      }
      cart.add({
        product,
        condition: [condition1, condition2],
        quantity: 5
      })

      expect(cart.getTotal().getAmount()).toEqual(106164)
    });
  });
});