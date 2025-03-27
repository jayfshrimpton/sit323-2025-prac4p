const express = require('express');
const app = express();
const PORT = 3000;


//Addition
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Please provide valid numbers');
    }

    const result = num1 + num2;

    res.send("The result of adding " + num1 + " and " + num2 + " is " + result);
});

//Subtraction
app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Please provide valid numbers');
    }

    const result = num1 - num2;

    res.send("The result of subtracting " + num2 + " from " + num1 + " is " + result);
});

//Multiplication
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Please provide valid numbers');
    }

    const result = num1 * num2;

    res.send("The result of multiplying " + num1 + " and " + num2 + " is " + result);
});

//Division
app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Please provide valid numbers');
    }

    if (num2 === 0) {
        return res.status(400).send('Cannot divide by zero');
    }

    const result = num1 / num2;

    res.send("The result of dividing " + num1 + " by " + num2 + " is " + result);
});

app.listen(PORT, () => {
    console.log(`Calculator service running on port ${PORT}`);
  });
