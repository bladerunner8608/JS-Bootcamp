const products = [{Name: 'Computer Mouse'}]
const product = products[0]

// Truthy - Values that resolve to true in a boolean context
// Falsy - Values that resolve to false in a boolean context
// Falsy Values - false, 0, empty string(''), null, undefined, NaN (Not a Number)
// Everything else is a truthy value

if (product) {
    console.log('Product Found!')
} else {
    console.log('Product not Found!')
}