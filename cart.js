const Cart = function (arr = []) {
    this.goods = arr;
    this.count = 0;
    Cart.totalPrice = 0;
};

Cart.prototype.calculateGoodsPrice = function () {
    let sum = 0;

    this.goods.forEach(item => {
        if(item.goods.discount > 0) {
            sum += item.goods.price * ((100 - item.goods.discount) / 100);
        } else {
            sum += item.goods.price;
        }
    });
    this.totalPrice = sum;
};

Cart.prototype.addGoods = function (...obj) {
    this.goods.push(...obj);
    this.increaseCount(this.goods.length);
    this.calculateGoodsPrice();
};

Cart.prototype.getTotalPrice = function () {
    return this.totalPrice;
};

Cart.prototype.increaseCount = function(n) {
    this.count += n;
};

Cart.prototype.clear = function () {
    Cart.goods = [];
    this.totalPrice = 0;
    this.count = 0;
};

Cart.prototype.print = function () {
    const cartStr = JSON.stringify(this.goods);
    console.log('cartStr', cartStr)
    console.log('totalPrice =', this.getTotalPrice());
};


const Goods = function(options) {
    Cart.apply(this, arguments);
    this.count = 1;
};
const FoodGoods = function (options) {
    Goods.apply(this, arguments);
    this.goods = options
};
const ClothingGoods = function (options) {
    Goods.apply(this, arguments);
    this.goods = options
};
const TechnicsGoods = function (options) {
    Goods.apply(this, arguments);
    this.goods = options
};

const modelCart = new Cart();

const food = new FoodGoods({title: 'apple', price: 200, discount: 5, kkal:270});
const clothes = new ClothingGoods({title: 'T-short', price: 3200, discount: 10, material:'Cotton'});
const tech = new TechnicsGoods({title: 'Phone', price: 113200, discount: 20, typeTech:'Gadget'});


modelCart.addGoods(food, clothes, tech);

console.log(modelCart);

modelCart.print();

