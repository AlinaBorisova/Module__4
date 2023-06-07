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
    console.log('this.goods', this.goods)
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













// const Cart = {
//     goods: [],
//     totalPrice: 0,
//     count: 0,
//
//     getTotalPrice: function() {
//         return this.totalPrice;
//     },
//     addGoods: function (title, price, count = 1) {
//         Cart.goods.push({
//             title: title,
//             price: price,
//             count: count,
//         });
//         Cart.increaseCount(count);
//         Cart.calculateGoodsPrice();
//     },
//     increaseCount: function(n) {
//         this.count += n;
//     },
//     calculateGoodsPrice: function () {
//         let sum = 0;
//         this.goods.forEach(item => {
//             sum += item.price * item.count
//         })
//         this.totalPrice = sum;
//     },
//     clear: function() {
//         Cart.goods = [];
//         this.totalPrice = 0;
//         this.count = 0;
//     },
//     prints: function() {
//         const cartStr = JSON.stringify(Cart.goods);
//         console.log('totalPrice =', this.getTotalPrice());
//     },
// }

// let fruits = new Cart.addGoods('Apple', 200);
// let veg = new Cart.addGoods('Tomato', 250);
// let meat = new Cart.addGoods('Pork', 800);
// cart.clear();

// Goods.prototype.FoodGoods = function (kkal) {
//     return this.kkal = kkal;
// };
//
// Goods.prototype.СlothingGoods = function (material) {
//     return this.material = material;
// };
//
// Goods.prototype.TechnicsGoods = function (typeTech) {
//     return this.typeTech = typeTech;
// };

//
// const Animal = function (options) {
//     this.name = options.name;
//     this.color = options.color;
// };
//
// Animal.prototype.voice = function () {
//     console.log('Say', this.name)
// }
//
// const Cat = function (options) {
//     Animal.apply(this, arguments)
//     this.hasTail = options.hasTail
//     this.type = 'cat'
// }
//
// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat
//
// const mur = new Cat({name: 'caty', color: 'red', hasTail: true})
// console.log(mur)
//
// const mura = new Cat({name: 'catys', color: 'red', hasTail: true})
// console.log(mura)

