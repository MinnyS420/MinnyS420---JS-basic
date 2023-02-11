var tax = 5;

var phonePrice = 119.95;

var taxCalculated = tax / 100 * phonePrice;

var stockNumber = 30;

var priceWithTax = phonePrice + taxCalculated;

var stokPrice = 30 * priceWithTax;

console.log("Tax", taxCalculated, "price of one phone", priceWithTax, "price of 30 peaces", stokPrice,);
console.log("calculations from https://sales-tax.calculators.ro/added-charged-sales-tax-to-before-tax-listed-selling-price.php?price_without_tax=119.95&sales_tax_rate=5%&final_price_with_tax=125.95")