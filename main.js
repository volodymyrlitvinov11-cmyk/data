// const numbers = [1, 2, 5, 7];
//
// const count = numbers.reduce((acc, num) => {
//     return acc + num
// }, 0)
//
// console.log(count);
//
// let student = {
//     name: "Ron",
//     age: 25,
//     grade: 3
// }
//
// function getStudentGrade(student) {
//
//     for (let key in student) {
//         console.log(key, student[key]);
//     }
// }
//
// getStudentGrade(student);

// const products = [
//     {name: "Телефон", price: 150},
//     {name: "Чехол", price: 20},
//     {name: "Наушники", price: 80},
//     {name: "Ноутбук", price: 700}
// ];
//
// const getProduct = products.filter((product) => {
//     return product.price > 100;
// })
//
// console.log(getProduct);

const name = ['ron', 'ron1', 'ron2'];
const upperStr = name.map((name) => {
    return name[0].toUpperCase() + name.slice(1);
})
console.log(upperStr);

const employees = [
    {name: "Анна", department: "IT", salary: 1200},
    {name: "Виктор", department: "HR", salary: 900},
    {name: "Дмитрий", department: "IT", salary: 1400},
    {name: "Ольга", department: "Sales", salary: 1100},
    {name: "Мария", department: "HR", salary: 950}
];

function groupEmployees(emp) {
    const obj = {}
    emp.forEach((item) => {
        if (item.department in obj) {
            obj[item.department].push(item)
        } else {
            obj[item.department] = [item];
        }
    })
    return obj;
}
groupEmployees(employees)

const orders = [
    {orderId: 1, product: "Телефон", quantity: 2, pricePerUnit: 300},
    {orderId: 2, product: "Ноутбук", quantity: 1, pricePerUnit: 1000},
    {orderId: 3, product: "Телефон", quantity: 1, pricePerUnit: 300},
    {orderId: 4, product: "Чехол", quantity: 5, pricePerUnit: 20},
    {orderId: 5, product: "Ноутбук", quantity: 2, pricePerUnit: 1000}
];

function allOrders(orders) {
    const obj = {
        allPrice: 0,
        productsQuantity: {}
    }
    let allPrice = 0;

    orders.forEach((item) => {
        allPrice = allPrice + item.pricePerUnit * item.quantity;
        obj.allPrice = allPrice;
        if (item.product in obj.productsQuantity) {
            obj.productsQuantity[item.product] += item.quantity
        } else {
            obj.productsQuantity[item.product] = item.quantity
        }
    })
    return obj;
}

allOrders(orders);
