// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = (...items) => {

  let totalPrice = 0
  items.forEach((item)=>{totalPrice += item.price
  console.log(item.descr)
})

  console.log(totalPrice)
}

// Check


const object1 = {descr: "Fries", price: 2.99}
const object2 = {descr: "Burger", price: 5.99}
const object3 = {descr: "Hot Dog", price: 4.99}
const object4 = {descr: "Milkshake", price: 3.99}

logReceipt(object1, object2, object3, object4)

