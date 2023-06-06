const Cart = function (goods = [], totalPrice = 0, count = 0) {
    this.goods = goods;
    this.totalPrice = totalPrice;
    this.count = count;
};

Cart.prototype.calculateGoodsPrice = function () {
    let sum = 0;
    this.goods.forEach(item => {
        sum += item.price * item.count
    })
    this.totalPrice = sum;
};

Cart.prototype.addGoods = function (title, price, count = 1) {
    this.goods.push({
        title: title,
        price: price,
        count: count,
    });
    this.increaseCount(count);
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

/*
* goods
* */
const Goods = function(
        options
    ) {
    Cart.call(this);
    this.title = options.title;
    this.price = options.price;
    this.discount = options.discount;
    this.addGoods(
        this.title, this.price, this.discount
    )
    // goods.push({
    //     title:   options.title,
    //     price:   options.price,
    //     discount:   options.discount,
    // })

};
Object.setPrototypeOf(Goods.prototype, Cart.prototype);
// Goods.prototype.constructor = Goods;
// Goods.prototype = Object.create(Cart.prototype);



// const mazda = new Goods({price: 1500000, title: 'Mazda', discount: 10})
// console.log(mazda)
//
const bmv = new Goods({price:200000, title: 'BMW', discount: 5})
bmv.print()
console.log(bmv)

const test = new Goods({title: 'Test title', price: 7000, discount: 10 });
test.print();
console.log(test)



// const FoodGoods = function (options) {
//     Goods.call(this, arguments);
//     this.kkal = options.kkal;
// };
// const СlothingGoods = function (price, title, discount, material) {
//     Goods.call(this, price, title, discount);
//     this.material = material;
// };
// const TechnicsGoods = function (price, title, discount, typeTech) {
//     Goods.call(this, price, title, discount);
//     this.typeTech = typeTech;
// }











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

