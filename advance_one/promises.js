const promiseOne = new Promise(function (resolve, reject) {
  // Do some async task
  // DB calls, cryptograpgy, network
  setTimeout(() => {
    console.log('async task is completed');
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log('Pormise consumed');
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('async task 2');
    resolve();
  }, 1000);
}).then(function () {
  console.log('async task 2 resolved');
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: 'chai', email: 'chai@example.com' });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function (user) {
    let error = true;
    if (!error) {
      resolve({ username: 'Nur', password: '123' });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  });
