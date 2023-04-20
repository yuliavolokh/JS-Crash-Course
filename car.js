// add new car to the table
const car = {
    brand: 'Kia',
    model: 'Optima',
    year: 2015,
    price: 17000,
};
const tableBody = document.querySelector('#product-table tbody');
// add product to the table
function addProductToTable(product) {

    tableBody.innerHTML += `<tr>
                                <th scope="row">${product.brand}</th>
                                <td>${product.model}</td>
                                <td>${product.year}</td>
                                <td>${product.price}</td>
                            </tr>`;
}
addProductToTable(products);

function readProduct() {
    const brandInput = document.getElementById('brandInput');
    const modelInput = document.getElementById('modelInput');
    const yearInput = document.getElementById('yearInput');
    const priceInput = document.getElementById('priceInput');

    return {
        brand: brandInput.value,
        model: modelInput.value,
        year: yearInput.value,
        price: priceInput.value, 
    };
}
// click
const addBtn = document.getElementById('add-product-btn');
addBtn.onclick = () => {
    console.log("Clicked!");
    addProductToTable(car);
};
function filterCars() {
        const search = document.getElementById("search").value.toLowerCase();
        const filteredCars = cars.filter((car) =>
          car.model.toLowerCase().includes(search)
        );
        renderCars(filteredCars);
}; 
function clearCars() {
  cars = [];
  renderCars();
};
function addCar() {
  const brandInput = document.getElementById('brandInput');
    const modelInput = document.getElementById('modelInput');
    const yearInput = document.getElementById('yearInput');
    const priceInput = document.getElementById('priceInput');

  if (brand && model && year && price) {
    const car = { brand, model, year, price };
    cars.push(car);
    renderCars();
  } else {
    alert("Будь ласка, заповніть всі поля форми");
  }
}