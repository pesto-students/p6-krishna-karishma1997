function getNumber() {
  const promise = new Promise((reject, resolve) => {
    const random_number = parseInt(Math.random() * 100);
    setTimeout(() => {
      if (random_number % 5 === 0) {
        console.log(random_number, "resolve");
        resolve("Resolved number", random_number);
      } else {
        console.log(random_number, "reject");
        reject("Rejected number ", random_number);
      }
    }, random_number * 10);
  });

  promise
    .then(function (value) {
      console.log(value);
    })
    .catch(function (value) {
      console.log(value);
    })
    .finally(function () {
      console.log(promise, "promise");
    });

  console.log(promise);
}
getNumber();
