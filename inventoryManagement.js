// Write your code here
// Task 2: Create the Product Inventory Array
// The test reinitializes this, but we define it here first.
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Task 3: Access Product Information
// The test expects "Laptop" (index 0) to be logged.
function logFirstProduct() {
    console.log(products[0]);
}

// Task 4: Add a Product
// Adds the product to the end of the array.
function addProduct(productName) {
    products.push(productName);
}

// Task 5: Update Product Information
// Changes the name at a specific index.
function updateProductName(index, newName) {
    products[index] = newName;
}

// Task 6: Remove a Product
// Removes the last item from the array.
function removeLastProduct() {
    products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};