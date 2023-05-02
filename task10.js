//Task 1
function getPromise(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}
//Task 2
function calcArrProduct(arr) {
  return new Promise((resolve, reject) => {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        reject("Error! Incorrect array!");
        return;
      }
      product *= arr[i];
    }
    resolve(product);
  });
}