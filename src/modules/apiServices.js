const request = require("request-promise");
const errorHandler = require("./errors");
// Venkatesan Karunanithi11:04 AM
// GetNewNumber API:
//     - Desc: Returns new number everytime it is called
//     - Url: GET http://megtag.com/testapis/getNewNumber
//     - Sample API Response: {"number":8.767387969529693}
// Sum API:
//     - Desc:
//     - Url: POST http://megtag.com/testapis/sum
//     - Sample Post Data: {"numbers":[8.767387969529693, 53.29820303204704]}
//     - Sample API Response: {"sum":62.065591001576735}
// Program:
// 1. Get 10 new numbers by calling GetNewNumber API
// 2. After getting 10 numbers, pass them to Sum api to get total sum of the numbers

exports.getRandomNumbers = async () => {
  try {
    let randonNum = await request.get(
      `http://megtag.com/testapis/getNewNumber`
    );
    return randonNum;
  } catch (err) {
    console.log(err);
    throw new errorHandler(err.message);
  }
};

exports.sumNumbers = async (numbersArr) => {
  try {
    let formObject = {
      numbers: numbersArr,
    };

    let reqOptions = {
      method: "POST",
      uri: `http://megtag.com/testapis/sum`,
      body: formObject,
      json: true,
    };
    let sum = await request(reqOptions);
    return sum;
  } catch (err) {
    console.log(err.message);
    throw new errorHandler(err.message);
  }
};

exports.generateRandomNumber = async () => {
  try {
    let number = await Math.floor(Math.random() * 10 + 1);
    return number;
  } catch (error) {
    console.log(error);
  }
};
