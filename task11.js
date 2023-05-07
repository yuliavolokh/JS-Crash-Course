const productList = document.getElementById('product-list');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInput = document.getElementById('page-input');
const limitInput = document.getElementById('limit-input');
const maxPage = document.getElementById('max-page');

let currentPage = 1;
let limit = 10;
let maxPageNum = 1;

async function getProducts() {
  const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}&page=${currentPage}`);
  const data = await response.json();
  return data;
}

function createProductCard(product) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h2>${product.title}</h2>
    <p>Price: ${product.price}$</p>
    <p>Brand: ${product.brand}</p>
    <p>Rating: ${product.rating.rate}</p>
  `;
  productList.appendChild(productCard);
}

async function displayProducts() {
  productList.innerHTML = '';
  const products = await getProducts();
  products.forEach(product => {
    createProductCard(product);
  });
  maxPageNum = Math.ceil(products.length / limit);
  maxPage.textContent = maxPageNum;
  if (currentPage === 1) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
  if (currentPage === maxPageNum) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

async function updatePage() {
  currentPage = Number(pageInput.value);
  if (currentPage < 1) {
    currentPage = 1;
    pageInput.value = 1;
  } else if (currentPage > maxPageNum) {
    currentPage = maxPageNum;
    pageInput.value = maxPageNum;
  }
  await displayProducts();
}

async function updateLimit() {
  limit = Number(limitInput.value);
  currentPage = 1;
  pageInput.value = 1;
  await displayProducts();
}

prevBtn.addEventListener('click', () => {
  currentPage -= 1;
  pageInput.value = currentPage;
  displayProducts();
});

nextBtn.addEventListener('click', () => {
  currentPage += 1;
  pageInput.value = currentPage;
  displayProducts();
});

pageInput.addEventListener('change', updatePage);

limitInput.addEventListener('change', updateLimit);

displayProducts();
