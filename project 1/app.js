let p1 = new Promise((resolve, reject) => {
  if (true) {
    resolve("p1 resolve");
  } else {
    reject("p1 rejected");
  }
});
