const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));
function getWellCome() {
  return 'Wellcome to this course.';
}

app.get('/wellcome', (req, res) => {
  res.send(getWellCome());
});

function getGreetMessage(userName) {
  return `Hello, ${userName}!`;
}

app.get('/greet', (req, res) => {
  res.send(getGreetMessage(req.query.userName));
});

function isPasswordStrong(password) {
  let result;
  if (password.length > 15) {
    result = 'strong';
  } else {
    result = 'weak';
  }

  return `password is ${result}`;
}

app.get('/check-password', (req, res) => {
  res.send(isPasswordStrong(req.query.password));
});

function sumTwoNum(num1, num2) {
  return num1 + num2;
}
app.get('/sum', (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  console.log(num1, num2);

  res.send(sumTwoNum(num1, num2).toString());
});

function checkSubscrption(userName, isSubscribed) {
  let result;
  if (isSubscribed) {
    result = 'subscribed';
  } else {
    result = 'not subscribe';
  }
  return `${userName} is ${result}.`;
}

app.get('/sub-scription-status', (req, res) => {
  let userName = req.query.username;
  let isSubscribed = 'true' === req.query.Subscried;
  res.send(checkSubscrption(userName, isSubscribed));
});

function getDiscountedPrice(productPrice, discount) {
  let finalPrice = productPrice - (productPrice * discount) / 100;
  return finalPrice;
}

app.get('/discounted-price', (req, res) => {
  let productPrice = parseFloat(req.query.price);
  let discount = parseInt(req.query.discount);

  res.send(getDiscountedPrice(productPrice, discount).toString());
});

function makeText(age, name, gender) {
  return `hello, ${name}! you are a ${age} year old ${gender}`;
}

app.get('/personalized-greeting', (req, res) => {
  let age = req.query.age;
  let name = req.query.name;
  let gender = req.query.gender;

  res.send(makeText(age, name, gender));
});
function getFinalPrice(productPrice, discount, tax) {
  let disCountPrice = productPrice - (productPrice * discount) / 100;
  let finalPrice = disCountPrice + (productPrice * tax) / 100;
  return finalPrice.toString();
}
app.get('/final-price', (req, res) => {
  let productPrice = parseFloat(req.query.price);
  let discount = parseInt(req.query.discount);
  let tax = parseFloat(req.query.tax);
  console.log('Hello');

  res.send(getFinalPrice(productPrice, discount, tax));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
